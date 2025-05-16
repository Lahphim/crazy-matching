require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const path = require('path');

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.project_id,
    clientEmail: process.env.client_email,
    privateKey: process.env.private_key.replace(/\\n/g, '\n')
  })
});

const db = admin.firestore();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/scoreboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'scoreboard.html'));
});

app.get('/scores', async (req, res) => {
  try {
    const snapshot = await db.collection('scores').orderBy('score', 'desc').get();
    const data = snapshot.docs.map(doc => doc.data());
    res.json(data);
  } catch (err) {
    res.status(500).send('❌ Failed to load scores');
  }
});

app.post('/save-score', async (req, res) => {
  try {
    const { name, score, difficulty, vision_mode, finished_time, time_stamp } = req.body;
    await db.collection('scores').add({
      name,
      score,
      difficulty,
      vision_mode,
      finished_time,
      time_stamp
    });
    res.send('✅ Score saved to Firebase');
  } catch (err) {
    console.error(err);
    res.status(500).send('❌ Failed to save score');
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
