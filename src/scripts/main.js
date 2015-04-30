(function(){

    //on document Ready
    $(document).ready(function(){

        //Submenu
        $('.mainNav.internas .menuItem').click(function(event){
            event.preventDefault();
            $(this).next('.submenu').toggleClass('active');;
        });

    });

})();