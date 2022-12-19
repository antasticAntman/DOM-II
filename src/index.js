import './less/index.less'

// Your code goes here!
console.log('coding is a pain sometimes');

 window.onload = function (evt){
    console.log(`event ${evt.type} has fired. It has finished`);
    const heading = document.querySelector('h1')
    heading.textContent = 'Lets go'
    
    
    
    window.addEventListener('copy', () =>{
        navigator.clipboard.readText()
        .then(text =>{
            heading.textContent += text
        })
     })
     window.addEventListener('click', ()=>{
        const subHead = document.querySelector('h2')
        subHead.classList.add('off')
        subHead.style.fontFamily='italic'
        console.log(subHead)
     })
     window.addEventListener('dblclick', ()=>{
        const subHead = document.querySelector('h2')
        subHead.classList.remove('off')
        subHead.style.fontFamily = 'sans-serif'
     })
     window.addEventListener('keydown', evt => {
        if(evt.key === 'Escape'){
            document.body.innerHTML = 'YOU HAVE CALLED ORDER 66'
        }
     })
    //  Annoying one
    document.body.addEventListener('mousemove', evt => {
        const {clientx, xlienty} = evt
        // console.log(evt)
    })

    const destinations = document.querySelectorAll('.destination')
    console.log(destinations)
    for(let destination of destinations){
        destination.addEventListener('mouseenter', evt =>{
            destination.style.fontWeight = 'bold'
        })
        destination.addEventListener('mouseleave', evt =>{
            destination.style.fontWeight = 'intial'
        })
    }
}
