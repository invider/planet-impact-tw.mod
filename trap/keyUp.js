function keyUp(e) {
    switch(e.code) {
        case 'ShiftLeft':  lab.leftGun.fire(); break;
        case 'ShiftRight': lab.rightGun.fire(); break;
    }
}
