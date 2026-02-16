# Crazy Matching 🧩

A fast-paced browser matching game backend powered by **Node.js**,
**Express**, and **Firebase Firestore**, designed to handle score
tracking, leaderboard display, and game result storage.

------------------------------------------------------------------------

## 📌 About The Project

**Crazy Matching** was created as part of **Global Accessibility
Awareness Day (GAAD) 2025** to raise awareness about **visual
accessibility and perception differences**.\
The goal is to demonstrate how visual challenges affect gameplay
experience and encourage developers to think more inclusively when
designing interfaces.

This project was built *from the heart* --- inspired by the developer
culture of creating passion projects that are meaningful, experimental,
and community-driven. Plus with AI pairing 👾.

------------------------------------------------------------------------

## 🚀 Features

-   Static game hosting (HTML/CSS/JS frontend)
-   Leaderboard API
-   Score submission endpoint
-   Firebase Firestore integration
-   Environment-based credential configuration
-   CORS enabled
-   JSON body parsing

------------------------------------------------------------------------

## 🧱 Tech Stack

**Backend** - Node.js - Express - Firebase Admin SDK - dotenv - CORS

**Database** - Firebase Firestore

**Frontend** - Static files served from `/public`

------------------------------------------------------------------------

## 📂 Project Structure

    crazy-matching/
    ├── public/
    ├── app.js
    ├── package.json
    ├── scores.db
    ├── .env
    └── LICENSE

------------------------------------------------------------------------

## ⚙️ Installation

### Clone repository

    git clone https://github.com/Lahphim/crazy-matching.git
    cd crazy-matching

### Install dependencies

    npm install

### Create .env file

    project_id=YOUR_FIREBASE_PROJECT_ID
    client_email=YOUR_FIREBASE_CLIENT_EMAIL
    private_key=YOUR_FIREBASE_PRIVATE_KEY
    PORT=3000

------------------------------------------------------------------------

## ▶️ Run Server

    npm start

Server runs at: http://localhost:3000

------------------------------------------------------------------------

## 🔌 API Endpoints

### GET /

Returns main game page.

### GET /scoreboard

Returns leaderboard page.

### GET /scores

Returns all scores sorted descending.

Example response:

    [
      {
        "name": "Player1",
        "score": 200,
        "difficulty": "hard",
        "vision_mode": "normal",
        "finished_time": 45,
        "time_stamp": 1710000000
      }
    ]

------------------------------------------------------------------------

### POST /save-score

Example body:

    {
      "name": "Player1",
      "score": 200,
      "difficulty": "hard",
      "vision_mode": "normal",
      "finished_time": 45,
      "time_stamp": 1710000000
    }

------------------------------------------------------------------------

## 🔐 Environment Variables

  Variable       Description
  -------------- --------------------------------
  project_id     Firebase project ID
  client_email   Firebase service account email
  private_key    Firebase private key
  PORT           Server port

------------------------------------------------------------------------

## 🧪 Development Notes

-   Static files must exist in `/public`
-   Firestore collection name = `scores`
-   No authentication layer yet

------------------------------------------------------------------------

## 🛠 Future Improvements

-   Rate limiting
-   Input validation
-   Authentication
-   Anti-cheat protection
-   Pagination leaderboard
-   Docker support

------------------------------------------------------------------------

## 📜 License

MIT License © 2025 Somsak Arnon

------------------------------------------------------------------------

## 🤝 Contributing

Pull requests are welcome.\
For major changes, open an issue first.

------------------------------------------------------------------------

## ⭐ Support

If you like this project, consider starring the repository ⭐
