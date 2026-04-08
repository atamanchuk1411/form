popup.onclick = (e) => {
    e.preventDefault()
    popup.classList.add('d-none')
    form.classList.remove('d-none')
}

cross.onclick = (e) => {
    e.preventDefault()
    popup.classList.remove('d-none')
    form.classList.add('d-none')
}