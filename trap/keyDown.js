function keyDown(e) {
    switch(e.code) {
        case 'ShiftLeft':  lab.leftGun.charge(); break;
        case 'ShiftRight': lab.rightGun.charge(); break;
    }
}
