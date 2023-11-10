const button=document.querySelector("button");
const inputs=document.querySelectorAll("input");

const red=document.querySelector("input:first-child");
const green=document.querySelector("input:nth-child(2)");
const blue=document.querySelector("input:last-of-type");
const circle=document.querySelector(".circle");

inputs.forEach(inp => {
    inp.addEventListener("input", () =>{
        circle.style.backgroundColor=`rgb(${red.value}, ${green.value}, ${blue.value})`;
    })
})

/*
input.onclick=(event)=>{
    const red=document.querySelector("input:first-child");
    const green=document.querySelector("input:nth-child(2)");
    const blue=document.querySelector("input:last-of-type");
    const circle=document.querySelector(".circle");

    circle.style.backgroundColor=`rgb(${red.value}, ${green.value}, ${blue.value})`;
}*/