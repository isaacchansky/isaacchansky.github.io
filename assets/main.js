(function() {


    var throttle = function(func, limit) {
        var inThrottle
        return function () {
            var args = arguments
            var context = this
            if (!inThrottle) {
                func.apply(context, args)
                inThrottle = true
                setTimeout(function() {
                    inThrottle = false;
                }, limit);
            }
        }
    }



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


    // var workheadlines = [].slice.call(document.querySelectorAll('.work-headlines'));

    // workheadlines.forEach(function (el) {

    // });
    var bodyEl = document.querySelector("body");
    window.addEventListener('scroll', function() {
        if (document.documentElement.scrollTop > 50) {
            bodyEl.classList.add("is-scrolled");
        } else {
            bodyEl.classList.remove('is-scrolled');
        }
    });







    var workItems = [].slice.call(document.querySelectorAll('.work-headline'));
    workItems.forEach(function(el) {
        el.addEventListener('mouseover', function() {
            document.querySelector('body').classList.add('has-work-active');
        });
        el.addEventListener('mouseout', function () {
            document.querySelector('body').classList.remove('has-work-active');
        });
    });


    function onScroll() {
        $('body').toggleClass('is-inverted', document.querySelector('#working').getBoundingClientRect().top < ($(window).height() - 200));

        $('body').toggleClass('is-at-bottom', $(window).scrollTop() + $(window).height() == $(document).height());
    }

    $(window).scroll(throttle(onScroll, 100));
    onScroll();

})();
