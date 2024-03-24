const checkList=document.querySelectorAll(".line .check");
const inputList=document.querySelectorAll(".line input")
const err=document.querySelector(".error-line")
const progress=document.querySelector(".progress-bar .progress")

allQuotes=[
    "Raise the bar by completing your goal!",
    "Well begun is half done!",
    "Just a step away, keep going!",
    "Whoa! You just completed all the goals, time for chill :D"
]

const inputs=JSON.parse(localStorage.getItem("globaldata")) || {}
let inputFilled=false;
let checked=0;
let count=0


checkList.forEach((check)=>{

    if(inputs[check.nextElementSibling.id]){
        if(inputs[check.nextElementSibling.id].completed === true){
            check.classList.add("completed")
            check.nextElementSibling.classList.add("task-completed");
            count++;
        }

        progress.parentElement.previousElementSibling.innerText = allQuotes[count];
        progress.parentElement.nextElementSibling.children[0].innerText=`${inputList.length}`
        progress.style.width=`${count/inputList.length*100}%`
        progress.children[0].innerText = `${count} / ${inputList.length} Completed`;
    }

    check.addEventListener("click",()=>{
        inputFilled=[...inputList].every((input)=>{
            return input.value;
        })

        if(inputFilled){
            check.classList.toggle("completed")
            check.nextElementSibling.classList.toggle("task-completed")
        } else{
            err.style.display="block"
            return;
        }

        checked=[...checkList].filter((check)=>{
            return check.classList.contains('completed');
        })

        
        inputs[check.nextElementSibling.id].completed=false;
        checked.forEach((checks)=>{
            inputs[checks.nextElementSibling.id].completed = true;
        })
        localStorage.setItem("globaldata",JSON.stringify(inputs));


        progress.parentElement.previousElementSibling.innerText=allQuotes[checked.length]
        progress.style.width=`${checked.length / inputList.length *100}%`;
        progress.children[0].innerText = `${checked.length} / ${inputList.length} Completed`
    })
})

inputList.forEach((input)=>{

    if(inputs[input.id]){
        if(inputs[input.id].value){
            input.value = inputs[input.id].value
        }
    }

    input.addEventListener("focus",(e)=>{

        err.style.display = "none";

        if(input.classList.contains("task-completed")){   
            input.blur();
        } 
    })

    input.addEventListener("input",()=>{
        inputs[input.id] = {
            value: input.value,
            completed: false
        }

        localStorage.setItem('globaldata', JSON.stringify(inputs))
        
    })
})