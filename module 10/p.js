
function xhrreq(){
    var xhr=new XMLHttpRequest();
    xhr.onload=function(){
            var xh=xhr.response;
           // console.log(xh);
            var p=JSON.parse(xh);
           // console.log(p.message);
            document.getElementById('rainbow').src=p.message;
    }
    xhr.open('get','https://dog.ceo/api/breeds/image/random');
    xhr.send();
}

var t=document.getElementById("btn");
//console.log(t);
t.addEventListener("click",xhrreq

);