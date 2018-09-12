// TO-DO - SVG ICONS - DOWNLOAD BTN OPTION - A11Y TESTING - SWIPE SUPPORT

//Options
var showNav = 1;
var keyboardNav = 1;
var showCaption = 1;
var loop = 1;

//Create overlay items
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $holder = $('<div class="holder"></div>');
var $caption = $('<p></p>');
var $nav = $('<div class="nav"><a id="close" nohref><span>&times;</span></a><a id="prev" nohref><span>&#8592;</span></a><a id="next" nohref><span>&#8594;</span></a></nav>');
var glength = $('#imageGallery li').length;
var imageIndex, imageLocation, captionText, allowKeyboard;

//Add overlay items to DOM
$('#overlay img').before('');
$holder.append( $image );
$holder.append( $nav );
if ( showCaption ){ $holder.append( $caption ); }
if ( !showNav ){ $nav.hide(); }
$overlay.append( $holder );
$("body").append( $overlay );

//Click image link
$('#imageGallery a').click( function(event) {
    event.preventDefault();
    imageLocation = $(this).attr("href");

  // index of clicked item
    imageIndex = $( '#imageGallery a' ).index(this) + 1;

    //Image focused on
    $image.attr("src", imageLocation);

  //Add and remove active class on link
  $(this).addClass('active');
  $('#imageGallery a').not(this).removeClass('active');

    //Show alt attribute as caption
    captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);

  allowKeyboard = 1;
    $overlay.show();
});

//Close overlay
$image.click(function() {
  allowKeyboard = 0;
  $($overlay).hide();
});

$overlay.click(function(e) {
  if(e.target != this) return;
  $(this).hide();
});

$('#close').click(function() {
  $($overlay).hide();
});
//Cycle images
$('#next').click(function() {
  //check to see if its the last image
  if (glength != imageIndex){
    $('.active').closest('li').next().find('img').trigger('click');
  } else if (loop == 1){
    $('#imageGallery li').first().find('img').trigger('click');
  }
});

$("body").keydown(function(e) {
  if (keyboardNav == 1 && allowKeyboard == 1) {
     if(e.which == 37) { $('#prev').trigger("click"); }
     else if(e.which == 39) { $('#next').trigger("click"); }
     else if(e.which == 27) { $($overlay).hide(); }
  }
});

$('#prev').click(function() {
  //check to see if its the first image
  if (imageIndex != 1){
    $('.active').closest('li').prev().find('img').trigger('click');
  } else if (loop == 1){
    $('#imageGallery li').last().find('img').trigger('click');
  }
});


