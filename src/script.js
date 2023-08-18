let header = document.getElementById("header")

window.addEventListener("scroll",() => {
    if(window.scrollY > 100){
        header.style.backgroundColor = "#fafafa";
        header.style.padding = "1rem 4rem";
    }
    else{
        header.style.backgroundColor = "transparent";
        header.style.padding = "2rem 4rem";
    }
})

// let btnclose = document.getElementById("btn-close");
// let navheader = document.getElementById("nav-header");

// btnclose.addEventListener("click",() => {
//     navheader.style.display = "flex";
// })