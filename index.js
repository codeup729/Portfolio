let down = document.getElementById("Hi");
down.addEventListener("click", function(err,window){
    document.getElementsByTagName("h1")[1].scrollIntoView();
});
var app1 = document.getElementsById("Tata");
app1.addEventListener("mouseover", function(){
    document.getElementById("EDA").style.color = "red";
});
app1.addEventListener("mouseout", function(){
    document.getElementById("EDA").style.color = "black";
});
        var app2 = document.getElementsById("Movie");
        app2.addEventListener("mouseover", function(){
            document.getElementById("RS").style.color = "red";
        });
        app2.addEventListener("mouseout", function(){
            document.getElementById("RS").style.color = "black";
        });
        var app3 = document.getElementsById("2FA");
        app3.addEventListener("mouseover", function(){
            document.getElementById("Auth").style.color = "red";
        });
        app3.addEventListener("mouseout", function(){
            document.getElementById("Auth").style.color = "black";
        });

        
