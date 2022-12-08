const toggle = document.getElementById("toggle");
const body = document.querySelector('body');
var lightMode = false;

toggle.addEventListener('click', function() {
    if(lightMode) {
        document.querySelector('.personal-info').style.color = "white";
    
        const paragraphs = document.querySelectorAll('p');

        paragraphs.forEach(p => {
            p.style.color = "white";
        });

        document.querySelector('.hr').style.backgroundColor = "#3b3b3b";

        const svgs = document.querySelectorAll('.social');

        svgs.forEach(svg => {
            svg.style.fill = "#c9c9c9";
        });

        toggle.style.fill = "whitesmoke";

        body.style.backgroundColor = "#121212";
        lightMode = false;
        return;
    }

    document.querySelector('.personal-info').style.color = "#121212";
    
    const paragraphs = document.querySelectorAll('p');

    paragraphs.forEach(p => {
        p.style.color = "black";
    });

    document.querySelector('.hr').style.backgroundColor = "#b0b0b0";

    const svgs = document.querySelectorAll('.social');

    svgs.forEach(svg => {
        svg.style.fill = "#4a4a4a";
    });

    toggle.style.fill = "#121212";

    body.style.backgroundColor = "whitesmoke";
    lightMode = true;
})

