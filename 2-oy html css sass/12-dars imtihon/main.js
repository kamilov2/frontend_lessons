setInterval(function(){
    var date =new Date();
    var h = date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    
    if(h<12){
    document.getElementById("box").innerHTML=+":"+h+":"+m+";"+s+"AM"
    
    }else{document.getElementById("box").innerHTML=+":"+h+":"+m+";"+s+"PM"}
    
    },1000)