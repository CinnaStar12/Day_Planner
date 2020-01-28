var dateLine = $("#date-line");
var now = moment().hour()
now = 11;
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
// if (now > $(this).attr("data-time")){
    //     $(".text-block-area").attr("class", "form-control text-block-area text-block-before")
    //     console.log($(".text-block-area").attr("data-time"))
    // }
// else if (now === $(this).attr("data-time")){
//     $(".text-block-area").attr("class", "form-control text-block-area text-block-during")
// }
// else if (now < $(this).attr("data-time")){
//     $(".text-block-area").attr("class", "form-control text-block-area text-block-after")
// }