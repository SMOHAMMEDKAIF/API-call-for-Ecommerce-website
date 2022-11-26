// fetch("https://fakestoreapi.com/products")
// .then(function(res){
//     return res.json();
// }).then(function(res){
//     console.log(res);
// }).finally(function(){
//     console.log("great job well done");
// })




// through async await API CALL  is accoured and fetching the eccommerce data and displayed in web-site


let container = document.getElementById("container");

let data;
async function GetData(){
    try{
        let res = await fetch("https://fakestoreapi.com/products")
  
         data = await res.json();
        appendProducts(data);
        console.log(data);
    }catch(err){
        console.log("err:",err)
    }
}

GetData();



function appendProducts(data){

    container.innerText=null;
    data.forEach(function(el){

        let div = document.createElement("div");

        let img = document.createElement("img")

        img.src=el.image

        let title = document.createElement("p")

        title.innerText=el.title;

        let price= document.createElement('p')

        price.innerText=el.price;

        div.append(img, title, price);

        container.append(div)
    });
}



function sortLH(){

    data=data.sort(function(a, b){
        return a.price - b.price;
    })

    appendProducts(data);
}

function sortHL(){

    data=data.sort(function(a, b){
        return b.price - a.price;
    })

    appendProducts(data);
}


function filter(){

    let query = document.getElementById("filter").value;

    let copy_data=data;
    copy_data = copy_data.filter(function(el){
        return el.title.toLowerCase().includes(query);
    });

    appendProducts(copy_data);
}