$(document).ready(function(){
    $('.modal').modal();
    $('.pushpin').pushpin();
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $('.slider').slider({full_width: true});
    $('.myreviews').carousel({
        
        numVisible: 7,
        shiftValue: 1,
        padding: 55,
    });
    $('.fixed-action-btn').floatingActionButton();
    $('.tooltipped').tooltip({

        inDuration: 100,
        enterDelay: 1000,
        exitDelay: 100,
        outDuration: 500,
    });
    $(".dropdown-trigger").dropdown();
    $('.collapsible').collapsible();
    $('.scrollspy').scrollSpy();
    
    
})

$("#new-projects").load("index.html #footer" );




function hoverModal(){
    var instance = M.Tooltip.getInstance($('#modal1'));
    instance.open();
    
}


function toggleModal(){
    var instance = M.Modal.getInstance($('#modal3'));
    instance.open();
}


$('.pushpin-demo-nav').each(function() {
    var $this = $(this);
    var $target = $('#' + $(this).attr('data-target'));
    $this.pushpin({
      top: $target.offset().top,
      bottom: $target.offset().top + $target.outerHeight() - $this.height()
    });
  });







