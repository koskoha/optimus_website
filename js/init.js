
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

//  ***************************** submit form ***********************
    $("#estimate_form").on("submit", function(event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formError();
            submitMSG(false, "Did you fill in the form properly?");
        } else {
            // everything looks good!
            event.preventDefault();
            submitForm();
        }
      });
    
    
      function submitForm() {
        // Initiate Variables With Form Content
        const name = $('#name').val();
        const phone = $('#phone').val();
        const email = $('#email').val();
        const moveDate = $('#move_date').val();
        const moveSize = $('#form_select').val();
        const bedrooms = $('#bedrooms').val();
        const addressFrom = $('#address_from').val();
        const cityFrom = $('#city_from').val();
        const stateFrom = $('#state_from').val();
        const zipFrom = $('#zip_from').val();
        const addressTo = $('#address_to').val();
        const cityTo = $('#city_to').val();
        const stateTo = $('#state_to').val();
        const zipTo = $('#zip_to').val();
        const comments = $('#comment').val();
        $.ajax({
            type: "POST",
            url: "https://script.google.com/macros/s/AKfycbzFIROjuJpK9lb0Wi0phjzAnYxgQxjGHlhwYkL61arZcFXQLtZs/exec",
            data: "name=" + name + "&phone=" + phone+ "&email=" + email+ "&move_date=" + moveDate+ "&move_size=" + moveSize+ "&bedrooms=" + bedrooms+ "&address_from=" + addressFrom+ "&city_from=" + cityFrom+ "&state_from=" + stateFrom+ "&zip_from=" + zipFrom+ "&address_to=" + addressTo+ "&city_to=" + cityTo+ "&state_to=" + stateTo+ "&zip_to=" + zipTo + "&comments=" + comments,
            success: function(resp) {
                console.log(resp);
                if (resp.result === "success") {
                    formSuccess();
                } else {
                    formError();
                    submitMSG(false, "There was some problem with submitting your request. Please call us at 202-650-9228 and we would be more than happy to help you get the right quote.");
                }
            }
        });
      }
    
      function formSuccess() {
        $("#estimate_form")[0].reset();
        submitMSG(true, "We received you quote request and will reach back to you with you quote shortly!");
      }
    
      function formError() {
        $("#estimate_form").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
            function() {
                $(this).removeClass();
            });
      }
    
      function submitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center fadeInUp animated text-success msgSubmitSuccess";
        } else {
            var msgClasses = "h3 text-center text-danger msgSubmitSuccess msgSubmitFail";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
      }
  });