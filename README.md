# 🕰️ Trowback: Buka Web Yg hanya di buka tahun 2009

> *"Masa lalu adalah negeri asing: mereka melakukan segala sesuatunya secara berbeda di sana."*  
> — Namun terkadang, Anda hanya perlu mengubah jam untuk berkunjung.

[![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express.js-4.x-blue?logo=express)](https://expressjs.com)
[![EJS](https://img.shields.io/badge/Template-EJS-ff69b4?logo=javascript)](https://ejs.co)
[![License](https://img.shields.io/badge/License-MIT-purple)](LICENSE)

---

## 🎯 What Is This?

**Trowback** adalah sebuah eksperimen web interaktif yang hanya bisa diakses jika kamu **mengatur tanggal sistem perangkatmu ke 13 Januari 2009**.

Tidak ada login. Tidak ada password.  
Hanya waktu yang bisa membukanya.

> ⚠️ Peringatan: Anda mungkin perlu merestart browser setelah mengganti tanggal.

---

## 🚀 Demo

![Preview](https://i.imgur.com/6kL8hJf.gif)

> Saat tanggal sistem benar, portal ke era MySpace, Flash, dan dial-up terbuka kembali.

---

## 🔐 How It Works

Website ini menggunakan **JavaScript di sisi klien** untuk memeriksa apakah tanggal lokal perangkat pengguna cocok dengan tanggal target:

```js
new Date(2009, 0, 13); // 13 Januari 2009
Jika cocok → konten tersembunyi muncul.
Jika tidak → pengguna diminta untuk "kembali ke masa lalu". 

    ✅ Tidak ada deteksi tanggal di server — karena kita tidak ingin tahu tanggalmu.
    🔮 Tapi browsermu tahu. Dan itu cukup.
```

🛠️ Tech Stack 
1.  Node.js & Express – Server backend ringan
2.  EJS – Template engine untuk rendering halaman
3.  Vanilla JavaScript – Cek tanggal lokal
4.  No databases, no auth, no tracking – Hanya nostalgia murni


     
