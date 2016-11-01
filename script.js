/**
 * Created by JENN on 10/31/2016.
 */

$(document).ready(function () {
	"use strict";
    $("#button").click(function () {
        var toAdd = $("input[name=checkListItem]").val();
        $("#list").append('<div class="item">' + toAdd +'</div>');
    });
	
	$("#button").bind("click", function() {
		$("input[type=text], textarea").val("");
	});

    $(document).on("click",".item",function () {
        $(this).remove();

    });
    
});