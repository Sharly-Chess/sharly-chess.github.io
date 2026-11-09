// Draws the arrows of the Display diagram (_includes/display_diagram.html),
// across on a wide page and down on a narrow one.

function drawScreensMaps() {
    document.querySelectorAll('.screens-map:not([data-links-drawn])').forEach((map) => {
        map.dataset.linksDrawn = '';
        const draw = () => drawScreensMapLinks(map);
        new ResizeObserver(draw).observe(map);
        draw();
    });
}

function drawScreensMapLinks(map) {
    const svg = map.querySelector('.screens-map-links');
    const origin = map.getBoundingClientRect();
    const box = (selector) => {
        const rect = map.querySelector(selector).getBoundingClientRect();
        const left = rect.left - origin.left;
        const top = rect.top - origin.top;
        return {
            left, top, right: left + rect.width, bottom: top + rect.height,
            cx: left + rect.width / 2, cy: top + rect.height / 2,
        };
    };
    const screens = box('.screens-map-screens');
    const navigation = box('.screens-map-navigation');
    const rotator = box('.screens-map-rotator');
    const menu = box('.screens-map-menu');
    const channel = box('.screens-map-channel');
    const channelHeading = box('.screens-map-heading-channels');
    const devices = box('.screens-map-devices');
    const radius = 10;
    const headLength = 9;
    const paths = [];

    // A path through the given points, its corners rounded; with `kind-head`,
    // it ends in an arrowhead whose tip is the last point.
    const path = (kind, points, withHead = false) => {
        const last = points[points.length - 1];
        const before = points[points.length - 2];
        const dx = Math.sign(last[0] - before[0]), dy = Math.sign(last[1] - before[1]);
        const end = withHead ? [last[0] - dx * headLength, last[1] - dy * headLength] : last;
        const all = [...points.slice(0, -1), end];
        let d = `M${all[0][0]},${all[0][1]}`;
        for (let i = 1; i < all.length - 1; i++) {
            const [px, py] = all[i - 1], [x, y] = all[i], [nx, ny] = all[i + 1];
            const inLength = Math.min(radius, Math.hypot(x - px, y - py) / 2);
            const outLength = Math.min(radius, Math.hypot(nx - x, ny - y) / 2);
            d += ` L${x - Math.sign(x - px) * inLength},${y - Math.sign(y - py) * inLength}`;
            d += ` Q${x},${y} ${x + Math.sign(nx - x) * outLength},${y + Math.sign(ny - y) * outLength}`;
        }
        d += ` L${end[0]},${end[1]}`;
        paths.push(`<path class="${kind}" d="${d}"/>`);
        if (withHead) {
            const half = 4.5;
            const [bx, by] = end;
            paths.push(`<path class="${kind}-head" d="M${last[0]},${last[1]} L${bx - dy * half},${by + dx * half} L${bx + dy * half},${by - dx * half} Z"/>`);
        }
    };

    if (navigation.left > screens.right) {
        const through = (rotator.bottom + menu.top) / 2;
        const merge = (navigation.right + channel.left) / 2;
        const branch = (screens.right + navigation.left) / 2;
        path('into', [[screens.right, through], [channel.left, through]], true);
        path('into', [[branch - radius * 2, through], [branch, through], [branch, rotator.cy], [rotator.left, rotator.cy]], true);
        path('into', [[branch - radius * 2, through], [branch, through], [branch, menu.cy], [menu.left, menu.cy]], true);
        path('into', [[rotator.right, rotator.cy], [merge, rotator.cy], [merge, through], [merge + radius * 2, through]]);
        path('into', [[menu.right, menu.cy], [merge, menu.cy], [merge, through], [merge + radius * 2, through]]);

        const bottom = Math.max(screens.bottom, navigation.bottom, channel.bottom);
        const join = bottom + (devices.top - bottom) * .4;
        const centre = navigation.cx;
        path('reach', [[screens.cx, screens.bottom], [screens.cx, join], [centre, join], [centre, join + radius * 2]]);
        path('reach', [[channel.cx, channel.bottom], [channel.cx, join], [centre, join], [centre, join + radius * 2]]);
        path('reach', [[centre, navigation.bottom], [centre, devices.top]], true);
    } else {
        const centre = screens.cx;
        const level = (rect) => rect.top + 22;
        path('into', [[centre, screens.bottom], [centre, navigation.top]], true);
        path('into', [[centre, navigation.bottom], [centre, channel.top]], true);
        const left = screens.left - 10;
        const merge = navigation.bottom + (channelHeading.top - navigation.bottom) / 2;
        path('into', [[screens.left, level(screens)], [left, level(screens)], [left, merge], [centre, merge], [centre, merge + radius * 2]]);

        const right = screens.right + 12;
        const join = channel.bottom + (devices.top - channel.bottom) * .4;
        path('reach', [[screens.right, level(screens)], [right, level(screens)], [right, join], [centre, join], [centre, devices.top]], true);
        path('reach', [[navigation.right, level(navigation)], [right, level(navigation)]]);
        path('reach', [[channel.right, level(channel)], [right, level(channel)]]);
    }
    svg.innerHTML = paths.join('');
}

drawScreensMaps();
