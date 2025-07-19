# 🛫 RR Airways — Premium Airline Booking Platform

**RR Airways** is a premium, full-stack airline booking platform developed to provide a real-world, enterprise-grade airline experience. Inspired by leading global airlines such as Qatar Airways, Emirates, and Singapore Airlines, it blends modern technologies with feature-rich functionality.

This isn't just a flight search tool — it's a **complete digital airline solution**, offering:

- A sleek and scalable frontend built with React, TypeScript, Tailwind CSS, and modern UI libraries  
- A secure, RESTful backend powered by Spring Boot and MySQL  
- Advanced modules for real-time flight booking, seat selection, multi-city search, and loyalty program management  
- Additional features like live chat support, role-based admin panel, notifications, and travel advisories

Whether it’s for casual users booking a trip, frequent flyers tracking loyalty points, or admins managing bookings and analytics, **RR Airways** delivers a seamless, enterprise-level digital experience.

This project demonstrates proficiency in **full-stack development, enterprise application architecture, secure JWT-based authentication, state management, and REST API design**.

---


# 🌐 Frontend Overview (`rr-airways-frontend`)

## 🛠️ Tech Stack

- **React 18 + TypeScript + Vite**
- **Tailwind CSS**
- **Zustand** (State management)
- **Framer Motion**
- **React Router**
- **Lucide React** (Icons)
- **React Hook Form**
- **Recharts, date-fns, hot-toast**

## 📦 Architecture & Structure

```
src/
├── components/           # UI components (Navbar, SeatMap, BookingForm, etc.)
├── pages/                # Page routes (Home, Booking, Dashboard)
├── store/                # Zustand stores (auth, booking)
├── layouts/              # Layouts (MainLayout, AdminLayout)
├── assets/               # Images and static files
└── App.tsx               # Main App setup with routing
```

## 💡 Core Features

### ✈️ Flight Booking

- One-way, round-trip, multi-city support
- Advanced search filters
- Real-time flight results display
- Interactive seat selection
- Multi-step booking flow with passenger forms and add-ons

### 👤 User & Auth

- JWT-based mock auth (Zustand state)
- Register, login, logout flows
- Protected routes based on role
- Loyalty tiers (Silver, Gold, Platinum)

### 🧑‍💼 Admin Panel

- Admin dashboard with metrics
- CRUD: Flights, Users, Bookings
- Role-based access control
- Charts and analytics with `Recharts`

### 🧬 Support & Travel Advisory

- Category-filtered FAQ (Health, Security, Docs)
- Real-time travel advisory system (High/Med/Low)
- Emergency contact by region
- COVID & weather alerts

## 🎨 Design System

- Color palette: Maroon `#5C0A1D`, Gold `#C9B37E`
- Fonts: `Inter` + `Playfair Display`
- 8px grid spacing, accessible design
- Fully responsive (mobile-first)
- Smooth animations via Framer Motion

## 🔐 State Management

- **Zustand Store**
  - `authStore`: login, register, token, role
  - `bookingStore`: selected flight, seat, passenger info
- **Persisted State** via middleware

---

## 🚀 How to Run Frontend

```bash
# Clone the repository
cd rr-airways-frontend
npm install
npm run dev
```

- Frontend will be available at: `http://localhost:5173`
- Make sure backend is running at `http://localhost:8080` (adjust `.env` or axios base URL if needed)

---

# 📁 Backend Overview (`rr-airways-backend`)

## 🛠️ Tech Stack

- **Java 17**
- **Spring Boot 3.x**
- **Spring Security (JWT)**
- **Spring Data JPA**
- **MySQL**
- **Maven**

## 💡 Core Backend Features

- User Registration & Login with JWT
- Role-based Access Control (User, Admin, Super Admin)
- Booking System with seat mapping and user association
- Flight Management (Add/Search)
- Notifications & Admin logs
- RESTful APIs integrated with frontend

## 🚀 How to Run Backend

### Prerequisites:
- Java 17
- MySQL
- Maven

### Steps:
```bash
# Clone the backend repository
cd rr-airways-backend

# Set up MySQL
CREATE DATABASE rr_airways_db;

# Add credentials in `application.properties`
spring.datasource.username=your_mysql_username
spring.datasource.password=your_mysql_password

# Build and run the Spring Boot application
mvn clean install
mvn spring-boot:run
```

- Backend runs at `http://localhost:8080`
- Swagger can be enabled for testing APIs

---

# 🔍 Database Schema (MySQL)

- **users** (id, username, password, roles)
- **flights** (id, from, to, departureTime, arrivalTime, seats, price)
- **bookings** (id, user_id, flight_id, seat_number)
- **notifications** (id, message, user_id)
- **airports** (id, code, name, location)

---

# ⚙️ Integration Notes

- CORS is enabled in backend (`CorsConfig.java`) for frontend origin `http://localhost:3000`
- Frontend uses axios/fetch to call backend routes like `/api/auth/login`, `/api/flights/search`, etc.
- JWT token is stored in Zustand state and attached in `Authorization` header

---

# 📄 Deployment

Frontend:
- Host via Netlify/Vercel/Render
- Point to backend API endpoint

Backend:
- Host via Render, or VPS
- Ensure MySQL DB is hosted 
- Set environment variables (`application.properties`)

# 🖼️ Screenshots

### 1️⃣ Explore Page
Welcome screen with featured flights and global destinations.

![Screenshot_19-7-2025_181034_shiny-hotteok-ba275a netlify app](https://github.com/user-attachments/assets/371b4516-444b-413e-a057-85b83b949f53)



### 2️⃣ Book Flight
Booking form with one-way, round-trip, and multi-city support.

![Screenshot_19-7-2025_181340_shiny-hotteok-ba275a netlify app](https://github.com/user-attachments/assets/acacade0-4792-44d4-a1af-9c506ae19b0b)


### 3️⃣ Search Flights
Search results page with filters, sorting, and flight options.

![Screenshot_12-7-2025_181646_localhost](https://github.com/user-attachments/assets/0ca51ce9-ca33-42d8-b60f-4b6d74767535)


### 4️⃣ Experience
Luxury travel experiences and membership perks.
![Screenshot_19-7-2025_18169_shiny-hotteok-ba275a netlify app](https://github.com/user-attachments/assets/614aee9f-5b75-40d4-96e0-79c913c6dc2b)


### 5️⃣ Help & Support
Category-based FAQ, travel advisories, and live support.

![Screenshot_12-7-2025_182029_localhost](https://github.com/user-attachments/assets/4b770e06-750a-4e4f-a7f6-8659f754a5a5)


### 6️⃣ Login Page
User login with validation and error messages.
![Screenshot_12-7-2025_182122_localhost](https://github.com/user-attachments/assets/3a269bbf-a397-4da4-a17f-6fe77295841d)


### 7️⃣ Sign Up Page
User registration with form validation and tier assignment.

![Screenshot_12-7-2025_182146_localhost](https://github.com/user-attachments/assets/7976f461-1631-4f44-925c-325dcc7f0881)



### 8️⃣ User Dashboard
View bookings, loyalty status, and account details.

![Screenshot_12-7-2025_18253_localhost](https://github.com/user-attachments/assets/de1658f3-4098-4e2a-ab96-c6cdcc7de96f)

### 9️⃣ Passenger Info
Collect traveler details with validations and accessibility.

![Screenshot_12-7-2025_182631_localhost](https://github.com/user-attachments/assets/4b3a1218-8bf4-4dae-b960-4827dfada10d)


### 🔟 Seat Selection
Interactive aircraft layout with real-time seat selection.

![Screenshot_12-7-2025_182828_localhost](https://github.com/user-attachments/assets/0bd1ff2d-662a-4be5-9192-1b656f9b5658)


### 1️⃣1️⃣ Add-ons & Payment
Select meals, extra baggage, and proceed to payment.

![Screenshot_12-7-2025_18302_localhost](https://github.com/user-attachments/assets/6834564e-e93a-4fd9-b64a-a648beeb9b35)



### 1️⃣2️⃣ Booking Confirmed
Confirmation screen with ticket details and QR code boarding pass.

![Screenshot_12-7-2025_183115_localhost](https://github.com/user-attachments/assets/f689a3fe-8fc9-4a74-b1ec-d9eba342e21a)


### 1️⃣3️⃣ Recent Bookings
Review your recent flights and manage upcoming trips.

![Screenshot_12-7-2025_183230_localhost](https://github.com/user-attachments/assets/ab5b80ea-d9d2-42fa-944c-f893d2796aa3)


### 1️⃣4️⃣ Admin Dashboard
Manage users, flights, and view analytics with charts.

![Screenshot_12-7-2025_183442_localhost](https://github.com/user-attachments/assets/dc55dd3b-a139-4381-8a67-6c1d4c11fa2a)



### 1️⃣5️⃣ Admin Panel
Manage flights, users, and monitor system performance efficiently.





### 1️⃣6️⃣ Join RR Airways Privilege Club
Choose Your Starting Tier
<img width="1095" height="822" alt="screenshot-1752929912670" src="https://github.com/user-attachments/assets/3ca04b50-20fa-4de2-a204-2502376ebf03" />










---

> Built by Ravi Rajanolla ❤️ | RR Airways | Fullstack Airline Booking System
