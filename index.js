var siteNameInput = document.getElementById("siteNameInput");
var siteUrlInput = document.getElementById("siteUrlInput");
var bookMarker = [];

if(localStorage.getItem("sites") != null){

    bookMarker = JSON.parse(localStorage.getItem("sites"));
    displaySites()
}


function submit(){
var site = {
Name :siteNameInput.value,
Url :siteUrlInput.value,
};
bookMarker.push(site);
localStorage.setItem("sites",JSON.stringify(bookMarker))
displaySites()
}


function displaySites(){
var cartona=``;
for( var i=0 ; i<bookMarker.length ; i++){
    cartona+=`
   <tr>
   <td class="fw-bolder">${bookMarker[i].Name}</td>
   <td><button  class="btn btn-outline-info"><a href="https://${bookMarker[i].Url}"
   class="text-decoration-none ">Visit</a></button></td>
   <td><button onclick="deleteSite(${i})" class="btn btn-outline-danger">Delete</button></td>
   </tr>`

}

document.getElementById("displayTable").innerHTML=cartona;
}





function deleteSite(deleteIndex){
    bookMarker.splice(deleteIndex,1);
localStorage.setItem("sites",JSON.stringify(bookMarker));

    displaySites()

}


