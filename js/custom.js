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


// function DropDown(el) {
//     this.dd = el;
//     this.placeholder = this.dd.children('span');
//     this.opts = this.dd.find('ul.dropdown > li');
//     this.val = '';
//     this.index = -1;
//     this.initEvents();
// }
// DropDown.prototype = {
//     initEvents: function () {
//         var obj = this;
//         obj.dd.on('click', function (event) {
//             $(this).toggleClass('active');
//             return false;
//         });
//         obj.opts.on('click', function () {
//             var opt = $(this);
//             obj.val = opt.text();
//             obj.index = opt.index();
//             obj.placeholder.text(obj.val);
//         });
//     },
//     getValue: function () {
//         return this.val;
//     },
//     getIndex: function () {
//         return this.index;
//     }
// }
// $(function () {
//     var dd = new DropDown($('#dd'));
//     $(document).click(function () {
//         $('.wrapper-dropdown-3').removeClass('active');
//     });
// });

function check2() {
    var url = $('input[name=radio]:checked').val();
    $(location).attr('href', url);
}