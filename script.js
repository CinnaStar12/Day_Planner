var dateLine = $("#date-line");
var now = moment().hour()
var tasklist = [];

$("document").ready(function () {
    dateLine.text(moment().format("MMMM Do YYYY"));
    console.log(now);
    $(".text-block-area").each(function() {
        if(now > $(this).attr("data-time")){
            $(this).attr("class", "form-control text-block-area text-block-before");
        }
        else if(now == $(this).attr("data-time")){
            $(this).attr("class", "form-control text-block-area text-block-during");
        }
        else if(now < $(this).attr("data-time")){
            $(this).attr("class", "form-control text-block-area text-block-after");
        }
    });
    
    
});
$(".time-button").on("click", function() {
    var timeVal = $(this).attr("data-time")
    console.log(timeVal);
    var task = $("textarea[data-time=" + timeVal + "]").val();
    console.log(task);
    tasklist.push({
        time: timeVal,
        task: task
    })
})