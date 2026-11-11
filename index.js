var canvas = select("#defaultCanvas0")
var timeInGame =21000

//P5 setup() bliver kaldt EN gang før siden vises 
function setup(){
    setTimeout(()=>{
        select('#splash').addClass('rulletOp')
    },5000)

}

function draw(){
    if(currentPage){

    }
}

function startCaK(){
    shiftPage("#page2")
    select("#page2").appendChild(canvas)
    while(i<timeInGame){
        
        i++
    }
}

