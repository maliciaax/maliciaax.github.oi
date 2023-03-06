
/*
	&Product(name, prix)
		ex  d'usage : 
		
			obj = new Product("nom d'exemple", "son prix");
			obj.length; // obtenir le nombre de caractères....
			
 */
function Product(name, prix){
  this.name = name;
  this.prix	= prix;
}

/*
	Appel de fonction  :
		MypopulateTableList(Product Object, "Nom de l'ID du tag à parser");

 */
function MypopulateTableList(Obj, Liste)
{
	//Other type
	let	Arbo			= document.getElementById(Liste);

	// String
	let	buf				= "";
	let	listOfProducts	= '';
	let	visibility		= Arbo.visibility;

	Obj.forEach( (prod) => 
	{
		if ( visibility == undefined || visibility != "visible")
		{
			Arbo.style	= "color: DarkGray;";
			Arbo.visibility	= "visible";
			
			buf	= `
				<li style=""  onclick='MypopulateTableList(${Liste}, "${Liste}")'>${prod.name}</li>
			`;
		}
		else
		{
			Arbo.style	= "";
			Arbo.visibility	= undefined;
			
			buf	= `
				<!--li style="visibility: visible">${prod.name}</li>-->
			`
		};

		listOfProducts	+= buf;
	});

	document.getElementById(Liste).innerHTML	= listOfProducts;
}
