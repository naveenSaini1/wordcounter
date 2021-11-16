// submeuny javascript 
let otherTool=document.querySelector('.submenus-li');
otherTool.addEventListener('click',function(){
    let submenus=document.querySelector('.submenus');
    if(submenus.style.display=='none'){
        submenus.style.display='block';

    }
    else{
        submenus.style.display='none';
    }
})


// toglle menu bar 
let toggleButton=document.querySelector('.toglle');

toggleButton.addEventListener('click',function(){
    let menus=document.querySelector('.menus');
    if( menus.style.height=='200px'){
    menus.style.height='7px';
        console.log('hello');
    }
    else{
        menus.style.height='200px'  
        console.log('helloi');
    }
})

// manupalte the dom 
let textarea=document.getElementById('textarea');
textarea.addEventListener('input',function(){
    let spanOne=document.getElementsByClassName('span')[0];
    let spanTwo=document.getElementsByClassName('span')[1];
    let word=textarea.value.split(' ').length;
    spanOne.innerHTML=word;
    spanTwo.innerHTML=textarea.value.length;
    let total='';
    for(let i=0;i<textarea.value.length;i++){
        if(textarea.value[i]==' '){
            // textarea.value[i]='#';
            continue;    
        }
        else{
            console.log(total);
        total+=textarea.value[i];
        }
        
    }
})

// submenus throgh changing 
let storValue=document.getElementsByTagName('section')[0];
let ajax=document.getElementById('ajax');
ajax.addEventListener('click',function(){
    let xhl=new XMLHttpRequest()
    xhl.open('GET','spaceremover.txt',true)
    xhl.onprogress=function(){
        console.log('going');
    }
    xhl.onload=function(){
        if(xhl.readyState==4){
            storValue.innerHTML=xhl.responseText;

        }
    }
    xhl.send();
})

// space remover javascript 
// let textareaOne=document.getElementById('textareaOne');
