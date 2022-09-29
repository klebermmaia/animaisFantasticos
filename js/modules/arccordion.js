export default function arccordion() {
    const tabArccordeon = document.querySelectorAll('[data-tab="faq"] dt')
    tabArccordeon[0].classList.add('ativo')
    tabArccordeon[0].nextElementSibling.classList.add('ativo')

    function activeArccordion() {
        this.classList.toggle('ativo')
        this.nextElementSibling.classList.toggle('ativo')
    }

    tabArccordeon.forEach((item) => {
        item.addEventListener('click', activeArccordion)
    })
}