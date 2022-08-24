$(document).ready(function() {
    $('.toggle_button').click(function(event) {
        $('.first_line,.second_line,.third_line,.nav').toggleClass('active');
    });
});

$(document).ready(function() {
    $('.homework_block').click(function(event) {
        $('.arrow_one').toggleClass('active_one');
    });
});

$(document).ready(function() {
    $('.events_block').click(function(event) {
        $('.arrow_two').toggleClass('active_two');
    });
});

