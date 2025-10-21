
const CACHE_NAME = '7k-constitution-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/index.tsx',
  '/App.tsx',
  '/types.ts',
  '/constants/articles.ts',
  '/constants/icons.tsx',
  '/hooks/useUserData.ts',
  '/components/Home.tsx',
  '/components/FlashcardMode.tsx',
  '/components/MCQMode.tsx',
  '/components/ReelsMode.tsx',
  '/components/ArticleDetailView.tsx',
  '/components/ProgressView.tsx',
  '/components/SearchModal.tsx',
  '/components/FilterBar.tsx',
  '/components/Navigation.tsx',
  '/components/SingleMCQ.tsx',
  '/components/ArticleListView.tsx',
  '/components/SplashScreen.tsx',
  'https://cdn.tailwindcss.com',
  'https://aistudiocdn.com/react@^19.2.0',
  'https://aistudiocdn.com/react-dom@^19.2.0/',
  'https://aistudiocdn.com/react@^19.2.0/'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});