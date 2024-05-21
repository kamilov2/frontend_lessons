let Place = document.getElementById("place");

window.addEventListener("mousemove",(e)=>{
    console.log(e)
    let color1 = Math.floor(Math.random()*255)
    let color2 = Math.floor(Math.random()*255)
    let color3 = Math.floor(Math.random()*255)
    let size = Math.floor(Math.random()*100)
    let x = e.clientX-(size/2) + "px";
    let y = e.clientY-(size/2) + "px";
    console.log(x,y)

    let rang1 = `rgb(${color1},${color2},${color3})`
    let rang2 = `rgb(${color2},${color3},${color1})`

    Place.innerHTML += `
        <div
        class='circle'
            style="
                width: ${size}px;
                height: ${size}px;
                top:${y};
                position:absolute;
                left:${x};
                
                border-radius: 50%;
                background:radial-gradient(at 20px 20px, ${rang1},${rang2});
            "
        >
        
        </div>
    `
})