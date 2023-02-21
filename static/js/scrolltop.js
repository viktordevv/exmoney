(function(){
    const d=document,
        button = ".scrollTop-button",
        limit=350;
    d.addEventListener("scroll", (e)=>{
        if(window.scrollY>limit){
            d.querySelector(button).style.display="flex";
        } else {
            d.querySelector(button).style.display="none";
        }
    });
    d.addEventListener("click",(e)=>{
        if(e.target.matches(button)){
            window.scrollTo(0,0);
        }
    });
})();