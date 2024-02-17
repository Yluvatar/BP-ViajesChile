
$(document).ready(function(){
    $("#frmContact").on("submit", (e) => {
        e.preventDefault();
        let mensaje = "";
        let alerta = true;

        let nombre = $("#name").val();
        let subject = $("#subject").val();
        let message = $("#message").val();

        if (nombre.length < 1) {
            mensaje += "- Debe ingresar un Nombre\n";
            alerta = false;
        }

        if (subject.length < 1) {
            mensaje += "- Debe ingresar un Asunto\n";
            alerta = false;
        }

        if (message.length < 1) {
            mensaje += "- Debe ingresar un Mensaje\n";
            alerta = false;
        }

        if (alerta) {
            alert("Mensaje enviado Sr/Sra " + $("#name").val() + "!");
        } else {
            alert(mensaje);
        }
    });

    $("input, textarea").tooltip();
});