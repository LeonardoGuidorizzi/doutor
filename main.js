const menu = document.querySelector('.menu-burger-container')
const nav = document.querySelector('.links-container')
const containerNav = document.querySelector('nav')
console.log(nav)
console.log(menu);

function menuAction(){
    if(menu.classList.contains('show')){
        nav.style.display = 'none'
        containerNav.style.display= 'none'
        nav.style.marginLeft = '100vw'
        menu.classList.remove('show')
        menu.classList.add('close')
    }else{
        containerNav.style.display ='flex'
        nav.style.display = 'flex'
        nav.style.marginLeft = '-100vw'
        menu.classList.remove('close')
        menu.classList.add('show')
    }
    
}

menu.addEventListener('click',menuAction)