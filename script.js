$("#fade").click(function(){
    $("#fade-text").fadeOut("slow",function(){  
    }).toggle()
})

$("#append").click(function(){
    $("#append-text").append("<h5>this is my append text</h5>")
})

$("#change").click(function(){
    $("#change-text").css("color" , "red")
})