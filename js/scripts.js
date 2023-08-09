window.onload = function(){
    let form = document.querySelector("form");
    form.onsubmit = function(event) {
        event.preventDefault();
    let voteAge = parseInt(document.querySelector("input#age").value);
    console.log(voteAge);
    if (voteAge >= 18) { 
    document.querySelector("div#old").removeAttribute("class");
    document.querySelector("div#young").setAttribute("class", "hidden");
       //voteAge = Element.removeAttribute("class#old");
       //window.alert("You are old enough!");  
    }
    else {
    document.querySelector("div#young").removeAttribute("class");
    document.querySelector("div#old").setAttribute("class", "hidden");
    
     } 
    }
    }
    // function ageVerify() {
    
    // }
//}
//}
//ageVerify();
//ageVerify();