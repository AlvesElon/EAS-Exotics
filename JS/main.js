$(document).ready(function() {
    $("#images-carousel").slick({
        autoplay: true,
    });
    $(".hamburguer-menu").click(function(){
        $("nav").slideToggle();
    })

    $("#phone").mask("(000) 000-0000", {
        placeholder: "(123) 123-1234"
    })

    $("form").validate({
        rules: {
            name:{
                required:true
            },
            email:{
                required:true, email: true
            },
            phone:{
                required:true
            },
            car:{
                required:true
            }
        }, 
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(event, validator){
            let incorrectFields = validator.numberOfInvalids();
            if (incorrectFields){
                alert (`You have ${incorrectFields} incorrects fields`)
            }
        }
    })
    $(".vehicle-list button").click(function(){
        const destination = $("#contact");
        const carName = $(this).parent().find("h3").text();
        $("#car").val(carName);
        $("#comment").val(`I'd like to know if the ${carName} you have listed is still available`)
        $("html").animate({
            scrollTop: destination.offset().top
        }, 1000)
    })
    $("#contact button").click(function(){
        alert ('We received your request, we wil get back to you within the next 48 hours.')
    })
})