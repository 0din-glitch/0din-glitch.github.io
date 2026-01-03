// ===================================
// PARTICLE ANIMATION
// ===================================
const canvas = document.getElementById("particles")
const ctx = canvas.getContext("2d")

// Set canvas size
function resizeCanvas() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}
resizeCanvas()
window.addEventListener("resize", resizeCanvas)

// Particle class
class Particle {
  constructor() {
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.size = Math.random() * 2 + 1
    this.speedX = Math.random() * 1 - 0.5
    this.speedY = Math.random() * 1 - 0.5
    this.opacity = Math.random() * 0.5 + 0.2
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY

    // Wrap around screen
    if (this.x > canvas.width) this.x = 0
    if (this.x < 0) this.x = canvas.width
    if (this.y > canvas.height) this.y = 0
    if (this.y < 0) this.y = canvas.height
  }

  draw() {
    ctx.fillStyle = `rgba(0, 212, 255, ${this.opacity})`
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
  }
}

// Create particles
const particlesArray = []
const particleCount = 100

for (let i = 0; i < particleCount; i++) {
  particlesArray.push(new Particle())
}

// Animation loop
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update()
    particlesArray[i].draw()

    // Draw lines between nearby particles
    for (let j = i + 1; j < particlesArray.length; j++) {
      const dx = particlesArray[i].x - particlesArray[j].x
      const dy = particlesArray[i].y - particlesArray[j].y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < 150) {
        ctx.strokeStyle = `rgba(0, 212, 255, ${0.2 * (1 - distance / 150)})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(particlesArray[i].x, particlesArray[i].y)
        ctx.lineTo(particlesArray[j].x, particlesArray[j].y)
        ctx.stroke()
      }
    }
  }

  requestAnimationFrame(animateParticles)
}

animateParticles()

// ===================================
// MULTILINGUAL GREETING
// ===================================
const greetings = [
  "Good day",
  "Bonjour", // French
  "こんにちは", // Japanese
  "Buenos días", // Spanish
  "Guten Tag", // German
  "Buongiorno", // Italian
  "你好", // Chinese
  "안녕하세요", // Korean
  "Olá", // Portuguese
  "Здравствуйте", // Russian
]

let greetingIndex = 0
const greetingElement = document.getElementById("greeting")

function morphGreeting() {
  greetingElement.style.opacity = "0"
  greetingElement.style.transform = "translateY(-10px)"

  setTimeout(() => {
    greetingIndex = (greetingIndex + 1) % greetings.length
    greetingElement.textContent = greetings[greetingIndex]
    greetingElement.style.opacity = "1"
    greetingElement.style.transform = "translateY(0)"
  }, 500)
}

setInterval(morphGreeting, 3000)

// ===================================
// MINIATURE PIXELATED MAP
// ===================================
const miniMapCanvas = document.getElementById("miniMap")
const miniMapCtx = miniMapCanvas.getContext("2d")

miniMapCanvas.width = 400
miniMapCanvas.height = 400

const pixelSize = 8

// Simplified world map (pixelated continents)
function drawPixelatedMap() {
  // Ocean background
  miniMapCtx.fillStyle = "#0a2463"
  miniMapCtx.fillRect(0, 0, miniMapCanvas.width, miniMapCanvas.height)

  // Continents (simplified pixelated shapes)
  miniMapCtx.fillStyle = "#1e5128"

  // Africa (highlighted - Lagos, Nigeria)
  const africaPixels = [
    [22, 18],
    [23, 18],
    [24, 18],
    [22, 19],
    [23, 19],
    [24, 19],
    [25, 19],
    [22, 20],
    [23, 20],
    [24, 20],
    [25, 20],
    [23, 21],
    [24, 21],
    [25, 21],
    [24, 22],
    [25, 22],
  ]

  africaPixels.forEach(([x, y]) => {
    miniMapCtx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize)
  })

  // Other continents (lighter green)
  miniMapCtx.fillStyle = "#4e6c50"

  // Europe
  const europePixels = [
    [24, 14],
    [25, 14],
    [24, 15],
    [25, 15],
    [26, 15],
  ]
  europePixels.forEach(([x, y]) => {
    miniMapCtx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize)
  })

  // Asia
  const asiaPixels = [
    [30, 12],
    [31, 12],
    [32, 12],
    [33, 12],
    [30, 13],
    [31, 13],
    [32, 13],
    [33, 13],
    [34, 13],
    [31, 14],
    [32, 14],
    [33, 14],
    [34, 14],
  ]
  asiaPixels.forEach(([x, y]) => {
    miniMapCtx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize)
  })

  // North America
  const naPixels = [
    [10, 10],
    [11, 10],
    [12, 10],
    [10, 11],
    [11, 11],
    [12, 11],
    [13, 11],
    [11, 12],
    [12, 12],
    [13, 12],
  ]
  naPixels.forEach(([x, y]) => {
    miniMapCtx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize)
  })

  // South America
  const saPixels = [
    [14, 20],
    [15, 20],
    [14, 21],
    [15, 21],
    [15, 22],
    [15, 23],
  ]
  saPixels.forEach(([x, y]) => {
    miniMapCtx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize)
  })

  // Australia
  const ausPixels = [
    [38, 28],
    [39, 28],
    [38, 29],
    [39, 29],
  ]
  ausPixels.forEach(([x, y]) => {
    miniMapCtx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize)
  })

  // Pulsing marker for Lagos, Nigeria
  const markerX = 24 * pixelSize
  const markerY = 19 * pixelSize

  let pulseSize = 0
  let pulseDirection = 1

  function animateMarker() {
    // Redraw map
    miniMapCtx.fillStyle = "#0a2463"
    miniMapCtx.fillRect(0, 0, miniMapCanvas.width, miniMapCanvas.height)

    // Redraw continents
    miniMapCtx.fillStyle = "#1e5128"
    africaPixels.forEach(([x, y]) => {
      miniMapCtx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize)
    })
    miniMapCtx.fillStyle = "#4e6c50"
    europePixels.forEach(([x, y]) => {
      miniMapCtx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize)
    })
    asiaPixels.forEach(([x, y]) => {
      miniMapCtx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize)
    })
    naPixels.forEach(([x, y]) => {
      miniMapCtx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize)
    })
    saPixels.forEach(([x, y]) => {
      miniMapCtx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize)
    })
    ausPixels.forEach(([x, y]) => {
      miniMapCtx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize)
    })

    // Pulsing marker
    miniMapCtx.fillStyle = "#ff3366"
    miniMapCtx.beginPath()
    miniMapCtx.arc(markerX + pixelSize / 2, markerY + pixelSize / 2, 4 + pulseSize, 0, Math.PI * 2)
    miniMapCtx.fill()

    // Pulse ring
    miniMapCtx.strokeStyle = `rgba(255, 51, 102, ${1 - pulseSize / 6})`
    miniMapCtx.lineWidth = 2
    miniMapCtx.beginPath()
    miniMapCtx.arc(markerX + pixelSize / 2, markerY + pixelSize / 2, 8 + pulseSize * 2, 0, Math.PI * 2)
    miniMapCtx.stroke()

    pulseSize += pulseDirection * 0.1
    if (pulseSize >= 6 || pulseSize <= 0) pulseDirection *= -1

    requestAnimationFrame(animateMarker)
  }

  animateMarker()
}

drawPixelatedMap()

// ===================================
// KONAMI CODE CHEAT CODE
// ===================================
const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "KeyB", "KeyA"]
let konamiIndex = 0

document.addEventListener("keydown", (e) => {
  const key = e.code

  if (key === konamiCode[konamiIndex]) {
    konamiIndex++
    if (konamiIndex === konamiCode.length) {
      activateCheatCode()
      konamiIndex = 0
    }
  } else {
    konamiIndex = 0
  }
})

function activateCheatCode() {
  const modal = document.getElementById("cheatModal")
  modal.style.display = "block"

  // Play celebration animation
  confetti()
}

// Close modal
const closeBtn = document.querySelector(".cheat-close")
closeBtn.addEventListener("click", () => {
  document.getElementById("cheatModal").style.display = "none"
})

window.addEventListener("click", (e) => {
  const modal = document.getElementById("cheatModal")
  if (e.target === modal) {
    modal.style.display = "none"
  }
})

// Simple confetti effect
function confetti() {
  const colors = ["#00d4ff", "#ff3366", "#ffd700", "#00ff88", "#ff6b6b"]
  const confettiCount = 50

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div")
    confetti.style.position = "fixed"
    confetti.style.width = "10px"
    confetti.style.height = "10px"
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)]
    confetti.style.left = Math.random() * window.innerWidth + "px"
    confetti.style.top = "-20px"
    confetti.style.opacity = "1"
    confetti.style.zIndex = "10001"
    confetti.style.borderRadius = "50%"
    confetti.style.pointerEvents = "none"

    document.body.appendChild(confetti)

    const fall = confetti.animate(
      [
        {
          transform: "translateY(0) rotate(0deg)",
          opacity: 1,
        },
        {
          transform: `translateY(${window.innerHeight + 20}px) rotate(${Math.random() * 720}deg)`,
          opacity: 0,
        },
      ],
      {
        duration: Math.random() * 2000 + 2000,
        easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
    )

    fall.onfinish = () => confetti.remove()
  }
}

// ===================================
// SMOOTH SCROLL
// ===================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// ===================================
// SCROLL ANIMATIONS
// ===================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

document.querySelectorAll(".pixel-card, .cert-card, .timeline-item").forEach((el) => {
  observer.observe(el)
})

// ===================================
// NAVBAR BACKGROUND ON SCROLL
// ===================================
let lastScroll = 0
const nav = document.querySelector(".nav")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    nav.style.background = "rgba(10, 14, 39, 0.95)"
    nav.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.3)"
  } else {
    nav.style.background = "rgba(10, 14, 39, 0.8)"
    nav.style.boxShadow = "none"
  }

  lastScroll = currentScroll
})

// ===================================
// RETRO GAME SOUND EFFECTS (Visual only)
// ===================================
document.querySelectorAll(".pixel-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.animationPlayState = "paused"
  })

  card.addEventListener("mouseleave", () => {
    card.style.animationPlayState = "running"
  })
})

// ===================================
// CONSOLE MESSAGE
// ===================================
console.log("%c👋 Hey there!", "font-size: 20px; font-weight: bold; color: #00d4ff;")
console.log(
  "%cLooking for a Product Support & Development Leader who delivers measurable impact?",
  "font-size: 14px; color: #ff3366;",
)
console.log("%cLet's talk: iwinosa.ozigbo04@gmail.com", "font-size: 14px; color: #ffd700;")
console.log("%c💡 Try the Konami Code: ↑ ↑ ↓ ↓ B A", "font-size: 12px; color: #00ff88;")

