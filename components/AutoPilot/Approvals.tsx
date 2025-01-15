import { useArtistProvider } from "@/providers/ArtistProvider";
import { Terminal } from "lucide-react";
import ActionBox from "./ActionBox";
import { useApprovalsProvider } from "@/providers/ApprovalsProvider";

const Approvals = () => {
  const { toggleCreation } = useArtistProvider();
  const { socials } = useApprovalsProvider();

  return (
    <div className="border p-2 rounded-md flex flex-col grow">
      <div className="flex items-center gap-2 pb-1 border-b">
        <Terminal className="h-5 w-5" />
        <h1 className="text-sm font-inter_bold">WAITING FOR REVIEW</h1>
      </div>
      <div className="grow pt-4 px-2 space-y-1 text-xs">
        {socials.map((social) => (
          <ActionBox socialName={social} key={social} />
        ))}
      </div>
      <div className="flex items-end gap-2 text-xs">
        <button
          className="border px-2 py-1 rounded-md"
          onClick={toggleCreation}
        >
          + Add Artist
        </button>
      </div>
    </div>
  );
};

export default Approvals;
