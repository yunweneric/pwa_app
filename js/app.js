if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then((reg) => console.log('service worker register'))
        .catch((e) => console.log('service worker not registered', e))
}