alert("welcome")

addbtn = document.querySelector("#circle_area");
addbtn.addEventListener('click',function(e){
    a=document.querySelector("#radius");
    ans=document.querySelector('#answer');
    let b;
    b=3.14*parseFloat(a.value)*parseFloat(a.value);
    ans.value=b;
});

adbtn = document.querySelector("#btn_vol_cyn");
adbtn.addEventListener('click',function(e){
    c=document.querySelector("#r");
    d=document.querySelector('#h');
    answer=document.querySelector('#answ');
    let f;
    f=3.14*parseFloat(c.value)*parseFloat(c.value)*parseFloat(d.value);
    answer.value=f;
});
