<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Secret Page</title>
  <style>
    body {
      font-family: 'Courier New', monospace;
      background-color: #000;
      color: #0f0;
      text-align: center;
      padding: 50px;
    }
    .hidden {
      display: none;
    }
    .glitch {
      font-size: 3rem;
      text-shadow: 0 0 5px #0f0;
      animation: flicker 1.5s infinite;
    }
    @keyframes flicker {
      0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { text-shadow: 0 0 5px #0f0; }
      20%, 24%, 55% { text-shadow: 0 0 20px #0f0, 0 0 30px #0f0; }
    }
  </style>
</head>
<body>
  <!-- Ini konten yang hanya muncul jika tanggal benar -->
  <div id="secret-content" class="hidden">
    <h1 class="glitch">🔓 Welcome to 2009!</h1>
    <p>You've set your date to January 13, 2009.<br/>The time warp is complete.</p>
    <img src="https://i.imgur.com/6kL8hJf.gif" alt="Old internet" />
  </div>

  <!-- Pesan default -->
  <div id="wrong-date">
    <h2>Access Denied</h2>
    <p>To unlock this page, set your device's date to <strong>January 13, 2009</strong>.</p>
    <p id="current-date"></p>
  </div>

  <script>
    // Cek tanggal lokal pengguna
    const today = new Date();
    const targetDate = new Date(2009, 0, 13); // Januari = 0

    // Tampilkan tanggal saat ini untuk debugging
    document.getElementById('current-date').textContent = 
      `Current device date: ${today.toDateString()}`;

    // Bandingkan tanggal (tanpa waktu)
    if (
      today.getFullYear() === targetDate.getFullYear() &&
      today.getMonth() === targetDate.getMonth() &&
      today.getDate() === targetDate.getDate()
    ) {
      // Tampilkan konten rahasia
      document.getElementById('secret-content').classList.remove('hidden');
      document.getElementById('wrong-date').style.display = 'none';
    }
  </script>
</body>
</html>
