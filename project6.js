let string="";
let buttons=document.getElementsByClassName("button");
Array.from(buttons).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e) //Here e shows us that which type of event is being done
if(element.innerHTML=='='){      //e.target gives us our tag name
    string=eval(string);          // and e.target.innerhtml gives us our content in that particular tag
    document.querySelector('.input').value=string;
}

else if(element.innerHTML=='C'){
string=''
    document.querySelector('.input').value=string;
}
else{
console.log(element);
string=string+element.innerHTML;
document.querySelector('.input').value=string
}                                  // input is a self closing tag that's why we can't use innerhtml on it and we have to use value
    })
})
