var allow = 1;
document.getElementById("inc").addEventListener('click',function (event){
    if(allow ==0)
        return ;
    allow= 0;
    var text_now = document.getElementById("tracker").innerText.split(' ');
    text_now[4] = String(Number(text_now[4])+1);
    document.getElementById("tracker").innerHTML = text_now.join(' ');
    console.log(event.target);
    setTimeout(function (){
        allow=1;
    },2000);
}, false);