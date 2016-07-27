! function() {
    var html = document.documentElement;
    var width = html.getAttribute('data-width');
    var height = html.getAttribute('data-height');
    var ratio = width / height;
    var screen = html.getBoundingClientRect();
    var viewportWidth = screen.width;
    var viewportHeight = screen.height;
    var viewportRatio = viewportWidth / viewportHeight;
    var scale = 1;
    if (viewportRatio < ratio) {
        scale = (viewportHeight / viewportWidth) / (height / width);
        Array.prototype.slice.call(document.querySelectorAll('.cviewport')).forEach(function(x) {
            // x.style.transform = 'scale(' + scale + ')';
        });
    }
}();