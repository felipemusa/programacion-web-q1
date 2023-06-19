let total = 0;
let cantidad=0;

function comprar(valorproducto) {
  total = total + valorproducto;
  document.getElementById("total-a-pagar").innerHTML =
     "$" + total ;
  cantidad+=1;
  document.getElementById('cantidad').innerHTML = cantidad;
  document.getElementById('no-productos').innerHTML=" ";
  let contadorProducto = document.getElementById('contador-producto');
  contadorProducto.innerHTML = parseInt(contadorProducto.innerHTML) + 1;
}

function descomprar(valorproducto) {
  if (cantidad > 0) {
    total = total - valorproducto;
    document.getElementById("total-a-pagar").innerHTML = "$" + total;
    cantidad -= 1;
    document.getElementById('cantidad').innerHTML = cantidad;
    document.getElementById('no-productos').innerHTML = " ";
    let contadorProducto = document.getElementById('contador-producto');
    contadorProducto.innerHTML = parseInt(contadorProducto.innerHTML) - 1;
    }
}

function vaciar() {
  total = 0;
  document.getElementById("total-a-pagar").innerHTML = " $" + total;
  document.getElementById('no-productos').innerHTML="No hay productos en el carrito.";
  cantidad=0;
  document.getElementById('cantidad').innerHTML = cantidad;
  let contadoresProductos = document.getElementsByClassName('contador-producto');
  for (let i = 0; i < contadoresProductos.length; i++) {
    contadoresProductos[i].innerHTML = "0";}
}

// hacer una funcion inversa a la de SUMAR PRECIO. y
// agregarla a un botón al lado de comprar 