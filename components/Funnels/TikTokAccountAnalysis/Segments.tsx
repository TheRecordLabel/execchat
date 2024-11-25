import { useTikTokAnalysisProvider } from "@/providers/TIkTokAnalysisProvider";

const Segments = () => {
  const { segments } = useTikTokAnalysisProvider();
  return (
    <div className="mx-2 border-gray-700 border-[1px] rounded-md p-2">
      <p className="text-md font-bold">Brand Partnerships</p>
      <div className="flex gap-2 flex-wrap pt-2">
        {segments
          .map((obj) => ({
            name: Object.keys(obj)[0],
            count: Object.values(obj)[0],
          }))
          .flat()
          .slice(0, 10)
          .map((segment) => (
            <button
              className="flex flex-col items-center gap-1 max-w-[100px]"
              type="button"
              key={segment.name}
            >
              <div className="border-[grey] border-[1px] rounded-md p-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={"/segment.svg"}
                  alt="not found logo"
                  className="!w-5 !h-5"
                />
              </div>
              <p className="font-bold text-xs text-center">
                {segment.name} {`(${segment.count})`}
              </p>
            </button>
          ))}
      </div>
    </div>
  );
};

export default Segments;
