$("a").each(function(){
    $(this).css("color", "white");
});
$("#nav").css("background-color", "#114455");
let currentLine = 0;

$("li").each(function(){
    if(currentLine % 2 === 0){
        $(this).css("background-color", "#ccc");
    }
    else{
        $(this).css("background-color", "#aaa");
    }
    currentLine++;
});
$("input").each(function(){
    $(this).val("Evan");
});
// $("input").css(function(){
//     let value = $("input").children()
//     $(value).text("Evan");
// });
