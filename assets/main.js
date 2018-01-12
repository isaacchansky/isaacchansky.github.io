(function() {

    // smooth scrolling
    var anchorLinks = [].slice.call(document.querySelectorAll('a[href^="#"]'));

    anchorLinks.forEach(function (el) {
        el.addEventListener('click', function(event) {
            var id = el.getAttribute('href')
            var target =  document.querySelector(id);
            if (id && target) {
                event.preventDefault();
                target.scrollIntoView({behavior: 'smooth'});
            }
        })
    });


})();
