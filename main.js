const button = document.getElementById("button")



async function getdata(lat , long ){
    const promice = await fetch(`http://api.weatherapi.com/v1/current.json?key=426d03cd4aa44ae485765248241005 &q=${lat},${long} &aqi=yes
    `)
    return await promice.json()
 }

 async function gotlocation(position){
    const value = await getdata(position.coords.latitude , position.coords.longitude);
    console.log(value)
}




function failedlocation(){
    console.log("There is some issue")
}




button.addEventListener("click", async () =>{
  navigator.geolocation.getCurrentPosition(gotlocation , failedlocation);
})