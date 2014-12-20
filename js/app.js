requirejs.config({
    paths: {
        "BigVideo": "bigvideo",
        "jquery": "jquery", //v2.1.3
        "jquery-ui": "jquery-ui", //v1.11.2
        "videojs": "video",
        "imagesloaded": "imagesloaded"
    },
    shim: {
        "videojs": {exports: 'videojs'}
    }
});

define(["jquery", "jquery-ui", "BigVideo", "imagesloaded"], function($, ui, bigvideo, imagesLoaded ) {
    $(function() {
        new imagesLoaded( document.querySelector('.container'), function( instance ) {
            var BV = new $.BigVideo();
            BV.init();
            BV.show('/videos/Christmas_Tree_1.mov.mp4');
        });
    });
});