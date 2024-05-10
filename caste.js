let links = document.querySelectorAll('.link');
let NavBar = document.querySelector('#main');
console.log(NavBar)

for (const link of links) {
    link.addEventListener('mouseover',()=>{
    link.setAttribute('style','background-color: rgb(119, 119, 119); color: white; padding: 15px 0px; border-bottom: solid 1px red');
});
link.addEventListener('mouseout', ()=>{
    link.setAttribute('style','');
    
});
}

