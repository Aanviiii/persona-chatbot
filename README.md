# Persona-Based AI Chatbot

A persona-driven AI chatbot that allows users to interact with three distinct personalities from Scaler/InterviewBit:

* **Anshuman Singh** (Direct, execution-focused mentor)
* **Abhimanyu Saxena** (Structured, strategic thinker)
* **Kshitij Mishra** (Friendly educator)

---

## 🚀 Live Demo

(Add your Vercel link here after deployment)

---

## 🛠 Tech Stack

* Frontend: HTML, CSS, JavaScript
* Backend: Vercel Serverless Functions
* AI API: OpenRouter (LLM API)
* Deployment: Vercel

---

## ✨ Features

* Persona-based conversations with 3 distinct personalities
* System prompts with:

  * Persona description
  * Few-shot examples
  * Output instructions
  * Constraints
* Persona switcher (resets chat)
* Typing indicator
* Clean and responsive UI
* Error handling for API failures

---

## 📁 Project Structure

```
persona-chatbot/
│
├── api/
│   └── chat.js
├── public/
│   └── index.html
├── prompts.js
├── prompts.md
├── reflection.md
├── README.md
├── .env.example
├── .gitignore
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```
git clone <your-repo-link>
cd persona-chatbot
```

### 2. Install dependencies

```
npm install
```

### 3. Add environment variables

Create `.env.local`:

```
OPENROUTER_API_KEY=your_api_key_here
```

---

### 4. Run locally

```
vercel dev
```

Open:

```
http://localhost:3000
```

---

## 🔐 Security

* API keys are stored in `.env.local`
* `.env` is ignored using `.gitignore`
* `.env.example` is provided as a template
* No secrets are exposed in the frontend

---

## 📌 Notes

* Persona switching resets the conversation
* Each persona uses a unique system prompt
* Prompts are designed using prompt engineering best practices