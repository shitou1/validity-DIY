(function($) {
    $.fn.validity = function(options) {
        return this.each(function() {
            var $this = $(this);
            $this.blur(function() {
                var val = $.trim($this.val());
                for (var reg in options) {
                    if(!options.hasOwnProperty(reg)){
                        continue;
                    }
                    var pattern = eval(reg);
                    var isTrue = pattern.test(val);
                    if (!isTrue) {
                        console.log(options[reg]);
                        break;
                    }
                }
            });
        });
    };
})(jQuery);
