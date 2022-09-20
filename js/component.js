$(document).ready(function() {
    $("#header").load("./component/header.html");
    $("#footer").load("./component/footer.html");
    
    //*$('#dropdown').on('show.bs.dropdown', function () {
    //*    $('.dropdown-toggle').show;// do something…
    //*  }) 
    
});

$('#dropdownMenuButton').on('click', function(){
    $('#dropdown').dropdow('toggle');
});