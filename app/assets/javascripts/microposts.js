//= require jquery
//= require jquery_ujs

function updateCountdown() {
    // 140 is the max message length
    var remaining = 140 - jQuery('#micropost_content').val().length;
    jQuery('.countdown').text(remaining + ' characters remaining');
    if (remaining < 0) {
      $(".post").attr("disabled", true);
    } if (remaining <= 20) {
      $('.countdown').css('color', 'red')
    } else {
      $('.countdown').css('color', '#333333')
      $(".post").attr("disabled", false);
    }
}

jQuery(document).ready(function($) {
    updateCountdown();
    $('#micropost_content').change(updateCountdown);
    $('#micropost_content').keyup(updateCountdown);
});
