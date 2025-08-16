# CampusConnect

![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-20.2.0-green?logo=node.js)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15.5-blue?logo=postgresql)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.3-blue?logo=tailwind-css)
![Prisma](https://img.shields.io/badge/Prisma-4.15.0-blue)
![WebRTC](https://img.shields.io/badge/WebRTC-real-time-purple)

CampusConnect is a **social media platform for college students** to engage, share, and collaborate on projects and ideas. Students can post updates, follow peers, chat, join groups, and schedule events, fostering a connected campus community.

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

- **Role-Based Users**: Students and Moderators (Admin-like features for groups).  
- **Social Feed**: Post updates, like, comment, share.  
- **Groups & Communities**: Join or create groups for projects or hobbies.  
- **Real-Time Chat & Video Calls**: Powered by WebRTC.  
- **Event Scheduling**: Create, RSVP, and integrate with Google Calendar.  
- **Notifications & Alerts**: Stay updated on new posts, events, or messages.  
- **Profile & Portfolio**: Showcase skills, projects, and achievements.  
- **Search & Explore**: Find friends, groups, and trending posts.  
- **Responsive Design**: Works on web and mobile devices.  

---

## 👥 User Roles

### Student
- Create and interact with posts.  
- Join groups and events.  
- Chat and video call with peers.  

### Moderator / Admin
- Manage group content and membership.  
- Moderate posts and comments for community standards.  
- Access analytics for engagement.  

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React, TailwindCSS |
| Backend | Node.js, Express |
| Database | PostgreSQL with Prisma ORM |
| Realtime | WebRTC for chat & video |
| Caching | Redis |
| Authentication | JWT / OAuth |
| Deployment | Vercel / Heroku / Node.js server |

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
