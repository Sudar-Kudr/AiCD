function draw_line_by_brezenhem_O_x_and_Y(x0, y0, x_end, y_end, color) {
    ctx44.fillStyle = color;
    var dx = x_end - x0;
    var dy = y_end - y0;

    var sign_x = Math.sign(dx);
    var sign_y = Math.sign(dy);

    var x = x0;
    var y = y0;
    var e = 0;

    if (Math.abs(dx) > Math.abs(dy)) {
        while (x !== x_end) { //идём от начала точки до конца точки (по Х)
            e += 2 * dy;
            if (Math.abs(e) >= Math.abs(dx)) {
                y += sign_y;
                e -= 2 * sign_x * sign_y * dx;
            }
            ctx44.fillRect(x, y, 2, 2);
            x += sign_x;
        }
    } else {
        while (y !== y_end) { //идём от начала точки до конца точки (по Y)
            e += 2 * dx;
            if (Math.abs(e) >= Math.abs(dy)) {
                x += sign_x;
                e -= 2 * sign_x * sign_y * dy;
            }
            ctx44.fillRect(x, y, 2, 2);
            y += sign_y;
        }
    }
}

function draw_x_and_Y(P0, P1, P2, color) {
    if (get_distance(P0, P1, P2) < 1) {
        draw_line_by_brezenhem_O_x_and_Y(Math.floor(P0.x), Math.floor(P0.y), Math.floor(P2.x), Math.floor(P2.y), color)
        return
    }
    let P0_11 = {
        x: 0,
        y: 0
    }

    let P11_1 = {
        x: 0,
        y: 0
    }

    let P00_2 = {
        x: 0,
        y: 0
    }

    P0_11.x = (P0.x + P1.x) * 0.5
    P0_11.y = (P0.y + P1.y) * 0.5
    P11_1.x = (P2.x + P1.x) * 0.5
    P11_1.y = (P2.y + P1.y) * 0.5
    P00_2.x = (P0_11.x + P11_1.x) * 0.5
    P00_2.y = (P0_11.y + P11_1.y) * 0.5

    draw_x_and_Y(P0, P0_11, P00_2, color)
    draw_x_and_Y(P00_2, P11_1, P2, color)
}

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

function draw_line_by_brezenhem_O_x_and_Y_3D(x0, y0, x_end, y_end, color) {
    ctx444.fillStyle = color;
    var dx = x_end - x0;
    var dy = y_end - y0;

    var sign_x = Math.sign(dx);
    var sign_y = Math.sign(dy);

    var x = x0;
    var y = y0;
    var e = 0;

    if (Math.abs(dx) > Math.abs(dy)) {
        while (x !== x_end) { //идём от начала точки до конца точки (по Х)
            e += 2 * dy;
            if (Math.abs(e) >= Math.abs(dx)) {
                y += sign_y;
                e -= 2 * sign_x * sign_y * dx;
            }
            ctx444.fillRect(x, y, 2, 2);
            x += sign_x;
        }
    } else {
        while (y !== y_end) { //идём от начала точки до конца точки (по Y)
            e += 2 * dx;
            if (Math.abs(e) >= Math.abs(dy)) {
                x += sign_x;
                e -= 2 * sign_x * sign_y * dy;
            }
            ctx444.fillRect(x, y, 2, 2);
            y += sign_y;
        }
    }
}

function draw_x_and_Y_3D(P0, P1, P2, color) {
    if (get_distance(P0, P1, P2) < 1) {
        draw_line_by_brezenhem_O_x_and_Y_3D(Math.floor(P0.x), Math.floor(P0.y), Math.floor(P2.x), Math.floor(P2.y), color)
        return
    }
    let P0_11 = {
        x: 0,
        y: 0
    }

    let P11_1 = {
        x: 0,
        y: 0
    }

    let P00_2 = {
        x: 0,
        y: 0
    }

    P0_11.x = (P0.x + P1.x) * 0.5
    P0_11.y = (P0.y + P1.y) * 0.5
    P11_1.x = (P2.x + P1.x) * 0.5
    P11_1.y = (P2.y + P1.y) * 0.5
    P00_2.x = (P0_11.x + P11_1.x) * 0.5
    P00_2.y = (P0_11.y + P11_1.y) * 0.5

    draw_x_and_Y_3D(P0, P0_11, P00_2, color)
    draw_x_and_Y_3D(P00_2, P11_1, P2, color)
}
