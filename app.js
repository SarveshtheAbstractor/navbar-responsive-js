$(function(){
    
    $('.toggle').on('click',function(){
        
        if($('.item').hasClass('active')){
            $('.item').fadeOut('slow',function(){
                $(this).removeClass('active');
            });
           // $('.item').removeClass('active').fadeOut(); 
        } else {
             $('.item').fadeIn('slow',function(){
                $(this).addClass('active');
            });
           // $('.item').addClass('active').fadeIn(); 
        }
        
    });
    
    
});