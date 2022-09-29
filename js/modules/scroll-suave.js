export default function scrollSuave() {
    const linksInterno = document.querySelectorAll('[data-menu="suave"] a[href^="#"]')

    function scroll(event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    linksInterno.forEach((item) => {
        item.addEventListener('click', scroll)
    })
}