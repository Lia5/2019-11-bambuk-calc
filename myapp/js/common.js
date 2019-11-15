$(function() {

    // Accordeon
    if(jQuery('.accordeon').length) {
        var contents = $('.accordeon-content');
        var titles = $('.accordeon-title');
        titles.on('click',function(){
        var title = $(this);
        contents.filter(':visible').slideUp(function(){
            $(this).prev('.accordeon-title').removeClass('is-opened');
        });  
        
        var content = title.next('.accordeon-content'); 
        
        if (!content.is(':visible')) {
            content.slideDown(function(){title.addClass('is-opened')});
        } 
        });
    }
     if(jQuery('.calc__total').length) {

        $('.calcTable__line input').on('click', function()  {
            var start = $('.calc__total').html();
            $this = this;
            var sum = $(this).attr('data-value');
            console.log($(this).prop('checked'));
            if ($(this).prop('checked')) {
                var rezult = parseInt(start) + parseInt(sum);
            } else {
                var rezult = parseInt(start) - parseInt(sum);
            }
            
            $('.calc__total').html(rezult);
            console.log($(this).attr('data-value'));
            console.log(rezult);

        });
     }
});



document.addEventListener('DOMContentLoaded', function(){
// //menu
//     var menu = document.querySelector('.menu-toggle');
//     menu.addEventListener('click', function(){
//         var nav = document.querySelector('.main-menu');
//         nav.classList.toggle('active');
//         var navGamb = document.querySelector('.menu-toggle');
//         navGamb.classList.toggle('active');
//     });
// //tabs
// 	// store tabs variable
// 	var myTabs = document.querySelectorAll("ul.header__tabs > li");
//     function myTabClicks(tabClickEvent) {
// 		for (var i = 0; i < myTabs.length; i++) {
// 			myTabs[i].classList.remove("active");
// 		}
// 		var clickedTab = tabClickEvent.currentTarget;
// 		clickedTab.classList.add("active");
// 		tabClickEvent.preventDefault();
// 		var myContentPanes = document.querySelectorAll(".tab-pane");
// 		for (i = 0; i < myContentPanes.length; i++) {
// 			myContentPanes[i].classList.remove("active");
// 		}
//         var anchorReference = tabClickEvent.target;
//         console.log(anchorReference);
//         var activePaneId = anchorReference.getAttribute("href");
//         console.log(activePaneId);
//         var activePane = document.querySelector(activePaneId);
//         console.log(activePaneId);
// 		activePane.classList.add("active");
//     }
//     for (i = 0; i < myTabs.length; i++) {
// 		myTabs[i].addEventListener("click", myTabClicks)
// 	}





});
