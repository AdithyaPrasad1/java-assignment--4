

    var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
 
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}



function validateName(){
    let name=document.getElementById("name").value
    let regex=/^[a-zA-Z ]+$/
    if(regex.test(name)){
        document.getElementById('message1').innerHTML="verified"
        document.getElementById("message1").style.color="green"
        return true
    }else{
        document.getElementById('message1').innerHTML="fail"
        document.getElementById("message1").style.color="red"
        return false
    }
}

 const validateNumber=()=>{
    let mnum=document.getElementById("mnum").value 
    let reg=/^[0-9]{10}$/
    if(reg.test(mnum)){
        document.getElementById('message2').innerHTML="verified"
        document.getElementById("message2").style.color="green"
        return true
    }else{
        document.getElementById('message2').innerHTML="fail"
        document.getElementById("message2").style.color="red"
        return false
    }
 }
  function validateEmail(){
    let email=document.getElementById("email").value 
    let reg=/^([a-zA-Z0-9\.-_]+)@([a-z0-9-_]{2,20})\.([a-z]{2,6})$/
    if(reg.test(email)){
        document.getElementById('message3').innerHTML="verified"
        document.getElementById("message3").style.color="green"
        return true
    }else{
        document.getElementById('message3').innerHTML="fail"
        document.getElementById("message3").style.color="red"
        return false
    }
}

validateEmailAllFields=()=>{
    validateEmail();
    validateName();
    validateNumber();

    if(validateEmail() && validateName() && validateNumber() ){
        return true
    }else{
        return false
    }
}
var sidemeu = document.getElementById("sidemenu");

function openmenu(){
    sidemeu.style.right ="0";
}
function closemenu(){
    sidemeu.style.right="-200px";
}