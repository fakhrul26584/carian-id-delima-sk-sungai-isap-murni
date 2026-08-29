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


### Logo update
The current `assets/logo-simurnis-3d.png` is the modern 3D school crest. Replace this file when a newer approved logo is available.


## Database terkini
- Sumber: ID DELIMA MURID.xlsx
- Tahun: 2026
- Rekod unik: 297
- Fail database: `data/students.json`


## Logo asal sekolah
Untuk kembali kepada logo asal, gantikan `assets/logo-simurnis-3d.png` dengan fail logo asal sekolah **menggunakan nama fail yang sama**. `index.html` versi 4.1 sudah membuang perspektif/3D styling; logo akan dipaparkan sebagai artwork asal dengan shadow yang sangat minimum.


## Logo FIX v4.2
`assets/logo-simurnis.png` kini menggunakan logo asal sekolah yang dibekalkan, tanpa 3D. `index.html` menggunakan path ini secara terus. Background putih luar telah dibuat transparent; bahagian putih yang merupakan sebahagian daripada logo dikekalkan.
