
function welcome() {
    let guestName = document.querySelector("#guest_name");
    let submitButton = document.querySelector("#submit_btn");
    let dynamic = document.querySelector("#dynamic");
    
    
    if(dynamic){ //check if dynamic div exists on the page - to prevent js errors on other pages
    //listen for click event on submit button
    submitButton.addEventListener ("click", function() {
        
                //validation check 
                if (!guestName.value){         
                    document.querySelector("#validation").innerHTML = " Please, enter your name";
                    return false;
                } // storing input from input-form 
                    let pref = document.querySelector("input[name=pref]:checked");
                    localStorage.setItem('guest_name', guestName.value);
                    localStorage.setItem("guest_pref", pref.value);
                    document.location.reload();                        
        });
        greetings();   
    }
}

function hideLinks(){
    let musicNavLink = document.querySelectorAll("#to_music_gallery");
    console.log("link = ",musicNavLink );
    let sportNavLink = document.querySelectorAll("#to_sport_gallery");
    let storedName =  localStorage.getItem("guest_name");
    let storedPref =  localStorage.getItem("guest_pref");
    console.log(storedPref);

    if (!storedName) {
        musicNavLink.forEach(function(element) {
            element.style.display="none";
            });
        sportNavLink.forEach(function(element) {
            element.style.display="none";
            });
    }   else {
            if (storedPref == "music"){
                musicNavLink.forEach(function(element) {
                element.style.display="inline-block";
                });
                sportNavLink.forEach(function(element) {
                    element.style.display="none";
                    });
            } else {
                musicNavLink.forEach(function(element) {
                    element.style.display="none";
                    });
                sportNavLink.forEach(function(element) {
                    element.style.display="inline-block";
                    });
            }
    }
    }



function greetings(){
    let dynamic = document.querySelector("#dynamic");
    let storedName =  localStorage.getItem("guest_name");
    let storedPref =  localStorage.getItem("guest_pref");
    let greetings = document.querySelector("#greetings");
    let greetings2 = document.querySelector("#greetings2");
        
        greetings.innerHTML = "Welcome to <span>" +  storedPref + "</span> gallery, " + "<span>"+ storedName +" </span>!";  
        
        if(dynamic){  //check if dynamic div exists on the page
            greetings2.innerHTML = "Glad to see you " + "<span>"+ storedName +" </span>!<br> I bet you'll enjoy <span>" +
            storedPref + "</span> gallery!";  
            console.log(storedName);
            console.log(storedPref);
        }
  
}

function hideDiv(){  
    let dynamic = document.querySelector("#dynamic");
    let form = document.querySelector("#formDiv");
    let welcomeBackDiv = document.querySelector("#welcomeBackDiv"); 
    let resetDiv = document.querySelector("#resetDiv"); 
    let storedName =  localStorage.getItem("guest_name");
    let greetings = document.querySelector("#greetings");
    
    if (!storedName) {
        greetings.style.display="none";
    }    
        if(dynamic){    //check if dynamic div exists on the page          
            if (!storedName) {
                form.style.display = "inline-block";
                welcomeBackDiv.style.display="none";
                resetDiv.style.display="none";

            }    
            else {
                form.style.display = "none";
                welcomeBackDiv.style.display="inline-block";
                resetDiv.style.display="inline-block";

            }
        }
    }

function reset() {
    let dynamic = document.querySelector("#dynamic");
    let resetButton = document.querySelector("#reset_btn");
  
    if(dynamic){ //check if dynamic div exists on the page
        //listen for click event on reset button
        resetButton.addEventListener ("click", function() {
            localStorage.clear();
            document.location.reload(); 
        });
    }
}
