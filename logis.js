//faq function//

const accordian=document.getElementsByClassName('accordian');
for(i = 0; i<accordian.length; i++){
accordian[i].addEventListener('click',function(){
    this.classList.toggle('active');
})
}
//tooggle function//
let menu=document.querySelector('#menu');
let navbar=document.querySelector('.navbar');
menu.onclick = () =>{
    menu.classList.toggle("fa-x");
    navbar.classList.toggle("active");
}
window.onscroll = () =>{
    menu.classList.remove("fa-x");
    navbar.classList.remove("active");
}
//contact fun//
const form=document.getElementById("myform");
const ynlabel=document.getElementById("fnlabel");
const yname=document.getElementById("urName");
const yerror=document.getElementById("Nerror");
const ymlabel=document.getElementById("ymlabel");
const email=document.getElementById("email");
const mailerror=document.getElementById("maillerror");
const sblabel=document.getElementById("sublabel");
const ysub=document.getElementById("sub");
const ymsglabel=document.getElementById("msglabel");
const ymg=document.getElementById("msg");

function youname(){
    if(yname.value===""){
        yerror.innerHTML="enter youname";
        yname.style.borderColor="red";
        return false;
    }
    else if(yname.value.length<5||yname.value.length>10)
    {
        yerror.innerHTML="min 5& max10";
        yname.style.borderColor="red";
        return false;
    }
    else{
        yerror.innerHTML="";
        yname.style.borderColor="green";
        return true;
    }
}
 function youemail(){
    if(email.value==="")
    {
        mailerror.innerHTML="enter youEmail";
        email.style.borderColor="red";
        return false;
    }
    else if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        mailerror.innerHTML="enter vaild email";
        email.style.borderColor="red";
        return false;
    }
    else{
        mailerror.innerHTML="";
        email.style.borderColor="green";
        return true;
    }
 }
 function yousub(){
    if(ysub.value===""){
        ysub.style.borderColor="red";
        return false;
    }
    else{
        ysub.style.borderColor="green";
        return true;
    }
    }
    function youmsg(){
        if(ymg.value===""){
            ymg.style.borderColor="red";
            return false;
        }
        else {
            ymg.style.borderColor="green";
            return true;
        }
    }
    form.addEventListener("submit", e=>{
        e.preventDefault();
        checkinput();
    })
    function checkinput(){
        const younametrim=yname.value.trim();
        const youmailltrim=email.value.trim();
        const yousubtrim=ysub.value.trim();
        const youmsgtrim=ymg.value.trim();


        if(younametrim&&youmailltrim&&yousubtrim&&youmsgtrim){
            
            Swal.fire(
                'welcome!',
                'thankyou for your feedback!',
                'thankyou'
              )
        
        }
    }
