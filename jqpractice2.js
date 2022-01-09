$(function() {
    // jq will exxecute this function after page load
    // so do your bindings here
    $("#addButton").click(handleBtnClick);
    $("#todos li").click(function() {
        $(this).remove();
    });
});

function handleBtnClick() {
    var newTodo = $("#newTodo").val();
    if (!newTodo) {
        $("#newTodo").addClass("error");
        return;
    }
    $("#newTodo").removeClass("error");
    $("#newTodo").val("");
    $("#todos").append("<li>" + newTodo + "</li>")
}