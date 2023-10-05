// Mostre o botão criar ao clicar em qualquer 
// controle de radio ou checkbox
onEvent("radioBase1", "click", mostrarCriar);
onEvent("radioBase2", "click", mostrarCriar);
onEvent("radioBase3", "click", mostrarCriar);
onEvent("radioMolhoVermelho", "click", mostrarCriar);
onEvent("radioMolhoAmarelo", "click", mostrarCriar);
onEvent("checkboxNao-veg", "click", mostrarCriar);
onEvent("checkboxVeg", "click", mostrarCriar);

function mostrarCriar(){
  showElement("botaoCriar");
}

//Adicione evento aos outros botões
onEvent("botaoCriar", "click", function( ) {

  setScreen("telaPizza");
  
  
  //Escolhendo a massa da pizza
  var base1 = getChecked("radioBase1");
  var base2 = getChecked("radioBase2");
  var base3 = getChecked("radioBase3");
  
  if (base1 == true) {
    setImageURL("imagemBase", "Pizzaa-01.png");
  }
  
  if (base2 == true) {
    setImageURL("imagemBase", "Pizzaa-02.png");
  }
  
  if (base3 == true) {
    setImageURL("imagemBase", "Pizzaa-03.png");
  }
  
if (getProperty("radioMolhoAmarelo", "checked")) {
    hideElement("imagemMolhoVermelho");
    showElement("imagemMolhoAmarelo");
  }
  if (getProperty("radioMolhoVermelho", "checked")) {
    hideElement("imagemMolhoAmarelo");
    showElement("imagemMolhoVermelho");
  }
  //Programe as caixas de verificação (checkboxes)
  if (getProperty("checkboxVeg", "checked")) {
    showElement("imagemVeg");
    hideElement("imagemVegNaoveg");
  }
  if (getProperty("checkboxNao-veg", "checked")) {
    showElement("imagemNaoveg");
    hideElement("imagemVeg");
  }
  
});

onEvent("botaoVoltar", "click", function( ) {
  setScreen("telaMontador");
});
