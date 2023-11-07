if ('serviceWorker' in ServiceWorker) {
    navigator.serviceWorker.register('/sw.js', {
        scope: '/'
    }).then(response => {
        console.log("Service Worker Register Successfully")
    })
}