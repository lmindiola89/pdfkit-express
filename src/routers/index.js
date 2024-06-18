import { Router } from "express";
import { buildDPF } from "../libs/pdfkit.js";

const router = new Router();

router.get("/invoice", (req, res) => {
  const stream = res.writeHead(200, {
    "content-type": "application/pdf",
    "contente-Disposition": "attachment; filename=invoice.pdf",
  });

  buildDPF(
    (data) => stream.write(data),
    () => stream.end
  );

  res.send("invoice");
});

export default router;
