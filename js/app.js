requirejs.config({
    paths: {
        "jquery": "jquery", //v2.1.3
        "jquery-ui": "jquery-ui", //v1.11.2
    }
});

define(["jquery", "jquery-ui"], function($, ui ) {
    $(function() {
        
    });
});

var menu = document.querySelector('.menu');

function toggleMenu() {
  menu.classList.toggle('hidden');
}
menu.addEventListener('click', toggleMenu);