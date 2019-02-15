var color = Please.make_color({
    greyscale: true
});
console.log('color=' + color);



var main = document.getElementById('main');
main.style.background = color;

setInterval(() => {
    main.style.background = Please.make_color({
        greyscale: true
    });
}, 2000);
