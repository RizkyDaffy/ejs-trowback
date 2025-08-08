const express = require('express');
const app = express();
const PORT = 3000;

// Set EJS sebagai view engine
app.set('view engine', 'ejs');
app.use(express.static('public')); // untuk CSS/JS tambahan (opsional)

// Route utama
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
