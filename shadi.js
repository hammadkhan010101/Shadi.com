function login() {
    document.getElementById("closebtn").style.display = 'block';
    document.getElementById("join").style.display = 'none';
}
function closebtn() {
    document.getElementById("closebtn").style.display = 'none';
    document.getElementById("join").style.display = 'block';

}
function joinbtn(){
    document.getElementById("form").style.display = 'block';
    document.getElementById("login").style.display = 'none';

    
    
}
function closeformbtn() {
    document.getElementById("form").style.display = 'none';
    document.getElementById("login").style.display = 'block';

}
function femalebtn(){
    document.getElementById("female").style.backgroundColor = '#31BFAC'
    document.getElementById("male2").style.backgroundColor = '#31BFAC'
    document.getElementById("male").style.backgroundColor = 'white'
    document.getElementById("female2").style.backgroundColor = 'white'
}
function malebtn(){
    document.getElementById("male").style.backgroundColor = '#31BFAC'
    document.getElementById("female2").style.backgroundColor = '#31BFAC'
    document.getElementById("female").style.backgroundColor = 'white'
    document.getElementById("male2").style.backgroundColor = 'white'
}
function signup(){
    document.getElementById("bottomsec").style.display='none';
    
}
function signup(){
    document.getElementById("hidesec").style.display='block';
    document.getElementById("signupbtn").style.display='none';
    document.getElementById("signbtn").style.display='none';
}
function cancel(){
    document.getElementById("hidesec").style.display='none';
    document.getElementById("signupbtn").style.display='block';
    document.getElementById("signbtn").style.display='inline';
}

let readMore= document.querySelectorAll('#readMore');

for (const btn of readMore) {
    btn.addEventListener('click',()=>{
        window.location.href = "religion.shadi.com.html";
    });
}