$(document).ready(function () {
  $("#contact-form").on("submit", function (e) {
    e.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();

    var mailtoLink =
      "mailto:tapiavirgo44@gmail.com" +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(
        "Nombre: " + name + "\nCorreo: " + email + "\n" + message
      );

    window.location.href = mailtoLink;
  });
});
