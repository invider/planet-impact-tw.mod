
let x = rx(.5)
let y = ry(.5)
const r = ry(.075)

let dx = cos(0.25*PI)
let dy = sin(0.25*PI)
let speed = ry(.2)

function touch(obj) {
    const d = dist(x, y, obj.x, obj.y)
    return (d < r + obj.r)
}

function hit(obj) {
    if (obj.dead) return
    log.out('planet is hit!')
    obj.dead = true
    kill(obj)
}

function evo(dt) {
    const lx = x
    const ly = y
    x += dx * dt * speed
    y += dy * dt * speed

    if (x < r || x > rx(1)-r) {
        dx *= -1
        x = lx
        y = ly
    }
    if (y < r || y > ry(1)-r) {
        dy *= -1
        x = lx
        y = ly
    }
}

function draw() {
    image(res.planet, x - r, y - r, 2*r, 2*r)
}
