# 🚴 Mallorca Bike Routes App

An open-source mobile app built with Expo (React Native) to explore cycling routes across Mallorca, tailored for riders of all levels.

## 🌍 Overview

This app helps cyclists discover scenic and challenging routes across the island of Mallorca. It includes curated paths for beginners, intermediate, and advanced riders, complete with distance, difficulty, and GPS coordinates.

## 📱 Features

- 🔒 Authentication (Supabase)
- 📊 Route levels: Beginner, Intermediate, Advanced
- 🗺️ Map integration with route display
- ⭐ Save favorite routes
- 🔎 View detailed info: distance, elevation, type of terrain
- 🧭 (Planned) Live GPS tracking
- 📤 (Planned) Offline mode

## 🧱 Tech Stack

| Layer        | Tech                     |
|--------------|--------------------------|
| Frontend     | Expo (React Native)      |
| Navigation   | Expo Router              |
| Backend      | Supabase (Auth + DB)     |
| Database     | PostgreSQL (via Supabase)|
| Maps         | Mapbox (planned)         |
| State Mgmt   | Context API (lightweight)|
| Styling      | NativeWind (Tailwind)    |

## 🏁 Getting Started

```bash
git clone https://github.com/your-username/mallorca-bike-app.git
cd mallorca-bike-app
npm install
npx expo start
