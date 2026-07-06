/* ==========================================
   EthanRB11 Portfolio
   Interactive UI Effects
========================================== */


// Mouse parallax effect

const background = document.querySelector("#background");
const hero = document.querySelector(".hero");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;


document.addEventListener("mousemove", (event)=>{

    mouseX = (event.clientX / window.innerWidth - 0.5);
    mouseY = (event.clientY / window.innerHeight - 0.5);

});


function animate(){

    currentX += (mouseX - currentX) * 0.05;
    currentY += (mouseY - currentY) * 0.05;


    if(background){

        background.style.transform =
        `
        translate(
        ${currentX * 20}px,
        ${currentY * 20}px
        )
        `;

    }


    if(hero){

        hero.style.transform =
        `
        translate(
        ${currentX * -8}px,
        ${currentY * -8}px
        )
        `;

    }


    requestAnimationFrame(animate);

}


animate();



// Create floating geometric shapes

const shapes = document.querySelector(".shapes");


function createShape(){

    if(!shapes) return;


    const element = document.createElement("div");

    element.classList.add("shape");


    const size = Math.random() * 80 + 30;


    element.style.width = size + "px";
    element.style.height = size + "px";


    element.style.left =
    Math.random() * 100 + "%";


    element.style.top =
    Math.random() * 100 + "%";


    element.style.opacity =
    Math.random() * .4 + .1;


    element.style.animationDuration =
    (Math.random() * 8 + 6) + "s";


    shapes.appendChild(element);


    setTimeout(()=>{

        element.remove();

    },15000);


}


setInterval(createShape,1200);



// Cursor glow effect


const glow = document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);



document.addEventListener("mousemove",(event)=>{

    glow.style.left =
    event.clientX + "px";

    glow.style.top =
    event.clientY + "px";

});



// Smooth button hover movement

const buttons =
document.querySelectorAll("a");


buttons.forEach(button=>{


    button.addEventListener("mouseenter",()=>{

        button.style.transform =
        "translateY(-5px) scale(1.05)";

    });


    button.addEventListener("mouseleave",()=>{

        button.style.transform =
        "translateY(0) scale(1)";

    });


});