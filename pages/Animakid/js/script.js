let burger=document.getElementsByClassName('burger')[0]
let header=document.getElementsByClassName('navbar')[0]
let ul_list=document.getElementsByClassName('ul-list')[0]
let navBtn=document.getElementsByClassName('nav-btn-sec')[0]

burger.addEventListener("click",()=>{
    header.classList.toggle('h-nav')
    ul_list.classList.toggle('vl-list')
    navBtn.classList.toggle('vl-list')


})




