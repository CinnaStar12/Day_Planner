var dateLine = $("#date-line");
var now = moment().hour()
var tasklist = [];

$("document").ready(function () {
    dateLine.text(moment().format("MMMM Do YYYY"));
    pullTaskList();
    console.log(now);
    console.log(tasklist);
    $(".text-block-area").each(function () {
        if (now > $(this).attr("data-time")) {
            $(this).attr("class", "form-control text-block-area text-block-before");
        }
        else if (now == $(this).attr("data-time")) {
            $(this).attr("class", "form-control text-block-area text-block-during");
        }
        else if (now < $(this).attr("data-time")) {
            $(this).attr("class", "form-control text-block-area text-block-after");
        }
    });


});
$(".time-button").on("click", function () {
    var timeVal = $(this).attr("data-time")
    var taskInput = $("textarea[data-time=" + timeVal + "]").val();
    var index = (timeVal - 9);
    tasklist[index] = taskInput;
    var tasklistStr = JSON.stringify(tasklist);
    localStorage.setItem("tasklist", tasklistStr)
    console.log(timeVal);
    console.log(taskInput);
    console.log(tasklist)
    console.log(tasklist.length)
})

function pullTaskList() {
    var tasklistStr = localStorage.getItem("tasklist");
    tasklist = JSON.parse(tasklistStr)
    $(".text-block-area").each(function () {
        var timeVal = $(this).attr("data-time");
        var index = (timeVal - 9);
        $(this).text(tasklist[index])

    })
};

$(".btn-danger").on("click", function () {
    var check = confirm(    "Are you sure you want to delete all tasks? All data will be erased and will not be able to be recovered.")
    if (check) {
        $(".text-block-area").each(function () {
            $(this).val("")
        })
        tasklist = [""];
        console.log(tasklist)
        var tasklistStr = JSON.stringify(tasklist);
        localStorage.setItem("tasklist", tasklistStr)
    }
});