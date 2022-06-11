var menuToggle = false;

$('button').click(function() {
    if (!menuToggle){
        $('.fa-bars').addClass('d-hidden');
        $('.fa-x').removeClass('d-hidden');
        menuToggle = true;
    } else {
        $('.fa-bars').removeClass('d-hidden');
        $('.fa-x').addClass('d-hidden');
        menuToggle = false;
    }
});