/* Toggle significa alternar entre dois estados possíveis. 
É frequentemente usado em interfaces de usuário e programação para representar algo que pode ser "ligado/desligado" ou "ativo/inativo".
*/

//Função para alternar a exibição do formulário de cupom
function toggleDiscount() {
  const discountBody = document.getElementById("apply-discount-body");
  const icon = document.getElementById("toggle-icon");

  // Alterna a visibilidade do formulário de desconto
  if (
    discountBody.style.display === "none" ||
    discountBody.style.display === ""
  ) {
    discountBody.style.display = "block";
    icon.classList.add("bi-caret-up");
    icon.classList.remove("bi-caret-down");
  } else {
    discountBody.style.display = "none";
    icon.classList.add("bi-caret-down");
    icon.classList.remove("bi-caret-up");
  }
}

const originalPrice = 1200;

const discountCupons = {
  DESCONTO10: 0.1, // 10% DESCONTO
  DESCONTO20: 0.2, // 20% DESCONTO
  DESCONTO50: 0.5, // 50% DESCONTO
};

// Função para aplicar o desconto.
function applyDiscount() {
  const discountCode = document
    .getElementById("discount-code")
    .value.trim()
    .toUpperCase();
  const discountMenssageElement = document.getElementById("discount-message");
  const totalPriceElement = document.getElementById("total-price");

  //Verificar se o cumpom de desconto é válido
  if (discountCupons[discountCode]) {
    const discount = discountCupons[discountCode];
    console.log(discount);
    const originalPrice = 1200;
    const discountedPrice = originalPrice * (1 - discount);

    //Atualizar o preço com o desconto
    totalPriceElement.innerText = `Preço Total; R$ ${discountedPrice.toFixed(
      2
    )}`;

    //Armazenar o cupom no LocalStorage
    localStorage.setItem("discount", discountCode);

    //Exibir a mensagem de desconto
    discountMenssageElement.style.color = "green";
    discountMenssageElement.innerText = `Desconto de ${discountCode} aplicado!`;

    //Limpar o campo input (elemento)
    document.getElementById("discount-code").value = "";
  } else {
    //Se o cupom não for válido
    //Limpar a mensagem
    // discountMenssageElement.innerText = "";
    discountMenssageElement.style.color = "red";
    discountMenssageElement.innerText = "Cumpom inválido";
  }
}

//Verificar se há cupom no localStorage
function checkStoredDiscount() {
  const storedDiscount = localStorage.getItem("discount");
  const discountMenssageElement = document.getElementById("discount-message");
  if (storedDiscount) {
    localStorage.removeItem("discount");
  }
  discountMenssageElement.innerText = "";
}

//window.onload = checkStoredDiscount;

// <i class="bi bi-caret-up"></i> - Icone da seta para cima
