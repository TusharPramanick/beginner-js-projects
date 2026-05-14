 //converts the time into milliseconds
const launchDay = new Date("August 1, 2026 00:00:00").getTime()

// converts every 1000 miliseconds into 1 second.
setInterval(() =>{
    const now = new Date().getTime()
    const diff = launchDay - now

    // converts miliseonds back to actual time
    const d = Math.floor(diff / (1000 * 60 * 60 * 24))
    const h = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const m = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60))
    const s = Math.floor(diff % (1000 * 60) / 1000);

    // assigns the data back to the ids
    document.getElementById('day').textContent = d
    document.getElementById('hours').textContent = h
    document.getElementById('minutes').textContent = m
    document.getElementById('seconds').textContent = s
}, 1000)