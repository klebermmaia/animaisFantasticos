export default function initalTabNavAnimais(){

    const listaAnimaisImg = document.querySelectorAll('[data-tab="menu"] li')
    const descriçaoAnimais = document.querySelectorAll('[data-animais="descricao"] section')
    
    if(listaAnimaisImg.length && descriçaoAnimais.length){
      descriçaoAnimais[0].classList.add('ativo')
    
      function activeTab(index){
        descriçaoAnimais.forEach((section)=>{
          section.classList.remove('ativo')
        })
        const direcao = descriçaoAnimais[index].dataset.anime
        descriçaoAnimais[index].classList.add('ativo', direcao)
      }
      
      listaAnimaisImg.forEach((item, index)=>{
        item.addEventListener('click', ()=>{
          activeTab(index)
        })
      })
    }
  }