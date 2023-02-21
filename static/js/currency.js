

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
