import PDFDocument from "pdfkit-table";

export function buildDPF(dataCallback, endCallback) {
  const doc = new PDFDocument();

  doc.on("data", dataCallback);
  doc.on("end", endCallback);

  doc.text("Hello world!");

  const table = {
    title: "Title",
    subtitle: "Subtitle",
    headers: ["Country", "Conversion rate", "Trend"],
    rows: [
      ["Switzerland", "12%", "+1.12%"],
      ["France", "67%", "-0.98%"],
      ["England", "33%", "+4.44%"],
    ],
  };

  doc.table(table, {
    width: 300,
  });

  doc.table(table, {
    columnsSize: [200, 100, 100],
  });

  doc.end();
}
