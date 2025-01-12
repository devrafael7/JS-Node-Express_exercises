const toggleButton = document.querySelectorAll('.toggleButton');
toggleButton.forEach( toggleButtons => {
    toggleButtons.addEventListener('click', ()=> {
        const elements = document.querySelectorAll('.content');
  
        elements.forEach(element => {
            if (element.classList.contains('toHide')) {
            element.classList.remove('toHide');
            } else {
            element.classList.add('toHide');
            }
        })
    })
})