let taskList=[];

const addItem=()=>{
    let task=document.getElementById("todoInput").value;
    let ul=document.getElementById("myUl");
    if(task.trim().length===0){
        return false;
    }else{
        if(taskList.length<5){
            taskList.push(task);
            let li=document.createElement("li");
            let text=document.createTextNode(task);
            li.appendChild(text);
            let checkMark=document.createElement("button");
            checkMark.innerHTML="&check;";
            checkMark.className="listItemButton";
            checkMark.setAttribute("onclick","checkMe(this)");
            li.appendChild(checkMark);
            let crossMark=document.createElement("button");
            crossMark.innerHTML="&#x2715";
            crossMark.className="listItemButton";
            crossMark.setAttribute("onclick","removeMe(this)");
            li.appendChild(crossMark);
            
            ul.appendChild(li);
            reset();
        }
    }
}

const reset =()=>{
    document.getElementById("todoInput").value="";
}

const checkMe =(item)=>{
    const liTag =item.parentElement;
    liTag.style.textDecoration=(liTag.style.textDecoration==="line-through")? "none" :"line-through"
}

const removeMe =(item)=>{
    let liTag =item.parentElement;
    let ulTag =liTag.parentElement;
    ulTag.removeChild(liTag);
    taskList.pop()
}

const enterKey =(item)=>{
    let input=document.getElementById("todoInput");
    input.onkeyup=(key)=>{
        if(key.keyCode===13){
            addItem();
        }
    }
}

enterKey();

const clearList =()=>{
    let ul=document.getElementById("myUl");
    ul.innerHTML="";
    taskList.splice(0,taskList.length);
}