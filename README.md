# DevCraft 🚀
### A Guided MERN Stack Learning Platform & Developer Community

> **IN2901 Software Development Project**  
> **Faculty of Information Technology, University of Moratuwa**  
> **Team Name**: DoD  
> **Supervisor**: Ms. M.N. Chandimali  
> **Mentor**: Mr. H.K. Gaminda Ishara (Creative Software)

---

## 📖 Overview

DevCraft is an intelligent, gamified learning ecosystem and developer community specifically engineered to bridge the pedagogical gap for MERN (MongoDB, Express.js, React.js, Node.js) stack learners. 

It tackles "tutorial hell", compiler anxiety, and passive learning through:
- **Guided Workspaces**: Tri-Panel IDE with real-time background AST validation and progressive step unlocking.
- **The Theory Dojo**: Interactive "fill in the blank" code snippets, notes, video series, and streak rewards.
- **Debugging Simulator**: Time-attack minigame with lives (hearts) and simulated error logs to overcome debugging fear.
- **Dual-Purpose Community**: Categorized technical blogs and WebSocket-driven discussion forums.
- **Hybrid Mentorship**: AI agent assistance with consumable coins + human mentor marketplace.
- **Gamified Rewards & Leaderboard**: Global XP leaderboards and discounts for top learners.

---

## 👥 Team Members & Responsibilities

| Index No | Name | Primary Responsibility |
| :--- | :--- | :--- |
| **244068K** | **Gunasekara M.I.T.** | **The Guided Coding Workspace (Tri-Panel IDE, AST Validation, Meme Engine)** |
| 244230C | Wijesiri K.S.K. | The Theory Dojo (Notes, Video Series, Quizzes) & UI/UX Architectural Direction |
| 244047V | Dinisuru P.W.L. | Hybrid Mentorship Ecosystem (Coin AI Agent) & Discount Rewards Engine |
| 244118P | Madhushan M.A. | The Debugging Simulator (Time-Attack Game) & Gamified Leaderboard |
| 244096T | Kalhari L.T. | Dual Purpose Community (Categorized Blog & Real-Time Chat) |

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS, Monaco Editor API, Lucide Icons, Framer Motion
- **Backend**: Node.js, Express.js, Socket.io, MongoDB
- **Testing & Validation**: AST Parsers, Jest / Mocha silent evaluation engine
- **Payments & AI**: PayHere Gateway, Gemini / OpenAI API

---

## 📁 Repository Structure

```text
IDE/
├── client/          # Frontend application (React + Vite + Tailwind + Monaco Editor)
├── server/          # Backend API (Node.js + Express + MongoDB)
├── package.json     # Root orchestration (concurrent scripts)
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended, verified on v24)
- [npm](https://www.npmjs.com/) (v9+)

### Installation
```bash
# Clone the repository
git clone https://github.com/inusha-thathsara/DevCraft---IN2901-Team-DoD.git
cd DevCraft---IN2901-Team-DoD

# Install all dependencies
npm run install-all
```

### Running Locally
```bash
# Start both client and server concurrently
npm run dev

# Or run separately:
cd client && npm run dev    # Client runs at http://localhost:5173
cd server && npm run dev    # Server runs at http://localhost:5000
```
