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