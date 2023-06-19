let total = 0;
let cantidad = 0;

function comprar(valorproducto) {
  total = total + valorproducto;
  document.getElementById("total-a-pagar").innerHTML = "$" + total;
  cantidad += 1;

  document.getElementById("cantidad").innerHTML = cantidad;
  document.getElementById("no-productos").innerHTML = " ";
}

function descomprar(valorproducto) {
  if (cantidad > 0) {
    total = total - valorproducto;
    document.getElementById("total-a-pagar").innerHTML = "$" + total;
    cantidad -= 1;
    document.getElementById("cantidad").innerHTML = cantidad;
    document.getElementById("no-productos").innerHTML = " ";
  }
}

function vaciar() {
  total = 0;
  document.getElementById("total-a-pagar").innerHTML = " $" + total;
  document.getElementById("no-productos").innerHTML =
    "No hay productos en el carrito.";
  cantidad = 0;
  document.getElementById("cantidad").innerHTML = cantidad;
}

function validarCaptcha() {
  var response = grecaptcha.getResponse();
  if (response.length === 0) {
    console.log("Por favor, completa el captcha.");
    return false;
  } else {
    return true;
  }
}
