// cache "body, html"
$root = $("body, html");

// check if input url is a valid image
function checkURL(url) {
    return(url.match(/\.(jpeg|jpg|gif|png|apng|svg|bmp|dib|ico)$/) != null);
}

// toggle dropdown menu for responsive web design
function toggleMenu() {
    var dropdown = $('.nav a:not(:first-child)').toggleClass('dropdown');
    var offset = $(window).scrollTop();
    if (offset != 0){
        if ($(dropdown).hasClass('dropdown')) {
            offset -= $('.nav a').outerHeight() * 2 - 15;
        } else {
            offset += $('.nav a').outerHeight() * 2 - 15;
        }
    }
    return offset;
}

// elements for making posts
var profile = '<img src="res/profile.png" alt="profile" class="profile_photo">';
var name = '<div class="post_title"><h2 class="post-name">' + $('.profile_name').first().text() + '</h2>';
var like = '<button type="button" class="like_button test--like_button"><span class="like"></span><span class="count test--like_count">0</span></button>';
var div_begin = '<div class="post test--post">' + profile + name;
var div_end = '</div>';

$(function(){

    // implement animations for menu 
    $('header .nav a').click(function(event) {
        event.preventDefault();
        var anchor = $(this).attr('href');
        if (anchor == '#') {
            var offset = 0;
        } else {
            var offset = $(anchor).offset().top - $('.nav a').height();
        }
        if ($('.nav a:not(:first-child)').hasClass('dropdown')) {
            offset -= $('.nav a').height();
            toggleMenu();
        }
        $root.animate({scrollTop:offset}, 500);
    });

    // make a text or image post
    $('.post_button').click(function(){
        var input = $('.post_input').val();
        var is_text = $(this).hasClass('input_button');
        var is_img = $(this).hasClass('photo_button');
        
        // check if input is valid
        if (input != undefined && input != '' && (is_text || (is_img && checkURL(input)))) {
            $('.photo_url').removeClass('invalid');
            var time = '<p class="time_stamp">' + new Date($.now()).toLocaleString() + '</p></div>';
            
            // post text if click text button
            if (is_text) {
                var content = '<p class="post_content test--post_content">' + input + '</p>';

            // post img otherwise
            } else {
                var content = '<img src="' + input + '" alt="post image" class="post_content test--post_content">';
            }
            var post = div_begin + time + like + content + div_end;
            $(post).hide().insertAfter($('.post_feed_title')).show(200);
            $('.post_input').val('');
            var offset = $('.post_feed_title').offset().top - $('.nav').height() - 34;
            $root.animate({scrollTop:offset}, 500);
        } else {
            $('.post_input').addClass('invalid');
        }
        if ($('.nav a:not(:first-child)').hasClass('dropdown')) {
            offset -= $('.nav a').height();
            toggleMenu();
        }
        $root.animate({scrollTop:offset}, 500);
    });

    // implement like button
    $('.post_feed').on('click', '.like_button', function() {
        var count = $(this).children('.count:first');
        count.text(parseInt(count.text()) + 1);
    });

    // scroll to the same position when toggling menu
    $('.dropdown_button').on('click', function() {
        $root.animate({scrollTop:toggleMenu()}, 500);
    });

    // click empty place to collapse menu
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.nav').length && $('.nav a:not(:first-child)').hasClass('dropdown')) {
            $root.animate({scrollTop:toggleMenu()}, 500);
        }
    });
});