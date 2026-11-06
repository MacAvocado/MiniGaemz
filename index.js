var canvas = select("#defaultCanvas0")

//P5 setup() bliver kaldt EN gang før siden vises 
function setup(){
}

function startTtT(){
    shiftPage("#page2")
    select("#page2").appendChild(canvas)
    while(i<20000){
        draw()

        i++
    }
}

