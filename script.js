


// NUOVO FILE JAVASCRIPT

// ESERCIZO

//___________________________________________________________________________________________________________________________________

let containerEl = document.getElementById("container");


for (let i = 1; i <= 100; i++) {
    

    let newEl = document.createElement("div");

    if ( i % 3 == 0 ) {

        newEl.innerText = "Fizz";
        newEl.classList.add("fizz");
    
    }

    if ( i % 5 == 0 ) {
        newEl.innerText += "Buzz";
        newEl.classList.add("buzz");
    
    }


    if(!newEl.innerText) {
        
        newEl.innerText = i;
    
    }

    containerEl.append(newEl);

}
