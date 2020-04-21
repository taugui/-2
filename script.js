$(".talk").click(function() {
    let message = $("input").val();
    $(".speech-bubble").text(message);
    
});