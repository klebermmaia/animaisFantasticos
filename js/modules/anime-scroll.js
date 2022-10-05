export default function animeScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const windowHeight = window.innerHeight * 0.6;
  if (sections.length) {
    function animeScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisible = (sectionTop - windowHeight) < 0;
        if (sectionVisible)
          section.classList.add('animeAtivo');
        else if (section.classList.contains('animeAtivo')) {
          section.classList.remove('animeAtivo')
        }
      })
    }
    animeScroll()
    window.addEventListener('scroll', animeScroll)
  }
}