const MAX_ENERGY = 3
const MIN_ENERGY = .5

let asteroid = 0

function onClone(st) {
    augment(this, st)
}

function charge() {
    if (this.charging) return
    this.energy = 0
    this.charging = true
}

function evo(dt) {
    if (this.charging) {
        this.energy = min(this.energy + dt, MAX_ENERGY)
    }
}

function fire() {
    const energy = this.energy
    this.energy = 0
    this.charging = false
    if (energy < MIN_ENERGY) return

    lab.spawn(dna.asteroid, {
        name: 'asteroid' + (++asteroid),
        x: this.originX,
        y: this.originY,
        dx: this.dx,
        dy: -1,
        r: 20 + RND(30),
        speed: 100 * energy,
    })
}
