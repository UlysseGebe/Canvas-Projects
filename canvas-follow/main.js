const $canvas = document.querySelector('.js-canvas')
const context = $canvas.getContext('2d')


/**
 * Resize
 */
let windowWidth = $canvas.width
let windowHeight = $canvas.height

const resize = () =>
{
    windowWidth = window.innerWidth
    windowHeight = window.innerHeight

    $canvas.width = windowWidth
    $canvas.height = windowHeight
}

window.addEventListener('resize', resize)
resize()

/**
 * Ball
 */
const ball = {}
ball.x = 100
ball.y = 100
ball.radius = 50
ball.speed = {}
ball.speed.x = 0
ball.speed.y = 0

/**
 * Cursor
 */
const cursor = {}
cursor.x = 0
cursor.y = 0

$canvas.addEventListener('mousemove', (_event) =>
{
    cursor.x = _event.clientX
    cursor.y = _event.clientY
})

/**
 * Animation
 */
const loop = () =>
{
    window.requestAnimationFrame(loop)

    // Update Ball
    const angle = Math.atan2(cursor.y - ball.y, cursor.x - ball.x)
    const x = Math.cos(angle)
    const y = Math.sin(angle)

    ball.speed.x += x * 2
    ball.speed.y += y * 2

    ball.speed.x *= 0.9
    ball.speed.y *= 0.9

    ball.x += ball.speed.x
    ball.y += ball.speed.y
    
    // Clear
    // context.clearRect(0, 0, windowWidth, windowHeight)
    context.fillStyle = 'rgba(255, 255, 255, 0.1)'
    context.fillRect(0, 0, windowWidth, windowHeight)

    // Draw
    context.beginPath()
    context.fillStyle = 'orange'
    context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2)
    context.fill()
}


loop()