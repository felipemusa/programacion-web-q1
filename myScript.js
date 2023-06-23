let total = 0;
let cantidad = 0;
const comprarBtn = document.getElementById("comprarBtn");

function actualizarEstadoComprar() {
  if (cantidad === 0) {
    comprarBtn.disabled = true;
  } else {
    comprarBtn.disabled = false;
  }
}

function comprar(valorproducto) {
  total = total + valorproducto;
  document.getElementById("total-a-pagar").innerHTML = "$" + total;
  cantidad += 1;
  document.getElementById("cantidad").innerHTML = cantidad;
  document.getElementById("no-productos").innerHTML = "";
  actualizarEstadoComprar();
}

function descomprar(valorproducto) {
  if (cantidad > 0) {
    total = total - valorproducto;
    document.getElementById("total-a-pagar").innerHTML = "$" + total;
    cantidad -= 1;
    document.getElementById("cantidad").innerHTML = cantidad;
    document.getElementById("no-productos").innerHTML = "";
    actualizarEstadoComprar();
  }
}

function vaciar() {
  total = 0;
  document.getElementById("total-a-pagar").innerHTML = "$" + total;
  document.getElementById("no-productos").innerHTML =
    "No hay productos en el carrito.";
  cantidad = 0;
  document.getElementById("cantidad").innerHTML = cantidad;
  actualizarEstadoComprar();
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

document.addEventListener("DOMContentLoaded", function() {
  var finalizarBtn = document.getElementById("finalizarBtn");
  var popup = document.getElementById("popup");
  var closeBtn = document.getElementsByClassName("close")[0];
  var termsCheckbox = document.getElementById("termsCheckbox");
  var nombreInput = document.getElementById("nombre");
  var apellidoInput = document.getElementById("apellido");

  comprarBtn.addEventListener("click", function() {
    var cantidadValor = parseInt(document.getElementById("cantidad").textContent);
    if (cantidadValor !== 0) {
      popup.style.display = "block";
    }
  });

  closeBtn.addEventListener("click", function() {
    popup.style.display = "none";
  });

  finalizarBtn.addEventListener("click", function() {
    var nombre = nombreInput.value;
    var apellido = apellidoInput.value;

    if (nombre === "" || apellido === "" || !termsCheckbox.checked) {
      alert("Por favor, complete todos los campos antes de finalizar la compra.");
    } else {
      alert("Gracias por su compra!");
      popup.style.display = "none"; 
    }
  });

  actualizarEstadoComprar();
});
