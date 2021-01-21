song1 = ""
song2 = ""
function preload() {
  song1 = loadSound("song 1 opening 5.mp3")
  song2 = loadSound("song 2 opening 6.mp3")
}
function setup() {
  canvas = createCanvas(500, 500)
  canvas.center()
  video = createCapture(VIDEO)
  video.hide()
}
function draw() {
  image(video, 0, 0, 500, 500,)
}