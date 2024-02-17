
$(function(){
    $("#frmContacto").on("submit", function (e) {
        e.preventDefault();
        alert("Mensaje enviado Sr/Sra " + $("#name").val() + "!");
    });
});