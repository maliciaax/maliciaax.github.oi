function lapins(){
	document.getElementById("body").innerHTML=document.getElementById("body").innerHTML+"<img src=\"lapins.gif\" style=\"position:fixed; z-index:5;\" />"
}

function lapins2() { 
	var img = document.createElement('img'); 
	img.src='lapin.gif'; 
	img.alt='image crée dynamiquement';
	img.style="position: absolute ;object-fit: cover;width: 100%;  height: 100%;  z-index:5; top: 0px; left: 0px;animation-name: example;    animation-duration: 5s;   visibility:hidden;";
	img.class="#header";
	document.getElementById('body').appendChild(img); 
	document.getElementById('bouton').innerHTML = "Voici l'image ajoutée."; 

}

function lapins3(){
	document.getElementById("body").innerHTML=document.getElementById("body").innerHTML+"<img src=\"lapin.gif\" style=\"position: fixed; top: 25%; animation-name: example; animation-duration: 3s; visibility:hidden;\" />"
}
