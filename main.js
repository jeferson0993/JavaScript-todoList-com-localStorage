var item = document.getElementById('conteudo')
var contaItems = 0, contaItemRemovido = 0

function inserir() {
  var itemParaInserir = document.getElementById('conteudo').value
  document.getElementById('conteudo').value = ''
  //console.log(itemParaInserir)

  if (document.getElementById('item' + contaItems) == null) {
    var novaDiv = '<div id="item' + contaItems + '" name="itemDiv"><input type="checkbox" id="checkbox' + contaItems + '"/><p>' + itemParaInserir + '</p></div>'
    //console.log(novaDiv)

    document.getElementById('areaLista').insertAdjacentHTML('beforeend', novaDiv)    
    //console.log('total items: ', contaItems, " items romovdos:", contaItemRemovido)

    /* LOCAL STORAGE */
    localStorage.setItem('item' + contaItems, novaDiv)

    contaItems++
  } else {
    contaItems++
    inserir()
  }
}

function removerDiv(idCheckbox) {
  //console.log('id checkbox a ser removido: ', idCheckbox)
  var divContainer = document.getElementById(idCheckbox).parentNode
  //console.log('div a ser removida: ', divContainer)
  divContainer.remove()
  contaItemRemovido++
}

function excluir() {
  document.getElementById('selecionaTudo').checked = false
  var itemParaExcluir
  for (let index = 0; index <= contaItems; index++) {
    itemParaExcluir = document.getElementById('item' + index)
    if (itemParaExcluir != null || itemParaExcluir == '') {
      //console.log('item atual: ', itemParaExcluir)
      if (document.getElementById('checkbox' + index).checked == true) {
        //console.log('div a ser excluida: ', itemParaExcluir)
        removerDiv('checkbox' + index)
        localStorage.removeItem('item' + index)
      }
    }
  }

  contaItems -= contaItemRemovido
  //console.log('conta item removido: ', contaItemRemovido)
  //console.log('Total de items na lista: ', contaItems)
  contaItemRemovido = 0
  atualizaTudo()
}

function selecinoarTudo() {
  for (var index = 0; index < contaItems; index++) {
    if (document.getElementById('selecionaTudo').checked == true) {
      document.getElementById('checkbox' + index).checked = true
    } else {
      document.getElementById('checkbox' + index).checked = false
    }
  }
}

function atualizaTudo() {
  localStorage.clear()
  var todasAsDivs = document.getElementsByName("itemDiv");  
  for (var index = 0, max = todasAsDivs.length; index < max; index++) {
    todasAsDivs[index].id = 'item' + index
    todasAsDivs[index].firstChild.id = 'checkbox' + index
    let div = todasAsDivs[index].textContent
    localStorage.setItem('item' + index, div)
    //onsole.log('novo id da div: ' + todasAsDivs[index].id)
    //console.log('novo id da checkbox: ' + todasAsDivs[index].firstChild.id)
    //console.log(div)
  }
}

function urgente() {
  for (var index = 0; index < contaItems; index++) {
    if (document.getElementById('checkbox' + index).checked == true) {
      document.getElementById('item'+index).style.backgroundColor = "indianred";
      document.getElementById('checkbox' + index).checked = false
      document.getElementById('selecionaTudo').checked = false
    }    
  }
}

function importante() {
  for (var index = 0; index < contaItems; index++) {
    if (document.getElementById('checkbox' + index).checked == true) {
      document.getElementById('item'+index).style.backgroundColor = "goldenrod";
      document.getElementById('checkbox' + index).checked = false
      document.getElementById('selecionaTudo').checked = false
    }
  }
}

function normal() {
  for (var index = 0; index < contaItems; index++) {
    if (document.getElementById('checkbox' + index).checked == true) {
      document.getElementById('item'+index).style.backgroundColor = "white";
      document.getElementById('checkbox' + index).checked = false
      document.getElementById('selecionaTudo').checked = false
    }
  }
}

function feito() {
  for (var index = 0; index < contaItems; index++) {
    if (document.getElementById('checkbox' + index).checked == true) {
      document.getElementById('item'+index).style.backgroundColor = "seagreen"
      document.getElementById('checkbox' + index).checked = false
      document.getElementById('selecionaTudo').checked = false
    }
  }
}

function verificarArmazenamentoLocal() {
  //console.log('verificando Armazenamento Local')
  
  for (let index = 0; localStorage.getItem('item' + index) != null; index++) {
    //'<div id="item' + index + '" name="itemDiv"><input type="checkbox" id="checkbox' + index + '"/>
    let novaDiv = '<p>' + localStorage.getItem('item' + index) + '</p>'
    console.log(novaDiv)    
    document.getElementById('areaLista').insertAdjacentHTML('beforeend', novaDiv)
    contaItems++
  }
  
}

document.onload = verificarArmazenamentoLocal()
