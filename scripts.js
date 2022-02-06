const button = document.getElementById("submit_button");

window.onload = function(){
    if(!document.referrer.includes("paypal")){
        alert("You are not allowed to access this page");
        //document.getElementById("submit_button").disabled = true;
    }
}


button.addEventListener("click",async function(e){
    let email = document.getElementById("mail").value;
    let phone_number = document.getElementById("phoneNumber").value;
    let name = document.getElementById("name").value;

    if(phone_number.length != 10){
        alert("מספר טלפון לא תקין");
        return;
    }

    //RIGHT FORMAT FOR DB
    phone_number = phone_number.substring(1);

    if(email.length == 0 || phone_number.length == 0 || name.length == 0){
        alert("נא למלא את כל השדות");
        return;
    }

    if(!email.includes("@") || !email.includes(".")){
        alert("כתובת מייל לא תקינה");
        return;
    }

    window.location = `http://api.whatsapp.com/send?phone=972502332823&text=%F0%9F%91%8B%F0%9F%91%8B%F0%9F%91%8B`;
    
    let url = `https://botbenda.appspot.com/addUserWeb?phone=${phone_number}&name=${name}&mail=${email}`;
    await fetch((url),{method:"GET"})

    return;
});

