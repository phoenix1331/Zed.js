/*!
 * jQuery lightweight plugin Zed.js
 * Original author: Darren Williams
 * Further changes, comments: @phoenix1331
 * Licensed under the MIT license
 */

// the semi-colon before the function invocation is a safety 
// net against concatenated scripts and/or other plugins 
// that are not closed properly.

;(function( window, document, $, Modernizr ){

//Check for vendor prefixes
var transform = Modernizr.prefixed('transform');
var visibility = Modernizr.prefixed('visibility');
var opacity = Modernizr.prefixed('opacity');

//Main zed method and properties 
function Zed(){
    this.depth = 300; //Transition z value in px
    this.wheelValue = 0;
    this.pageIndex = 1;
    this.currentPage = 1;
    this.previousPage = 0;
    $window = $(window);
    $document = $(document);
    this.count = $('.zed').size();
}

//handleEvents
Zed.prototype.handleEvent = function(event){

    if(this[event.type]) {
       this[event.type](event);
    }
}; //End handleEvent

//Resets CSS to display current page
Zed.prototype.resetCSS = function(i){

    var resetStyle = {};

    resetStyle['transform'] = 'translate3d(0, 0, 0)';
    resetStyle['visibility'] = 'visible';
    resetStyle['opacity'] = 100;

    $('.zp'+i).css(resetStyle);

}; //End resetCSS

// Sets transformation
Zed.prototype.setTransClass = function(){

    //Switch transitions on
    if (Modernizr.csstransitions) {
        //Add transition to page elements
        if ('.zed') {
            $('.zed').addClass('trans');
            //Check transition ended
            $(".zed").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(){
                //Remove transition
                $('.zed').removeClass('trans');
            })
        }else{
            //Prevents pages jumping if link is pressed before transition end
            return;
        }
    }

}; //End setTransClass

//set current menu item
Zed.prototype.setMenuCurrent = function(){

     //Sets menu
    if(this.currentPage !== this.previousPage) {
        $('.current').removeClass('current');
        if (this.currentPage < this.count+1) {
            $('.z'+this.currentPage).addClass('current');
        }
    this.previousPage = this.currentPage;
    }

}; //End setMenuCurrent

//setPage
Zed.prototype.setPage = function() {

    //Check transtion status
    this.setTransClass();
    var backStyle = {};
    //Set
    backStyle['transform'] = 'translate3d(0, 0, '+this.depth+'px)';
    backStyle['visibility'] = 'hidden';
    backStyle['opacity'] = 0;
    //When navigating forward
    if(this.currentPage != this.count){
        for(i = 1;i!=this.count+1;i++){

           (this.currentPage<i)? $('.zp'+i).removeAttr('style')
           : (this.currentPage>i)? $('.zp'+i).css(backStyle)
           : this.resetCSS(i);
        
        }
      //When navigating backward
      }else{
        for(i = this.count;i!=0;i--){

           (this.currentPage<i)? $('.zp'+i).removeAttr('style')
           : (this.currentPage>i)? $('.zp'+i).css(backStyle)
           : this.resetCSS(i);

        }
    }
   //Set current menu item
    this.setMenuCurrent();

}; //End setPage

//Tidy up browser scroll issues
Zed.prototype.mousewheel = function(event) {
    this.mouseScroll(event);
}; //End mousewheel

Zed.prototype.DOMMouseScroll = function(event) {
    this.mouseScroll(event);
}; //End DOMMouseScroll

//Fires up on mouse scroll
Zed.prototype.mouseScroll = function(event) {
    //Grab wheel data
    this.wheelValue = event.detail? event.detail*(-120) : event.wheelDelta ;
    this.pageIndex = (this.wheelValue<=-120)? this.currentPage-1 : this.currentPage+1;
    // Set current page to wheel data - return to first page when > pagecount
    this.currentPage = (this.pageIndex<1)? this.count : (this.pageIndex>this.count)? 1 : this.pageIndex;
    //Set page
    this.setPage();
    //Stop default mouse scroll
    if (event.preventDefault){ 
      event.preventDefault();
      event.stopPropagation()
    }else{
      event.returnValue = false;
    }
    
}; //End mouseScroll


//Fires up on menu item click
Zed.prototype.click = function(event){
    //Get clicked page number
    var clicked = event.target.className;
    //Remove z from string
    this.currentPage = clicked.replace('z', '');
    //Remove current from string - was causing issues when link was pressed twice
    this.currentPage = this.currentPage.replace(' current', '');
    //Set page
    this.setPage();
}; //End click


//Function to initiate zed
$(function(){
  //Instatiate new zed object
    var zed = new Zed();
 
    //Attach click event listener to each menu item
    //Add class of z(n) to each menu item
    var i = 1;
    $('nav li a').each(function(){
        this.addEventListener('click', zed, false);
        $(this).addClass('z'+i);
        i++;
    });

    //Attach class of zp(n) to each page section
    var i = 1;
    $('.zed').each(function(){
        $(this).addClass('zp'+i);
        i++;
    });

    //Bind hover to logo and listen for scroll
    $('.zedScroll').bind( 'hover',  function(event) {
        this.addEventListener('mousewheel', zed, false);
        this.addEventListener('DOMMouseScroll', zed, false);
    });

}); //End initiation function

})( window, window.document, window.jQuery, window.Modernizr );