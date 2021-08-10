$(".change-theme").on("click",
 function() {
    $("body").css("background", "black");
    $(".title").css("color" , "red");
    $("button").css("color" , "black");
    $("a").css("color" , "black");
    $("button").css("background" , "gray");
 });

$("#change-font").on("click",
 function() {
    $("#change-font").html("font-family: cursive;");
 });

$("#change-background-color").on("click",
 function() {
    $("#change-background-color").html("background <br> :gray;");
 });

 $("#change-the-font-size").on("click",
 function() {
    $("#change-the-font-size").html("font-size:x-large;");
 });

 $("#change-the-text-color").on("click",
 function() {
    $("#change-the-text-color").html("color:red;");
 });

 $("#change-the-font-weight").on("click",
 function() {
    $("#change-the-font-weight").html("font-weight: <br> lighter;");
 });

 $("#change-the-font-style").on("click",
 function() {
    $("#change-the-font-style").html("font-style: italic;");
 });

 $("#add-the-line-from-text").on("click",
 function() {
    $("#add-the-line-from-text").html("text-decoration: underline;");
 });

 $("#make-a-linear-gradient").on("click",
 function() {
    $("#make-a-linear-gradient").html("background: linear-gradient(45 <br>  deg, red, blue);");
 });

 $("#change-x-index").on("click",
 function() {
    $("#change-x-index").html("z-index: 3;");
 });

 $("#add-a-border").on("click",
 function() {
    $("#add-a-border").html("border: 3px solid red;");
 });

 $("#add-a-border-radius").on("click",
 function() {
    $("#add-a-border-radius").html("border-bottom-left-radius: 10%;border-bottom-right-radius: 10%;");
 });

 $("#add-a-text-shadow").on("click",
 function() {
    $("#add-a-text-shadow").html("text-shadow: 3px 3px gray;");
 });

 $("#change-the-position").on("click",
 function() {
    $("#change-the-position").html("top: -2690px;");
 });

 $("#change-the-text-alignment-in-a-div").on("click",
 function() {
    $("#change-the-text-alignment-in-a-div").html("text-align: right;");
 });

 $("#change-the-background-of-the-scrollbar").on("click",
 function() {
    $("#change-the-background-of-the-scrollbar").html(' ::-webkit-scrollbar {}');
 });
