var item = document.getElementById('conteudo')
var contaItems = 0, contaItemRemovido = 0

function inserir() {
    var itemParaInserir = document.getElementById('conteudo').value
    document.getElementById('conteudo').value = ''
    if (document.getElementById('item' + contaItems) == null) {
      var novaDiv = '<div id="item' + contaItems + '" name="itemDiv"><input type="checkbox" id="checkbox' + contaItems + '"/><p>' + itemParaInserir + '</p></div>'  
      document.getElementById('areaLista').insertAdjacentHTML('beforeend', novaDiv)
      contaItems++
    } else {
      contaItems++
      inserir()
    }
  }