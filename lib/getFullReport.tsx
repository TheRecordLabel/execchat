import { AGENT_API } from "./consts";
import formatPdf from "./formatPdf";
import getPdfReport from "./getPdfReport";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getFullReport = async (context: any) => {
  try {
    const response = await fetch(`${AGENT_API}/api/get_full_report`, {
      method: "POST",
      body: JSON.stringify(context),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    const reportContent = getPdfReport(data.reportContent);
    return {
      reportContent: formatPdf(reportContent),
      rawContent: data.reportContent,
      nextSteps: data.nextSteps,
      artistName: data.username,
      artistBanner: data.avatar,
    };
  } catch (error) {
    console.error(error);
    return {
      reportContent: "",
      rawContent: "",
      artistName: "",
      artistBanner: "",
      nextSteps: "",
    };
  }
};

export default getFullReport;
