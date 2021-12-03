"use strict"
let a = document.querySelector("a");
let input = document.querySelector("input");
let convertApi = ConvertApi.auth({secret: 'qi4OYb8d6uYj9yAK'})
let loader= document.querySelector(".lds-ripple")
let label= document.querySelector(":before")
input.addEventListener("change",convert);

async function convert(e) {

	try{
		if(e.target.files[0]===undefined)return;

		input.setAttribute("disabled","disabled");
		a.style.display="none";
		loader.style.display="inline-block";

		let params = convertApi.createParams();
		params.add('file', e.currentTarget.files[0]);
		let result = await convertApi.convert('docx', 'pdf', params);
		
		a.href=result.files[0].Url;
		a.innerHTML=`Загрузить ${result.files[0].FileName}`;
		loader.style.display="none"
		a.style.display="block";
		input.removeAttribute("disabled");
	}catch(e){
		console.log(e);
	}
}


