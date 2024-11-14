const showMenu = (toggleId,navId)=>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

const navLink= document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const section = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset

    section.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute("id")

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')

        }
    })
}
window.addEventListener('scroll', scrollActive)


function scrollHeader()
{
    const nav = document.getElementById('header')
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll' , scrollHeader)

// 

function scrollTop()
{
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >= 560) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top')
}
window.addEventListener('scroll' , scrollTop)

// dark mood
const themeButton = document.getElementById('theme-button')
const darktheme = 'dark-theme'
const iconTheme = 'bx bxs-sun'


themeButton.addEventListener('click', ()=>{
    document.body.classList.toggle(darktheme)
    themeButton.classList.toggle(iconTheme)
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
})

sr.reveal('.home__data', {})
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.home__img', {origin:'right', delay:400})
// 
sr.reveal('.about__img', {delay: 500})
sr.reveal('.about__data', {delay: 500})
sr.reveal('.about__text', {delay: 500})
sr.reveal('.about__social-icon', {delay: 600, interval:200})
// 
sr.reveal('.section-subtitle', {})
sr.reveal('.section-title', {distance: '20px', delay: 50, interval:100})
sr.reveal('.service__content', {delay: 400})
// 
sr.reveal('.menu__container', { interval:200})
// 
sr.reveal('.app__container', {})
sr.reveal('.contact__description', { interval:200})
sr.reveal('.footer', { interval:400})
sr.reveal('.app__img', { delay: 600})
sr.reveal('.menu__content', { delay: 600})

