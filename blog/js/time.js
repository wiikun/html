if (typeof window != "undefined") {
    window.setInterval(function () {
        var now = new Date();
        var h1 = document.querySelector("h1");
        if (h1) {
            h1.innerHTML = now.toLocaleString();
        }
    }, 1000);
}
else {
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    setInterval(function () {
        var now = new Date();
        console.log(now.toLocaleString());
    }, 1000);
    process.stdin.on('data', function (key) {
        if (key === "q") {
            process.exit();
        }
    });
}
