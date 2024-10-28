document.addEventListener('DOMContentLoaded', function() {

const divsDOM = document.querySelectorAll('header div');
const mainDivsDOM = document.querySelectorAll('main div div');
const inputDOM = document.querySelectorAll('header input[type="color"]');

function selectColor(event) {

    let colorBox = event.target;
    let color = colorBox.style.backgroundColor;

    sessionStorage.setItem("selectedColor", color);
}

console.log('getSelectedColor');

function getSelectedColor() {

    if(sessionStorage.getItem("selectedColor"))
    {
        return sessionStorage.getItem("selectedColor");
    }

    return null;
}

function loadPalette(palette){
    // le code l'étape 1 se passe ici
        divsDOM.forEach((div, index) => {
        if (palette[index]) {
            div.style.backgroundColor = palette[index];
        }
            inputDOM[index].addEventListener('input', function(event) {
                const color = event.target.value;
                div.style.backgroundColor = color;
            });

    
    div.addEventListener('click', selectColor);

    }); 
}

window.addEventListener("DOMContentLoaded", function(){
    loadPalette(["#22f6f3", "#3daf7e", "#ffffff", "#ec8236", "#a9a7ee", "#ecc606", "#f783f2", "#e89e80", "#900C3F", "#7dcea0", 
    "#808b96", "#8e44ad", "#922b21", "#85c1e9", "#117864","#d35400"]);

    // le code de l'étape 2 se passe ici
    divsDOM.forEach(div => {
        div.addEventListener('click', selectColor);
    })
    console.log(getSelectedColor());
    
    // le code de l'étape 3 se passe ici
        mainDivsDOM.forEach (div => {
            div.addEventListener('click', function() {
                let color = getSelectedColor();
                if (color) {
                    if (div.style.backgroundColor) {
                        div.style.backgroundColor = "";
                    } else {
                        div.style.backgroundColor = color;
                    }
                }
                
            });
        });
        
        
    });
});