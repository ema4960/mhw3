
let buttonLogin = document.querySelector("#login_button");
buttonLogin.addEventListener("click", onClickLogin);
let start =true;

let city = document.querySelector("#city");
city.addEventListener("blur",changeCity);
changeCity();

function changeCity(){
    let inputcity = document.querySelector("#city").value;
    let city= inputcity;
    console.log("ciao");
    fetch("https://api.weatherstack.com/current?access_key=&query="+city+"&unit=m").then(response => response.json()).then(json => {
        temp=document.querySelector("#temp");
        temp.innerHTML =json.current.feelslike+"°C in "+json.location.name;
    }); 
}


fetch("http://data.fixer.io/api/latest?access_key=").then(response => response.json()).then(json => {
    footerSocial=document.querySelector("#social");
    nuovoParagrafo = document.createElement("p");
    nuovoParagrafo.innerHTML ="quote di conversione giornaliere:<br>EUR 1 in AUD "+json.rates.AUD+"<br>EUR 1 in USD "+json.rates.USD+"<br>EUR 1 in GBP "+json.rates.USD;

    footerSocial.appendChild(nuovoParagrafo);
})




function onJson(json){
    console.log(json);
}

function onClickLogin(){
    let loginds = document.querySelector("#loginds");
    loginds.classList.remove("displayNone");
    loginds.classList.add("displayBlock");
    if(start){
        let body = document.querySelector("body");
        let elemento = document.createElement("div");
        elemento.setAttribute("id","shadow");
        body.appendChild(elemento);
        start=false;
    }else{
        let shadow = document.querySelector("#shadow")
        shadow.classList.remove("displayNone");
        shadow.classList.add("displayFixed");
    }

    
}

let closeLogin = document.querySelector("#closeLogin");
closeLogin.addEventListener("click", onClickCloseLogin);

function onClickCloseLogin(){
    let loginds = document.querySelector("#loginds");
    loginds.classList.remove("displayBlock");
    loginds.classList.add("displayNone");
    let shadow = document.querySelector("#shadow")
    shadow.classList.remove("displayFixed");
    shadow.classList.add("displayNone");
}

let button1 = document.querySelector("#button1");
let img1 = document.querySelector("#img1");
button1.addEventListener("mouseover", onMouseOverBt1);
button1.addEventListener("mouseleave", onMouseLeaveBt1);
button1.addEventListener("click", onClickBt1);
triggered1=false;

let button2 = document.querySelector("#button2");
let img2 = document.querySelector("#img2");
button2.addEventListener("mouseover", onMouseOverBt2);
button2.addEventListener("mouseleave", onMouseLeaveBt2);
button2.addEventListener("click", onClickBt2);
triggered2=false;

let button3 = document.querySelector("#button3");
let img3 = document.querySelector("#img3");
button3.addEventListener("mouseover", onMouseOverBt3);
button3.addEventListener("mouseleave", onMouseLeaveBt3);
button3.addEventListener("click", onClickBt3);
triggered3=false;

let button4 = document.querySelector("#button4");
let img4 = document.querySelector("#img4");
button4.addEventListener("mouseover", onMouseOverBt4);
button4.addEventListener("mouseleave", onMouseLeaveBt4);
button4.addEventListener("click", onClickBt4);
triggered4=false;



function onMouseOverBt1 (){
    if(triggered1!=true){
            img1.src = "scorri-giù.png";
            triggered1 = true;
    }
}

function onMouseLeaveBt1 (){
    if(triggered1){
        if(img1.getAttribute("src") === "scorri-giù.png"){
            img1.src = "scorri-giù-white.png";
            triggered1 = false
        }
    }
    
    
}

function onClickBt1 (){
    if(img1.getAttribute("src") === "scorri-giù.png"){
        img1.src = "scorri-su.png";
        button1.classList.add("headerbtClicked");
        button2.classList.remove("headerbtClicked");
        button3.classList.remove("headerbtClicked");
        button4.classList.remove("headerbtClicked");
        img2.src = "scorri-giù-white.png";
        img3.src = "scorri-giù-white.png";
        img4.src = "scorri-giù-white.png";
        triggered2 = false
        triggered3 = false
        triggered4 = false
    }else{
        img1.src = "scorri-giù.png";
        button1.classList.remove("headerbtClicked");
    }

}




function onMouseOverBt2 (){
    if(triggered2!=true){
            img2.src = "scorri-giù.png";
            triggered2 = true;
    }
}

function onMouseLeaveBt2 (){
    if(triggered2){
        if(img2.getAttribute("src") === "scorri-giù.png"){
            img2.src = "scorri-giù-white.png";
            triggered2 = false
        }
    }
    
    
}

function onClickBt2 (){
    if(img2.getAttribute("src") === "scorri-giù.png"){
        img2.src = "scorri-su.png";
        button2.classList.add("headerbtClicked");
        button1.classList.remove("headerbtClicked");
        button3.classList.remove("headerbtClicked");
        button4.classList.remove("headerbtClicked");
        img1.src = "scorri-giù-white.png";
        img3.src = "scorri-giù-white.png";
        img4.src = "scorri-giù-white.png";
        triggered1 = false
        triggered3 = false
        triggered4 = false
    }else{
        img2.src = "scorri-giù.png";
        button2.classList.remove("headerbtClicked");
    }
}


function onMouseOverBt3 (){
    if(triggered3!=true){
            img3.src = "scorri-giù.png";
            triggered3 = true;
    }
}

function onMouseLeaveBt3 (){
    if(triggered3){
        if(img3.getAttribute("src") === "scorri-giù.png"){
            img3.src = "scorri-giù-white.png";
            triggered3 = false
        }
    }
    
    
}

function onClickBt3 (){
    if(img3.getAttribute("src") === "scorri-giù.png"){
        img3.src = "scorri-su.png";
        button3.classList.add("headerbtClicked");
        button1.classList.remove("headerbtClicked");
        button2.classList.remove("headerbtClicked");
        button4.classList.remove("headerbtClicked");
        img1.src = "scorri-giù-white.png";
        img2.src = "scorri-giù-white.png";
        img4.src = "scorri-giù-white.png";
        triggered1 = false
        triggered2 = false
        triggered4 = false
    }else{
        img3.src = "scorri-giù.png";
        button3.classList.remove("headerbtClicked");
    }
}






function onMouseOverBt4 (){
    if(triggered4!=true){
            img4.src = "scorri-giù.png";
            triggered4 = true;
    }
}

function onMouseLeaveBt4 (){
    if(triggered4){
        if(img4.getAttribute("src") === "scorri-giù.png"){
            img4.src = "scorri-giù-white.png";
            triggered4 = false
        }
    }
    
    
}

function onClickBt4 (){
    if(img4.getAttribute("src") === "scorri-giù.png"){
        img4.src = "scorri-su.png";
        button4.classList.add("headerbtClicked");
        button1.classList.remove("headerbtClicked");
        button2.classList.remove("headerbtClicked");
        button3.classList.remove("headerbtClicked");
        img1.src = "scorri-giù-white.png";
        img2.src = "scorri-giù-white.png";
        img3.src = "scorri-giù-white.png";
        triggered1 = false
        triggered2 = false
        triggered3 = false
    }else{
        img4.src = "scorri-giù.png";
        button4.classList.remove("headerbtClicked");
    }
}

