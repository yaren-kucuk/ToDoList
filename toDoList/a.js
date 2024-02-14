const kutu=document.querySelectorAll('button')

console.log(kutu)

kutu.forEach(button=>{
    button.originalColor=window.getComputedStyle(button).color

    button.addEventListener('click',e=>{
        if( e.target.style.color!=='blueviolet'){
             e.target.style.color='blueviolet'
        }
        else{
            e.target.style.color=e.target.originalColor
        }
       
    })
})

/*const renkDegistir=()=>{
 
kutu.style.backgroundColor="pink"
}*/
