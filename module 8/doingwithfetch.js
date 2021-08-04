
function xhrreq(){
    // var xhr=new XMLHttpRequest();
    // xhr.onload=function(){
    //         var xh=xhr.response;
    //        // console.log(xh);
    //         var p=JSON.parse(xh);
    //        // console.log(p.message);
    //         document.getElementById('rainbow').src=p.message;
    // }
    // xhr.open('get','https://dog.ceo/api/breeds/image/random');
    // xhr.send();
    var q=document.getElementById("rainbow");
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((response)=>{
        console.log(response);
        return response.json();
    })
    .then((p)=>{
        console.log(p.message);
        q.src=p.message;
        //console.log(document.getElementById('rainbow').src);
       //document.getElementsById('rainbow').src=p.message;
    })
    .catch((error)=>{
        console.log(error);
    })
}

var t=document.getElementById("btn");
//console.log(t);
t.addEventListener("click",xhrreq

);