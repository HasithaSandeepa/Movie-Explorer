# 🎬 Movie Explorer

Movie Explorer is a React + Vite-powered web application that allows users to discover and search for movies using The Movie Database (TMDb) API. It features a dynamic user interface with dark/light mode switching, a carousel of popular movies, and responsive movie listings with detailed views.

---

## 🚀 Live Demo

[Click here to view the deployed app](#) _(Add your deployed URL here)_

---

## 📦 Tech Stack

- **Frontend**: React + Vite
- **UI Framework**: Material UI (MUI)
- **Routing**: React Router DOM
- **API**: TMDb API
- **State**: React Context API
- **Deployment**: Netlify / Vercel

---

## 🛠️ Project Setup

1. **Clone the repository**

   ```bash
   git clone https://gitlab.com/your-repo/movie-explorer.git
   cd movie-explorer
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   or

   ```bash
   pnpm install
   ```

3. **Add TMDb API key**

   Create a `.env` file in the root directory and add:

   ```
   VITE_API_KEY=your_tmdb_api_key_here
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

---

## 🔌 API Integration

Using [The Movie Database API (TMDb)](https://developers.themoviedb.org/3), the app fetches:

- **Trending Movies**: `/trending/movie/day`
- **Movie Search**: `/search/movie`
- **Movie Details**: `/movie/{id}?append_to_response=videos,credits`

Requests are made using `axios`, and the API key is managed via environment variables.

---

## 🧩 Features Implemented

### ✅ Core Features

- **Movie Search**: Users can search for movies by title.
- **Trending Section**: Displays current popular movies.
- **Movie Details Page**: Overview, genres, release info, cast, trailer.
- **Responsive Layout**: Works on all devices using MUI Grid.
- **Dark/Light Theme Toggle**: Built-in theme switcher with MUI.

### 🎞️ Carousel

- Highlights top 5 trending movies with a backdrop image.
- Shows title, release date, rating, and short description.

### 🌟 Movie Cards

- Grid-based layout showing movies with posters.
- Hover overlay reveals details.
- Star ratings with custom colors.

### 💾 Favorites (Optional)

- Add/remove favorite movies and store them in `localStorage`.

---

## 📁 Folder Structure

```
src/
├── assets/
├── components/
├── context/
├── pages/
├── router/
├── services/
├── theme/
├── App.jsx
└── main.jsx
```

---

## 📤 Deployment

To deploy on [Netlify](https://netlify.com) or [Vercel](https://vercel.com):

1. Push your code to GitHub/GitLab.
2. Connect the repository.
3. Set the environment variable `VITE_TMDB_API_KEY`.
4. Use the default build command:

   ```bash
   npm run build
   ```

5. Output directory: `dist`

---
