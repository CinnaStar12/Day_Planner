var dateLine = $("#date-line");
var now = moment().hour()

$("document").ready(function () {
    dateLine.text(moment().format("MMMM Do YYYY"));
    console.log(now);
    $(".text-block-area").each(function() {
        if(now > $(this).attr("data-time")){
            $(this).attr("class", "form-control text-block-area text-block-before");
            console.log($(this).attr("data-time"))
        }
        else if(now == $(this).attr("data-time")){
            $(this).attr("class", "form-control text-block-area text-block-during");
            console.log($(this).attr("data-time"))
        }
        else if(now < $(this).attr("data-time")){
            $(this).attr("class", "form-control text-block-area text-block-after");
            console.log($(this).attr("data-time"))
        }
    });
    
    
});
