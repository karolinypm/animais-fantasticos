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