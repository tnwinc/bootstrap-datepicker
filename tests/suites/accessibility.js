module('Accessibility', {
    setup: function () {
        /*
            Tests start with picker on March 31, 2012.  Fun facts:

            * February 1, 2012 was on a Wednesday
            * February 29, 2012 was on a Wednesday
            * March 1, 2012 was on a Thursday
            * March 31, 2012 was on a Saturday
        */
        this.input = $('<input type="text" value="31-03-2012">')
            .appendTo('#qunit-fixture')
            .datepicker({ format: "dd-mm-yyyy" })
            .focus(); // Activate for visibility checks
        this.dp = this.input.data('datepicker');
        this.picker = this.dp.picker;
    },
    teardown: function () {
        this.picker.remove();
    }
});

test('day label', function () {
    var target;

    equal(this.dp.viewMode, 0);
    target = this.picker.find('.datepicker-days .day.active');
    equal(target.data("title"), 'March 30 2012 Friday');
});