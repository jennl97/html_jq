/**
 * Created by JENN on 10/31/2016.
 */
$(document).ready(function () {
    $("#button").click(function () {
        var toAdd = $("input[name=checkListItem]").val();
        $("#list").append('<div class="item">' + toAdd +'</div>')
    });

    $(document).on("click",".item",function () {
        $(this).remove()

    });
    
})