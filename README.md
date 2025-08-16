# CampusX

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![Node.js](https://img.shields.io/badge/Node.js-20.2.0-green?logo=node.js)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15.5-blue?logo=postgresql)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.3-blue?logo=tailwind-css)
![Prisma](https://img.shields.io/badge/Prisma-4.15.0-blue)
![WebRTC](https://img.shields.io/badge/WebRTC-real-time-purple)

CampusConnect is a **Next.js + Node.js full-stack social platform** designed for college students to **connect, share, and collaborate**. Users can post updates, join communities, chat, video call, and attend events. Moderators manage content and ensure community standards.

---

## 📑 Table of Contents

1. [Features](#features)  
2. [User Roles](#user-roles)  
3. [Tech Stack](#tech-stack)  
4. [Getting Started](#getting-started)  
5. [Setup & Installation](#setup--installation)  
6. [Screenshots](#screenshots)  
7. [Future Enhancements](#future-enhancements)  
8. [License](#license)  

---

## ✅ Features

- **Role-Based Platform**: Students and Moderators (Admin-like features)  
- **Social Feed**: Post updates, like, comment, share  
- **Communities & Groups**: Join/create groups for hobbies or projects  
- **Real-Time Chat & Video Calls**: Powered by WebRTC  
- **Event Scheduling**: Create, RSVP, with optional Google Calendar sync  
- **Notifications & Alerts**: Stay informed about posts, events, and messages  
- **Profile & Portfolio**: Showcase skills, projects, and achievements  
- **Search & Explore**: Discover friends, groups, and trending content  
- **Responsive Design**: Mobile-first design with TailwindCSS  
- **Caching & Performance**: Redis for faster responses  

---

## 👥 User Roles

### Student
- Create and interact with posts  
- Join groups and events  
- Chat and video call peers  

### Moderator
- Manage community content and membership  
- Moderate posts and comments  
- Access analytics for engagement  

---

## 🛠️ Tech Stack

| Layer         | Technology |
|---------------|------------|
| Frontend      | Next.js, TailwindCSS, React |
| Backend       | Node.js, Express |
| Database      | PostgreSQL with Prisma ORM |
| Realtime      | WebRTC for chat & video |
| Caching       | Redis |
| Authentication| JWT / NextAuth.js |
| Deployment    | Vercel (frontend) / Node.js server (backend) |

---

## ⚡ Getting Started

### Prerequisites
- Node.js >= 20  
- PostgreSQL >= 15  
- Redis (optional for caching)  

### Clone the Repository
```bash
git clone <your-repo-url>
cd campusconnect
