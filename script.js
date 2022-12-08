const toggle = document.getElementById("toggle");
const body = document.querySelector('body');
var lightMode = false;
var loaderFinished = false;

toggle.addEventListener('click', function() {
    if(lightMode) {
        document.querySelector('.personal-info').style.color = "white";
    
        document.getElementById('source-code').style.color = "#6b6b6b";
        document.getElementById('source-code').style.textDecorationColor = "#6b6b6b";

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
    
    document.getElementById('source-code').style.color = "#000";
    document.getElementById('source-code').style.textDecorationColor = "#000";
    
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


document.onkeypress = function(event) {
    if(loaderFinished) {
       return; 
    }

    body.querySelector('source-code-link').style.visibility = "visible";
        toggle.style.visibility = "visible";

        body.querySelector('loader-text').style.animation = "none";
        document.getElementById('loader').style.opacity = "0%";
        document.getElementById('loader').style.visibility = "hidden";

        loaderFinished = true;
}

document.onmouseup = function(event) {
    if(loaderFinished) {
       return; 
    }

    body.querySelector('source-code-link').style.visibility = "visible";
        toggle.style.visibility = "visible";

        body.querySelector('loader-text').style.animation = "none";
        document.getElementById('loader').style.opacity = "0%";
        document.getElementById('loader').style.visibility = "hidden";

        loaderFinished = true;
}

document.ontouchend = function(event) {
    if(loaderFinished) {
        return;
    }

    body.querySelector('source-code-link').style.visibility = "visible";
        toggle.style.visibility = "visible";

        body.querySelector('loader-text').style.animation = "none";
        document.getElementById('loader').style.opacity = "0%";
        document.getElementById('loader').style.visibility = "hidden";

        loaderFinished = true;
}

window.onload = function(event) {
    
    let details = navigator.userAgent;
    let regexp = /android|iphone|kindle|ipad/i;
    let isBrowserOnMobile = regexp.test(details);

    if(loaderFinished) {
        return;
    }

    let welcomeText = "root# "
    if(isBrowserOnMobile) {
         welcomeText = welcomeText + "Welcome! Tap on the screen to enter...";
    } else {
        welcomeText = welcomeText + "Welcome! Press any key to enter...";
    }

    body.querySelector('loader-text').innerText = welcomeText;
}
