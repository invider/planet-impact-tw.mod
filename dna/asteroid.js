
const df = {
    x: 0,
    y: 0,
    r: 50,
    dx: 0,
    dy: 0,
    speed: 0,
    lifetime: 100,
}

function onClone(st) {
    augment(this, df, st) 
}

function touch(obj) {
    const d = dist(this.x, this.y, obj.x, obj.y)
    return (d < this.r + obj.r)
}

function hit(obj) {
    kill(this)
}

function evo(dt) {
    this.x += this.dx * this.speed * dt
    this.y += this.dy * this.speed * dt

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
    const { x, y, r } = this
    image(res.asteroid, x-r, y-r, 2*r, 2*r)
}
