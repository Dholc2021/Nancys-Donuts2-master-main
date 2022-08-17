
// SCROLL ANIMATION
const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        
        
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}

// CONTACT-FORM-ANIMATION
const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    console.log(label)
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx*50}ms">${letter}</span>`)
        .join('')
})

// ROTATING-NAVIGATION

const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.nav-container');

open.addEventListener('click', () => container.classList.add('show-nav'));
close.addEventListener('click', () => container.classList.remove('show-nav'))

