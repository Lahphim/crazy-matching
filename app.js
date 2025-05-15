const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;
const db = new sqlite3.Database('./scores.db');
const path = require('path');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

db.run(`CREATE TABLE IF NOT EXISTS scores (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  score INTEGER,
  difficulty TEXT,
  vision_mode TEXT,
  finished_time REAL,
  time_stamp TEXT
)`);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/scoreboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'scoreboard.html'));
});

app.get('/scores', (req, res) => {
  db.all('SELECT * FROM scores ORDER BY score DESC, finished_time ASC', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post('/save-score', (req, res) => {
  const { name, score, difficulty, vision_mode, finished_time, time_stamp } = req.body;
  const stmt = db.prepare(`INSERT INTO scores (name, score, difficulty, vision_mode, finished_time, time_stamp)
    VALUES (?, ?, ?, ?, ?, ?)`);
  stmt.run(name, score, difficulty, vision_mode, finished_time, time_stamp, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Failed to save score");
    }
    res.send("Score saved");
  });
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
