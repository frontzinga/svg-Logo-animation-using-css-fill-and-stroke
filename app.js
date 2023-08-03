document.addEventListener('DOMContentLoaded', () => {
    const path = document.querySelector('svg path');
    const btn = document.querySelector('button');

    path.classList.add('animation');

    btn.addEventListener('click', () => {
        path.classList.remove('animation');
        setTimeout(() => {
            path.classList.add('animation');
        }) 
    })

})