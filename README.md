# 🤫 Whisper – Secret Sharing Platform

Whisper is a full-stack web application built using **Node.js**, **Express.js**, and **EJS** that fetches and displays anonymous secrets from an external API in a clean and minimal UI.

This project demonstrates:
- Server-side rendering with EJS
- Fetching data from an external API using Axios
- Serving static files with Express

---

## 🚀 Features

- Fetches random secrets from a public API
- Displays the secret along with the anonymous username
- Clean UI using custom CSS
- Simple and beginner-friendly project structure

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Templating Engine:** EJS
- **HTTP Client:** Axios
- **Frontend:** HTML, CSS
- **API Used:** Secrets API (App Brewery)

---

## 📁 Project Structure

```

Whisper-Secret-Sharing-Platform/
│
├── public/
│   ├── images/
│   │   └── whisper-img.jpg
│   └── styles/
│       └── main.css
│
├── views/
│   └── index.ejs
│
├── index.js
├── package.json
├── package-lock.json
└── README.md

````

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/Whisper-Secret-Sharing-Platform.git
````

### 2️⃣ Navigate to the project folder

```bash
cd Whisper-Secret-Sharing-Platform
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Run the server

```bash
node index.js
```

### 5️⃣ Open in browser

```
http://localhost:3000
```

---

## 🔄 How It Works

1. The server listens on **port 3000**
2. When the user visits `/`, the app:

   * Sends a GET request to the Secrets API using Axios
   * Receives a random secret and username
   * Passes the data to `index.ejs`
3. EJS dynamically renders the secret on the page

---

## 📌 API Endpoint Used

```
https://secrets-api.appbrewery.com/random
```

---

## 🎯 Learning Outcomes

* Understanding Express server setup
* Using Axios for API calls
* Passing data from backend to EJS templates
* Serving static assets (CSS, images)
* Error handling with `try-catch`
