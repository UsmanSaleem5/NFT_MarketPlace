let burger=document.getElementsByClassName('burger')[0]
let header=document.getElementsByClassName('navbar')[0]
let ul_list=document.getElementsByClassName('ul-list')[0]
let navBtn=document.getElementsByClassName('nav-btn-sec')[0]

burger.addEventListener("click",()=>{
    header.classList.toggle('h-nav')
setTimeout(() => {
    ul_list.classList.toggle('vl-list')
    navBtn.classList.toggle('vl-list')
}, 300);

})



// burger.addEventListener("click",()=>{
//     if(header.style.height==='400px'){
       
//         header.style.height='100px'
//         ul_list.style.display='none'
//         burger.style.top="30%"
    
// }
// else{
    
//             ul_list.style.display='flex'
//         header.style.height='400px'
//         burger.style.top='8%'
//         setTimeout(() => {
//            ul_list.style.display='flex'
//        }, 2000);
//     }
// })