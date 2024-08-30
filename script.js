const imgArray=[
    {url: "./images/Mask group (1).png",},
    {url: "./images/Mask group (2).png",},
    {url: "./images/Mask group (3).png",},
    
];
const imgArray2=[
    {url: "./images/Mask group (4).png",},
    {url: "./images/Mask group (5).png",},
    {url: "./images/Mask group (6).png",},
    
];

const recipe=[
{name: "Gyro Sandwhich",},
{name: "Enchilade",},
{name: "Green Beans",},

];
const recipe2=[
{name: "Pizza",},
{name: "Chicken Pot Pie",},
{name: "Green Salad",},
];



function moreItems(){
        const menu= document.getElementById("cards");
   
    for (const element of imgArray) {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.innerHTML=` <div class="card-img">
                            <img src="${element.url}" alt="">
                        </div>`
                       
        console.log(cardDiv);
        menu.appendChild(cardDiv);                   
        
    }
    
    for (const item of recipe) {
        const cardbtmDiv = document.createElement("div");
        cardbtmDiv.classList.add("card-bottom");
        cardbtmDiv.innerHTML=`<div class="card-text">
                                <h4>${item.name}</h4>
                                <button class="addtocart">Add To Cart</button>
                            </div>
                            <div class="card-rigt">
                                <i class="fa-solid fa-star" style="color:#F48E28 ;"></i>
                               <span>4.9</span>
                               <p>$15.00</p>

                            </div>` 
        menu.appendChild(cardbtmDiv);} 
        for (const element2 of imgArray2) {
            const cardDiv2 = document.createElement("div");
            cardDiv2.classList.add("card");
            cardDiv2.innerHTML=` <div class="card-img">
                                <img src="${element2.url}" alt="">
                            </div>`
                           
            console.log(cardDiv2);
            menu.appendChild(cardDiv2);                   
            
        }
        for (const item2 of recipe2) {
            const cardbtmDiv2 = document.createElement("div");
            cardbtmDiv2.classList.add("card-bottom");
            cardbtmDiv2.innerHTML=`<div class="card-text">
                                    <h4>${item2.name}</h4>
                                    <button class="addtocart">Add To Cart</button>
                                </div>
                                <div class="card-rigt">
                                    <i class="fa-solid fa-star" style="color:#F48E28 ;"></i>
                                   <span>4.9</span>
                                   <p>$15.00</p>
    
                                </div>` 
            menu.appendChild(cardbtmDiv2);
        
    }
        
    }




// console.log(imgArray);
// console.log(imgArray[0]);
// console.log(imgArray[1].url);



// function getmail(event){
   
//     console.log("vcmmx");
//     console.log(event);
// }
