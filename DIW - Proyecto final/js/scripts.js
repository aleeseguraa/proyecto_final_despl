$(document).ready(function() {
    carro();
    borrarProducto(resta);

    var resta = "0";
    efectivo(resta);
});

function carro() {
    var fila = $("table tbody tr").length;
    $("#shopping-cart span").text(fila);
}

function borrarProducto(resta) {
    $(document).on("click", ".borrarFila", function() {
        $(this).parent("td").parent("tr").remove();
        var fila = $("table tbody tr").length;
        document.querySelector("#shopping-cart span").innerHTML = fila;
        resta = parseFloat($(".precio").text());
    });
}

function efectivo(resta) {
    var producto1 = parseFloat($(".descuento").text());
    var producto2 = parseFloat($(".normal").text());
    var envio = parseFloat($(".Envio").text());
    var total = (producto1 + producto2 + envio - resta + ("€"));
    $("table tfoot .Total").text(total);
}