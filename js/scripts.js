// JavaScript Document
window.onload=function getLocation() {
    fetch("https://extreme-ip-lookup.com/json/")
    .then( res => res.json())
    .then(response => {
        console.log("Country: ", response.country);
        console.log("City: ", response.city);
        document.querySelector(".location_layout_loc").innerHTML=response.city+", "+response.region;
    })
    .catch((data, status) => {
        console.log("Request failed");
        document.querySelector(".location_layout_loc").innerHTML="Please disable AdBlockers"
    })
    //return ""+response.city+", "+response.country;
    
}