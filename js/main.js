$(document).ready(function(){
   
$(window).resize(function(){
    if ($(this).width()<992){
    $('#navbarDropdown').addClass('dropdown-toggle');
}
else {
    $('.#navbarDropdown').removeClass('dropdown-toggle');
}
});




$(window).on("load scroll",function(){

    if ($(window).scrollTop()>200){
        $('#navbarcontainer .navbar').addClass('nav-attach');
        $('.navbar-brand').addClass('navbar-brandrotate');
     }
        else{
            $('#navbarcontainer .navbar').removeClass('nav-attach');
            $('.navbar-brand').removeClass(' navbar-brandrotate');
        }


 
});


    $('#plan-b1-container,#plan-b2-container,#plan-b3-container').hide();
    $('#plan-e1-container,#plan-e2-container,#plan-e3-container').show();
    

    $('.nav-item-1').click(function(){
        $('.nav-link-1').addClass('active');
        $('.nav-link-2').removeClass('active');
        $('#plan-b1-container,#plan-b2-container,#plan-b3-container').hide();
        $('#plan-e1-container,#plan-e2-container,#plan-e3-container').show();
        
    });
    
    $('.nav-item-2').click(function(){
        $('.nav-link-2').addClass('active');
        $('.nav-link-1').removeClass('active');
        $('#plan-e1-container,#plan-e2-container,#plan-e3-container').hide();
        $('#plan-b1-container,#plan-b2-container,#plan-b3-container').show();
      

      
    });
    

    $('.shadowone').mouseover(function(){
        $(this).addClass('shadow');

    });
    $('.shadowone').mouseout(function(){
        $(this).removeClass('shadow');

    });

  


});





