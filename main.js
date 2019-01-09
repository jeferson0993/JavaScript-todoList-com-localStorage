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

  function selecinoarTudo() {
    for (var i = 0; i < contaItems; i++) {
      if (document.getElementById('selecionaTudo').checked == true) {
        document.getElementById('checkbox' + i).checked = true
      } else {
        document.getElementById('checkbox' + i).checked = false
      }
    }
  }

  function atualizaTudo() {
    var todasAsDivs = document.getElementsByName("itemDiv");
    for (var i = 0, max = todasAsDivs.length; i < max; i++) {
      todasAsDivs[i].id = 'item' + i
      todasAsDivs[i].firstChild.id = 'checkbox' + i
      console.log('novo id da div: ' + todasAsDivs[i].id)
      console.log('novo id da checkbox: ' + todasAsDivs[i].firstChild.id)
      console.log(todasAsDivs[i])
    }
  }