window.addEventListener("scroll",()=>{
    document.querySelector("nav").classList.toggle("window__scroll",window.scrollY>40)
})
const btn =document.querySelector(".button");
const menu=document.querySelector(".nav__menu");
const link =document.querySelectorAll(".links");
const questions=document.querySelectorAll(".question");
const  plus =document.getElementById("plus")


btn.addEventListener("click",()=>{
    menu.classList.toggle("active")
    btn.classList.toggle("active")

})
link.forEach((l)=>{
    l.addEventListener("click",()=>{
        menu.classList.remove("active")
        btn.classList.remove("active")
    })
})


questions.forEach((qst)=>{qst.addEventListener("click",()=>{
    qst.classList.toggle("open")
})
})

