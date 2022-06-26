//Execucao mais eficiente dos eventos
window.addEventListener('scroll', onscroll)

//Chamada das funcoes de animacao quando se faz o scroll
onScroll();
function onScroll() {
    showNavOnScroll()
    showBackToTopButton()
}


//////////Animacao da nav quando se faz o scroll
function showNavOnScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll');
    } else {
        navigation.classList.remove('scroll');
    }
}

//////////Animacao do BackToTopButton quando se faz o scroll
function showBackToTopButton() {
    if (scrollY > 500) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
}

///////////Abre e fecha o menu///////////////////

function onpenMenu() {
    document.body.classList.add('menu-extended');
}

function closeMenu() {
    document.body.classList.remove('menu-extended');
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
#home, 
#home img, 
#home .stats,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content,
#contact,
#contact header,
#contact .content,
footer,
footer .logo,
footer p,
footer .social-links`);

