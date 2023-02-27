//This is to decorate the sections in navbar
(function(){
    const d=document,
        w=window,
        $menu=d.querySelectorAll(".nav-item a");
    
    //This is optional but works to decorate "calculadora"
    
    // w.addEventListener("hashchange", (e)=>{
    //     $menu.forEach(item => {
    //         if(w.location.href.toString().includes(`${item}`)){
    //             $menu[0].classList.remove("active");
    //             item.classList.add("active");
    //         }
    //     })
    // });

    d.addEventListener("DOMContentLoaded", (e)=>{

        $menu.forEach(item => {
            if(w.location.href.toString().includes(`${item}`)&& item.className !== 'greats' ){
                $menu[0].classList.remove("active");
                item.classList.add("active");
            } else if (w.location.href.toString().includes("expand") || w.location.href.toString().includes("list")){
                $menu[0].classList.remove("active");
                if(!$menu[1].classList.toString().includes("list") || !$menu[1].classList.toString().includes("expand")){
                    $menu[1].classList.add("active");
                }
                
            } 
        })
    });
    
})();