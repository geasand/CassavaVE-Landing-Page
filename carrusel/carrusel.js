'use strict'

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