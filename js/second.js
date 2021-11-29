/*global $*/
$(function() {
    'use strict';
    //variables
    var myheader = $('.header'),
        myslider = $('.slider');
    
    //adjust header size
    myheader.height($(window).height());
    
    $(window).resize(function() {
        myheader.height($(window).height());
        });
    
    //add class active to navbar li 
    $('.links li a').click(function() {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        });
    
    //trigger bx slider
    $(document).ready(function(){
      $('.slider').bxSlider({
        pager: false
        });
    });
    
    //bx slider postion (mid)
    myslider.each(function(){
        $(this).css('paddingTop',($(window).height() - $('.slider li').height()) / 2);
        });
    
        $(window).resize(function() {
        myslider.css('paddingTop',($(window).height() - $('.slider li').height()) / 2);
        });
    
    //smooth scroll to every (a) link 
        $('a[href*="#"]').on('click', function (e) {
          e.preventDefault();
        
          $('html, body').animate(
            {
              scrollTop: $($(this).attr('href')).offset().top
            },1000,'linear');
        });
        
        //making simple testmonial auto slider
        $(function autoSlider(){
            $('.section3 .autoSlider .active').each(function(){
              if(!$(this).is(':last-Child')){
                $(this).delay(2000).fadeOut(2000,function(){
                    $(this).removeClass('active');
                    $(this).next().addClass('active').fadeIn();
                    autoSlider();
                });
              }
              else{
                $(this).delay(2000).fadeOut(2000,function(){
                    $(this).removeClass('active');
                    $('.section3 .autoSlider div').eq(0).addClass('active').fadeIn();
                    autoSlider();
                });
              }
            });
        });
        
        //active button in gallery shffle
        $('.section4 .container .shuffle li').click(function(){
            $(this).addClass('active');
            $(this).siblings().removeClass();
        });
        
        //mixitup shuffle
        mixitup('#mix-wrapper', {
            animation: {
            effects: 'fade rotateZ(-180deg)',
            duration: 700
          },
          classNames: {
            block: 'shuffle',
            elementFilter: 'filter-btn',
          },
          selectors: {
            target: '.mix-target'
          }
        });
        
});

















