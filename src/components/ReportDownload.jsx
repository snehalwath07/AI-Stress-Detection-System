import jsPDF from "jspdf";

export default function ReportDownload({ latest }) {

  const downloadReport = () => {

    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("Stress Assessment Report", 20, 20);

    doc.setFontSize(12);

    doc.text(
      `Stress Level: ${latest?.stress_level || "N/A"}`,
      20,
      40
    );

    doc.text(
      `Sleep Hours: ${latest?.sleep || "N/A"}`,
      20,
      55
    );

    doc.text(
      `Working Hours: ${latest?.work || "N/A"}`,
      20,
      70
    );

    doc.text(
      `Screen Time: ${latest?.screen || "N/A"}`,
      20,
      85
    );

    doc.text(
      `Water Intake: ${latest?.water || "N/A"}`,
      20,
      100
    );

    doc.text(
      `Exercise Hours: ${latest?.exercise || "N/A"}`,
      20,
      115
    );

    doc.text(
      `Mood Score: ${latest?.mood || "N/A"}`,
      20,
      130
    );

    doc.text(
      `Social Score: ${latest?.social || "N/A"}`,
      20,
      145
    );

    doc.text(
      `Generated On: ${new Date().toLocaleString()}`,
      20,
      170
    );

    doc.save("Stress_Report.pdf");
  };

  return (
    <button
      onClick={downloadReport}
      className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-xl font-semibold"
    >
      📄 Download Report
    </button>
  );
}