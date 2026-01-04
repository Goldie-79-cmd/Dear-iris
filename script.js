const start = document.getElementById("start")
const letter = document.getElementById("letter")
const lines = document.querySelectorAll(".line")
const music = document.getElementById("music")

start.onclick = () => {
start.style.display = "none"
letter.style.display = "flex"
music.volume = 0.4
music.play()
let delay = 0
lines.forEach(line => {
setTimeout(() => {
line.style.opacity = 1
}, delay)
delay += 3500
})
}