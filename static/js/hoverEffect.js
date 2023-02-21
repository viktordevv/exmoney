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
            if(w.location.href.toString().includes(`${item}`)){
                $menu[0].classList.remove("active");
                item.classList.add("active");
            }
        })
    });
    
})();