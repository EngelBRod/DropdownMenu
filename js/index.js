//VARIABLES , SELECTORS
const menuSelector =document.querySelector("#movilMenu")
const dropDownMovil = document.querySelector("#dropMovil")
const menu= document.querySelector("#navigation")
const innerDropDown = document.querySelector("#dropdown")
const fixingSize = document.querySelector("#navigation>li")
const browser = document.documentElement

//EVENT LISTENERS
menuSelector.addEventListener('click',dropMenu)
dropDownMovil.addEventListener('click',dropMovil)
window.addEventListener('resize',resizing)

//FUNCTIONS

//handling main menu
function dropMenu(){    
   
    if(menuSelector.classList.contains('fa-times')){
        
        menu.style.cssText=`height:0%;
                            transition: height 0.25s ease-out`                            

        menuSelector.classList.remove('fa-times');
        menuSelector.classList.add('fa-bars')
    }else{
       
        menu.style.cssText=`height:100%;
                            transition: height 0.25s ease-in;  `        
        menuSelector.classList.remove('fa-bars')
        menuSelector.classList.add('fa-times');
    }
}
//handling sub menu
function dropMovil(){
    if(dropDownMovil.classList.contains('fa-chevron-up')){
        
        innerDropDown.style.cssText=`height:212px;
                            transition: height 0.25s ease-in`
        fixingSize.style.cssText=`height:256px;
                                transition: height 0.25s ease-in`;                    

        dropDownMovil.classList.remove('fa-chevron-up');
        dropDownMovil.classList.add('fa-chevron-down')
    }else{
       
        innerDropDown.style.cssText=`height:0;
                                     transition: height 0.25s ease-out`
        fixingSize.style.cssText=`height:48px;
                                     transition: height 0.25s ease-out`;
        dropDownMovil.classList.remove('fa-chevron-down');
        dropDownMovil.classList.add('fa-chevron-up')
    }
}

//handling resize movil to  desktop view
function resizing(){
    if(window.innerWidth>1024){
        
        fixingSize.style.cssText=`height:48px;`
        innerDropDown.style.cssText=`height:0;`
        if(dropDownMovil.classList.contains('fa-chevron-down')){
            dropDownMovil.classList.remove('fa-chevron-down');
            dropDownMovil.classList.add('fa-chevron-up')
        }else{
            fixingSize.style.cssText=`height:48px;`
        }
        if(menuSelector.classList.contains('fa-times')){
            menuSelector.classList.remove('fa-times');
            menuSelector.classList.add('fa-bars')
            menu.style.cssText=`height:0%;
                                transition: height 0.25s ease-out`
        }
    }
}