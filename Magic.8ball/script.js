element.addEventListener("click", answer);


function answer() {
    var things = ['No', 'Yes', "I don't think so","Of course!","Indubitably","In your dreams",];
    var thing = things[Math.floor(Math.random()*things.length)];
    alert('The computer chose: ' + thing);
    
 }
