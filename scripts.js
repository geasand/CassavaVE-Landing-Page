// Getting the Go to Up button:
let scrollBtn = document.getElementById("goUp")

// Scroll to the top of the document when the button is clicked
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/*Show/Hide sections function*/
'use strict'

const li    = document.querySelectorAll('.li')
const block = document.querySelectorAll('.wrapper-section')

//Click en el botón
li.forEach ( ( cadaLi, i)=>{
    li[i].addEventListener('click',()=>{

        li.forEach( ( cadaLi, i )=>{
            li[i].classList.remove('active')
            block[i].classList.remove('active')
        })

        li[i].classList.add('active')
        block[i].classList.add('active')

    })
})

// Open Modals from the Product cards
function openLightbox() {
    document.getElementById('lightbox').style.display = 'block';
}
// Close Modals from the Product cards
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
};

//Carrusel
const container = document.querySelector('.image-container')
const dot    = document.querySelectorAll('.dot')

//Asignar clic
dot.forEach ( ( eachpoint , i )=> {
    dot[i].addEventListener('click',()=>{

        //Saber la posicion
        let position = i
        let operation = position * -33.33
        
        //Aplicar el transform translate al container
        container.style.transform = `translateX(${ operation }%)`
        
        //Quitar la clase Activo a todos los dots
        dot.forEach( ( eachpoint , i )=>{
            dot[i].classList.remove('activo')
        })
        //Añadir la clase Activo al dot al que se hizo clic
        dot[i].classList.add('activo')

    })
})