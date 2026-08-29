# Sistem Carian ID DELIMa — SK Sungai Isap Murni

Versi 2: carian melalui Vercel API dengan access code. Data murid tidak lagi berada dalam folder public `/data`.

## Deploy
1. Upload semua fail/folder ini ke repository GitHub yang sama.
2. Pastikan `api/search.js` berada dalam folder `api` dan `lib/students.js` berada dalam folder `lib`.
3. Di Vercel: Project → Settings → Environment Variables.
4. Tambah:
   - Name: `DELIMA_ACCESS_CODE`
   - Value: access code rahsia sekolah
   - Environment: Production (dan Preview jika diperlukan)
5. Redeploy.

Jangan masukkan access code ke dalam `index.html` atau GitHub.


Nota: Jangan tambah `vercel.json` dengan `functions.runtime` untuk projek ini. Vercel akan auto-detect Node.js API Function.
