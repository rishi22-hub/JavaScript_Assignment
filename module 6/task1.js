   
var c = document.querySelectorAll("#column2");
var change_color= document.querySelector("#column2").addEventListener("dblclick",function fun(x){
    for(i=0;i<c.length;i++)
           c[i].style.backgroundColor="red";
       })
