
const AccesKey = "bcU4MQPS27PMcvvx2O7VAI8I1wlHRgr52eu30v49jMM";
let inputData = document.getElementById("input");
let val;
let page=1;
document.getElementById("btn").addEventListener("click", () => {
    page=1;
    document.getElementById("card").innerHTML = '';
    let val = inputData.value;
    inputData.value = ''
    fetchdata(val)
})
async function fetchdata(val) {
    let req = await fetch(`https://api.unsplash.com/search/photos?query=${val}&client_id=${AccesKey}&page=${page}`);
    let res = await req.json();
    displaydata(res);
}

function displaydata(res) {
    res.results.map(data => {

        let div = document.createElement('div');
        div.setAttribute("class", "box");

        div.innerHTML = ` <img src=${data.urls.regular} alt="">
                        <div class="info"><h4>${data.alt_description}</h4></div>`
        document.getElementById("card").appendChild(div);
    })
    // add class to loadbtn
    document.getElementById('loadbtn').classList.add('visible');
}

document.getElementById("loadbtn").addEventListener("click",()=>{
    console.log("clicked");
        fetchdata(val);
        page++;
    })



