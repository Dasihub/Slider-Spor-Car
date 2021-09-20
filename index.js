const slides = document.querySelectorAll('.slide')

for (const i of slides) {


    i.addEventListener('click', () => {
    clearActiveClass()
        i.classList.add('active')
    })
}

const clearActiveClass = () => {
    slides.forEach(element => {
        element.classList.remove('active')
    });
}