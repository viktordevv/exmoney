document.addEventListener('keyup',(e)=>{
    const $id = document.querySelector(".curr-search");
    let list=[],
        search="",
        listFiltered=[];
    if(e.target.matches(`.curr-search`)){
        search=$id.value;
        list=Array.from(document.querySelectorAll(".curr-row-element"));        
        listFiltered=list.filter((value)=>value.innerText.match(new RegExp(`${search}`,"i")));
        list.forEach(element=>(!listFiltered.includes(element))
            ?element.style.display='none'
            :element.style.display='flex');
    }
});

(function(){
    const d=document,
        w=window,
        $menu1=d.querySelectorAll(".menu-elements");

    d.addEventListener("DOMContentLoaded", (e)=>{
        if(w.location.href.toString().includes("expand")){
            $menu1[0].classList.remove("active2");
            $menu1[1].classList.add("active2");
        } else if (w.location.href.toString().includes("list")){
            $menu1[1].classList.remove("active2");
            $menu1[0].classList.add("active2");
        }
    });
    
})();