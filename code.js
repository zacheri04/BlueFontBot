const ioHook = require("iohook");
const robotjs = require("robotjs");

ioHook.on('keydown', event => {
    console.log(event);
    if (event.rawcode == 45) {
        var mousePos = robotjs.getMousePos();
        robotjs.moveMouse(660, 185);
        robotjs.mouseClick("left", false);
        robotjs.moveMouse(823, 250);
        robotjs.mouseClick("left", false);
        robotjs.moveMouse(mousePos.x, mousePos.y);
    }
});

ioHook.start();