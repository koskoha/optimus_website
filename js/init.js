
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        fullWidth: true,
        indicators: true,
        duration:400
    });
    var elem = document.querySelector('.carousel');
    var instance = M.Carousel.getInstance(elem);
    setInterval(()=>{
        instance.next();
    }, 5000)
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    // var contact_us = document.querySelectorAll('.contact_us');
    var options = {
        minDate: new Date()
    }
    var instances = M.Datepicker.init(elems, options);
  });

  $(document).ready(function() {
    "use strict";

    $(".service_name").hover( function(eventObj) {
        $(this).find(".material-icons").removeClass("hide")
        $(this).find(".material-icons").removeClass("animated rollOut hide")
        $(this).find(".material-icons").addClass("animated rollIn")
    },function() {
        $(this).find(".material-icons").removeClass("animated rollIn")
        $(this).find(".material-icons").addClass("animated rollOut")
    })

    $(".animated_logo").addClass("animated slideInLeft");
    // $(".animated_info").addClass("animated slideInRight");
  });