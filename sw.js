// install
self.addEventListener("install", evt =>{
    console.log("service worker has been installed")
})

// activate data
self.addEventListener("activate", evt =>{
    console.log("service worker has been activated")
})
// fetch


self.addEventListener("fetch", evt =>{
    console.log("fetch event", evt)
})