import { useArtistProvider } from "@/providers/ArtistProvider";
import { ACTIONS } from "@/types/Autopilot";
import { useEffect, useMemo, useState } from "react";
import trackAction from "@/lib/stack/trackAction";
import { useUserProvider } from "@/providers/UserProvder";
import useApprovedOrDeniedActions from "./useApprovedOrDeniedActions";
import useRunningAgents from "./useRunningAgents";
import useFansSegments from "./useFansSegments";
import useSocialActions from "./useSocialActions";
import useArtistComments from "./useArtistComments";
import getNewAction from "@/lib/getNewAction";
import { v4 as uuidV4 } from "uuid";

const useAutopilot = () => {
  const { selectedArtist } = useArtistProvider();
  const { address } = useUserProvider();
  const { curLiveAgent } = useRunningAgents();
  const { fansSegments, fansSegmentsAction } = useFansSegments();
  const { socialActions } = useSocialActions();
  const { comments, artistActions } = useArtistComments();
  const [actions, setActions] = useState<any>([]);
  const { existingActions, addExistingActions } = useApprovedOrDeniedActions();

  const defaultActions = useMemo(
    () => [...fansSegmentsAction, ...socialActions, ...artistActions],
    [fansSegmentsAction, socialActions, artistActions],
  );

  const deny = async (index: number) => {
    const temp = [...actions];
    temp.splice(index, 1);
    setActions([...temp]);
    trackAction(
      address,
      actions[index],
      selectedArtist?.account_id || "",
      false,
    );
  };

  useEffect(() => {
    const init = async () => {
      if (actions.length >= 3) return;
      if (existingActions.length) {
        const filtered = defaultActions.filter(
          (action) => !existingActions.some((ele: any) => ele.id === action.id),
        );
        setActions(filtered);
        if (filtered.length < 3 && comments.length) {
          const temp: any = [];
          const newActionPromise = Array.from({
            length: 3 - filtered.length,
          }).map(async () => {
            const newAction = await getNewAction(comments);
            if (newAction)
              temp.push({
                type: ACTIONS.AI_ACTION,
                title: newAction,
                id: uuidV4(),
                timeStamp: new Date().getTime(),
              });
          });
          await Promise.all(newActionPromise);
          setActions(temp);
        }
      }
    };
    init();
  }, [defaultActions, existingActions, comments, actions]);

  return {
    actions,
    deny,
    comments,
    eventsLogs: existingActions,
    fansSegments,
    curLiveAgent,
    addExistingActions,
  };
};

export default useAutopilot;
