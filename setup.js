function setup() {

    lab.spawn(dna.gun, {
        name: 'leftGun',
        originX: 0,
        originY: ry(1),
        dx: 1,
    })

    lab.spawn(dna.gun, {
        name: 'rightGun',
        originX: rx(1),
        originY: ry(1),
        dx: -1,
    })
}
