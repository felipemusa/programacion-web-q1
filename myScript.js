let total = 0;
let cantidad=0;
function sumarprecio(valorproducto) {
  total = total + valorproducto;
  document.getElementById("total-a-pagar").innerHTML =
     "$" + total ;
  cantidad+=1;
  document.getElementById('cantidad').innerHTML = cantidad;
  document.getElementById('no-productos').innerHTML=" ";

    }
function Borrar() {
  total = 0;
  document.getElementById("total-a-pagar").innerHTML = " $" + total;
  document.getElementById('no-productos').innerHTML="No hay productos en el carrito.";
  cantidad=0;
  document.getElementById('cantidad').innerHTML = cantidad;

}

// hacer una funcion inversa a la de SUMAR PRECIO. y
// agregarla a un botón al lado de comprar 