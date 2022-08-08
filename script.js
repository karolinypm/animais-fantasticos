function initTabNav (){
  //interação entre imagens e texto
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  //verifica se os itens selecionados existem na página
  if(tabMenu.length && tabContent.length){
    //insere ativo sempre ao 1º item
    tabContent[0].classList.add('ativo')

    function activeTab (index){
      tabContent.forEach((section)=>{
        section.classList.remove('ativo');
      })
      tabContent[index].classList.add('ativo')
    };
    //aplica a classe ativo aos itens da Li (imagens) após o click
    tabMenu.forEach((itemMenu,index)=>{
      itemMenu.addEventListener('click',()=>{
        activeTab(index)
      });
    });
  }
}
initTabNav();

function initAccordion(){
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';
  if(accordionList.length){
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    
    function activeAccordion(){
      this.classList.toggle(activeClass)
      this.nextElementSibling.classList.toggle(activeClass)
    }
    
    //adiciona um evento para cada item
    accordionList.forEach ((item) => {
      item.addEventListener('click', activeAccordion)
    })
  }
}
initAccordion();

function initScrollSuave(){
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event){
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href')
  const section = document.querySelector(href);

  section.scrollIntoView({
    behavior:'smooth',
    block: 'start',
  });

  /* forma alternativa de scroll suave
    const topo = section.offsetTop;
    window.scrollTo({
      top: topo,
      behavior:'smooth',
    });*/
  }
  linksInternos.forEach((link)=>{
    link.addEventListener('click',scrollToSection)
  })
}
initScrollSuave();