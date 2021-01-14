var searchBtn = $("#searchBtn")
var resetBtn = $("#resetBtn")
var keywords = $("#search-keywords").val()
//searchBtn.on("click", function(event){
//event.preventDefault();
//console.log()
//})

resetBtn.on("click", function(event){
event.preventDefault();

})
$(searchBtn).click(function (event) {
    event.preventDefault()
    //siblings method is used to get input event from textarea. As textarea is siblings of saveBtn.
    //while parent is used as data-hour attribute is parent to saveBtn.
    var inputValue = $(this).siblings('input').val();
    //var input = $(this).parent().attr('data-hour');
    localStorage.getItem(inputValue);
});