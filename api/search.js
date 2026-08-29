const students = require("../lib/students");

function cors(res) {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Content-Type-Options", "nosniff");
}

module.exports = async (req, res) => {
  cors(res);

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const configured = process.env.DELIMA_ACCESS_CODE;
  if (!configured) {
    return res.status(500).json({ error: "Access code belum dikonfigurasi di Vercel." });
  }

  let body = req.body || {};
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch {}
  }

  const code = String(body.code || "");
  const q = String(body.q || "").trim().toLowerCase();

  if (!code || code !== configured) {
    return res.status(401).json({ error: "Access code tidak sah." });
  }

  if (q.length < 2) {
    return res.status(400).json({ error: "Masukkan sekurang-kurangnya 2 aksara." });
  }

  const results = students
    .filter(s => s.name.toLowerCase().includes(q))
    .slice(0, 30);

  return res.status(200).json({ results, total: results.length });
};
