
# 7k Constitution

An interactive Progressive Web App (PWA) designed to help you learn, understand, and master the foundational articles (1-51A) of the Indian Constitution.

**Live Demo:** [**https://constitution.7kc.me**](https://constitution.7kc.me)

## 📖 Description

The 7k Constitution app provides a modern, engaging, and mobile-first platform for students, law aspirants, civil service candidates, and anyone interested in the Indian polity. It transforms the process of learning the Constitution from a passive reading exercise into an active, gamified experience. With full offline capabilities, you can continue your learning journey anytime, anywhere.

## ✨ Key Features

*   **Multiple Learning Modes**: Choose the method that suits you best.
    *   **Flashcards**: A classic, effective way to memorize article titles and numbers.
    *   **MCQ Quiz**: Test your knowledge with dynamically generated multiple-choice questions.
    *   **Browse List**: A clean, filterable list view to explore all articles at your own pace.
    *   **Reels Mode**: A visually engaging, full-screen, short-form summary of each article for quick, bite-sized learning.
*   **In-Depth Article View**: Go beyond the title with comprehensive details for each article, including:
    *   Simple Summary
    *   Detailed Explanation
    *   Full Original Text
    *   Landmark Supreme Court Cases
    *   Personal Notes Section
*   **Progress Tracking**: Visualize your study habits. The app tracks articles you've marked as favorites or taken notes on.
*   **Powerful Search**: Instantly find any article by its number, title, or relevant tags.
*   **Offline First (PWA)**: Install the app on your phone, tablet, or desktop. All content is cached, ensuring it works seamlessly without an internet connection.
*   **Article of the Day**: A curated article is featured on the home screen every day to encourage consistent learning.
*   **Clean & Responsive UI**: A modern, accessible design that works beautifully on all screen sizes, with a dark mode option.

## 🛠️ Technology Stack

*   **Frontend**: React, TypeScript
*   **Styling**: Tailwind CSS
*   **PWA Core**: Service Workers, Web App Manifest
*   **Client-Side Storage**: `localStorage` for persisting user notes and favorites.

## 🚀 Project Structure

The codebase is organized to be clean, modular, and easy to understand.

```
/
├── public/                 # Static assets (icons, manifest.json) - Not user visible
├── src/
│   ├── components/         # Reusable React components
│   ├── constants/          # Static data (articles, icons)
│   ├── hooks/              # Custom React hooks (e.g., useUserData)
│   ├── App.tsx             # Main app component, layout, and routing
│   ├── index.tsx           # Application entry point & service worker registration
│   ├── sw.js               # Service Worker logic for caching and offline functionality
│   └── types.ts            # TypeScript type definitions
└── README.md               # This file
```

## 💻 How to Use

1.  **Visit the Website**: Open [**https://constitution.7kc.me**](https://constitution.7kc.me) in your browser.
2.  **Install the App**: Click the "Install" button in the header (on supported browsers) to add the app to your home screen for a native-like experience and offline access.
3.  **Explore**: Use the navigation bar to switch between different learning modes.
4.  **Learn & Track**: Click on any article to view its details. Mark it as a favorite or add notes to track your progress.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
