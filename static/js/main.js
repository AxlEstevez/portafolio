// --------------------------------------------------------
// File main.js
// Descripción: funcionalidad front end del sitio web
// autor: Axl Estevez axlestevez@hotmail.com
// --------------------------------------------------------

function copyEmail() {
  // se optiene la referemcia al texto que se quiere copiar
  var email = document.getElementById("myemail");

  email.select(); // se selecciona el campo de texto
  email.setSelectionRange(0, 99999); // para dispositivos móviles

  // se copia el el texto del elemento
  document.execCommand("copy");

  // notificación de texto copiado.
  Swal.fire({
    icon: "success",
    title: "¡ Listo !",
    text: "El correo a sido copiado a su portapapeles",
    showConfirmButton: false,
    timer: 2500,
  });
}
