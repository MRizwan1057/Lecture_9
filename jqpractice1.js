$(function() {
    // jq will exxecute this function after page load
    // so do your bindings here
    $("#addButton").click(handleBtnClick);
});

function handleBtnClick() {
    $("#todos").append("<li>New To Do Will appear here</li>")
}