# Sistem Carian ID DELIMa V4

## Architecture
- `index.html` — interface
- `api/search.js` — server-side access verification + search
- `data/students.json` — **database murid sahaja**
- `assets/logo-simurnis-3d.png` — logo
- `DELIMA_ACCESS_CODE` — Vercel Environment Variable

## Database update workflow
Bila Excel DELIMa baharu diterima, hanya gantikan:

`data/students.json`

Jangan ubah `index.html` atau `api/search.js` jika struktur data kekal:

```json
{
  "name": "NAMA MURID",
  "id": "ID DELIMA",
  "class": "KELAS"
}
```

Selepas commit/push ke `main`, Vercel akan auto-deploy.

## Important
Jangan letakkan fail Excel asal dalam folder public website. Simpan Excel sebagai sumber master secara berasingan.
