
let x = rx(.5)
let y = ry(.5)
const r = ry(.075)
let angle = 0
let co2 = 0

let dx = cos(0.25*PI)
let dy = sin(0.25*PI)
let speed = ry(.2)
let angleSpeed = -.2 * PI

function touch(obj) {
    const d = dist(x, y, obj.x, obj.y)
    return (d < r + obj.r)
}

function hit(obj) {
    if (obj.dead) return
    co2 += .1
    obj.dead = true
    kill(obj)
    sfx(res.impact, 1)
}

function evo(dt) {
    const lx = x
    const ly = y
    x += dx * dt * speed
    y += dy * dt * speed
    angle += angleSpeed * dt

    // screen edge boundaries
    if (x < r || x > rx(1)-r) {
        dx *= -1
        x = lx
        y = ly
        sfx(res.boing, .7)
    }
    if (y < r || y > ry(1)-r) {
        dy *= -1
        x = lx
        y = ly
        sfx(res.boing, .7)
    }
}

function draw() {
    save()
    translate(x, y)
    rotate(angle)

    stroke(round(255 * co2), 80, round(255 * (1-co2)))
    lineWidth(7)
    circle(0, 0, r)
    image(res.planet, -r, -r, 2*r, 2*r)

    restore()
}
