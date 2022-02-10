$(document).ready(function() {
    function compra() {
        var fila = $("table tbody tr").length;
        $("header .user-utils #shopping-cart > span").text(fila);
        if (fila == 0) {
            $("#main").text("El carro se encuentra vacío en este momento.");
            $("#main").css({ "margin-left": "40%", "font-family": "Cambria" })
        }
    }

    function sumar() {
        var suma = 0;
        $(".precio").each(function() {
            suma += parseFloat($(this).text());
            $(".Total").text(suma + ("€"));

        })
    }
    compra();
    sumar();
    $(".borrarFila1").on("click", function() {
        $(".producto1").remove();
        compra();
        sumar();
    });
    $(".borrarFila2").on("click", function() {
        $(".producto2").remove();
        compra();
        sumar();
    });

    $(document).scroll(function() {

        if ($(this).scrollTop() > 30) {
            $('#totop').fadeIn(500);

        } else {
            $('#totop').fadeOut(500);
        }
    });

    $('#totop').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
    });


});