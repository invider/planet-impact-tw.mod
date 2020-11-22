
const df = {
    x: 0,
    y: 0,
    r: 50,
    angle: 0,
    dx: 0,
    dy: 0,
    speed: 0,
    angleSpeed: .5 * PI,
    lifetime: 100,
}

function onClone(st) {
    augment(this, df, st) 
}

function touch(obj) {
    const d = dist(this.x, this.y, obj.x, obj.y)
    return (d < (this.r + obj.r) * .7)
}

function hit(obj) {
    kill(this)
    sfx(res.impact, .3)
}

function evo(dt) {
    this.x += this.dx * this.speed * dt
    this.y += this.dy * this.speed * dt
    this.angle += this.angleSpeed * dt

    this.lifetime -= dt
    if (this.lifetime <= 0) kill(this)

    // collision detection
    const source = this
    lab._ls.forEach(e => {
        if (e === source) return
        if (e.touch && e.touch(source)) e.hit(source)
    })
}

function draw() {
    const { x, y, r, angle } = this
    save()
    translate(x, y)
    rotate(angle)

    image(res.asteroid, -r, -r, 2*r, 2*r)

    restore()
}
