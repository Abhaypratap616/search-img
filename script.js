const accesskey = "T2yNfkX_2gX1WjQCXZtgb8R0R5lOcFK-MnRmeIPHL8M"
const searchform = document.querySelector(".searchfunction");
 const input = document.querySelector('.input-textarea');
 const searchforminput = document.querySelector('.searchresult');
const searchformbutton = document.querySelector('.downbtn');

let searchplace = "";
let page =1;

 async function searchvalue(){
    searchplace = input.value ;
    console.log(searchvalue);
     const url = `https://api.unslpash.com/search/photos?page=${page}&query=${searchplace}&client_id=${accesskey}`
     const data = await fetch(url);
     const result = await data.json();
   console.log(result);
 

 if(page===1){
   searchforminput.innerHTML = "";
 }

 result.map((yourdata)=>{
   const imgwrapper = document.createElement('div');
   imgwrapper.classList.add('search');
   const img = document.createElement('img');
   img.src = yourdata.urls.small;
   img.alt = yourdata.alt_description;
   const imgheadinglink = document.createElement('a');
   imgheadinglink.href = result.links.html;
   
   

    imgwrapper.appendChild(img);
    imgwrapper.appendChild(imgheading);
    imgwrapper.appendChild(imgwrapper);
 })
 page++;
 if(page>1){
   searchformbutton.style.display = "block";
 }
}

searchform.addEventListener('submit',(e)=>{
   e.preventDefault();
   searchvalue();
})

searchformbutton.addEventListener('click',()=>{
   searchvalue();
})
