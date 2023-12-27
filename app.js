let input=document.querySelector("input");
let btn=document.querySelector("button");
let ol=document.querySelector("ol");

btn.addEventListener("click",function(){
    let newli=document.createElement("li");
    newli.innerText=input.value;
    ol.appendChild(newli);
    let del=document.createElement("button");
    del.innerText="Delete";
    del.classList.add("delete");
  
    newli.appendChild(del);
    input.value="";
    
});

// Event Delegation
ol.addEventListener("click",function(event){      
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
    }
})