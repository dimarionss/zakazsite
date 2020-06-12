$(document).ready(function () {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 1,
        margin: 10,
        loop: true,
        nav: false
    });
});

function stateChange() {
    var obj = document.getElementById('dropdown');

    obj.style.display =
        (obj.style.display == "none" ?
            "flex" : "none");
}


function check2() {
    var url = $('input[name=radio]:checked').val();
    $(location).prop('href', url);
}