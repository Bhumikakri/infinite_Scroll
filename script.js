let scrollPart = document.querySelector(".main");
let api = "qrwMD0m7vvD9Az05YJ9EHH2OPndIKLZdVQuQ7TIfZKc"

// ---------------fetch the data here----------------//
async function fetchdata(){
    try {
        let data= await fetch(`https://api.unsplash.com/photos/random/?client_id=${api}&count=27`);
    let result = await data.json();
    // console.log(result);
    createContainer(result);
        
    } catch (error) {
        scrollPart.innerHTML=`<p>some thing error😞!!!</p>`
    }
}

fetchdata();
// -----------create the divs for images---------------------//
function createContainer(datas){

    datas.forEach((item) =>{

    let poster = document.createElement("div");
    poster.classList.add("card");
    poster.innerHTML=`<div class = "forImg"><img src="${item.urls.small}"></div>
    <button class="download"> ⬇ <button>`;

    scrollPart.appendChild(poster);

    let btn = document.querySelector(".download");
    // btn.style.display ="none";
    // poster.addEventListener("mousehover",()=>{
    //     // btn.style.display ="block";
    //     visible(btn);
    // })
    btn.addEventListener('click', function(){
        console.log("new");
        // btn.append(link);
    });


    })
}
// ------------------for scrolling 

window.addEventListener("scroll", ()=>{
    if(window.scrollY + window.innerHeight >= document.body.offsetHeight){
        fetchdata();
    }
})

function visible(btn){
    btn.style.display = "block";
}




// -------------created by bhumi!!!....