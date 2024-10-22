// ToDolist.js
const listContainer = document.getElementById("list");
function addTask() {
    const inputBox = document.getElementById("input");
    

    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        // Clear the input field after adding a task
    }
    inputBox.value = ''; 
    savedata();
}

// Mark a task as completed (toggle checked/unchecked)
document.getElementById("list").addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();

    }
},false);
function savedata(){
    
    localStorage.setItem("data",listContainer.innerHTML);
}
function showdata(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showdata();


