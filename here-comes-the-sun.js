let rgb = 0;

let brightenBackground = function() {  
    if(rgb <= 255) {
        document.body.style.backgroundColor = `rgb(${rgb}, ${rgb}, ${rgb})`
        rgb++;
        requestAnimationFrame(brightenBackground);        
    }
}

requestAnimationFrame(brightenBackground);