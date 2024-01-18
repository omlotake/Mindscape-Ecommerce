/*const product =[
    {
        image:'https://t3.ftcdn.net/jpg/01/21/81/86/360_F_121818673_6EID5iF76VCCc4aGOLJkd94Phnggre3o.jpg',
        title:'Air Shoes',
        price: 120
    },
    {
        image:'image/gg-1.jpg',
        title:'Air Shoes',
        price: 120
    },
    {
        image:'image/gg-1.jpg',
        title:'Air Shoes',
        price: 120
    },
    {
        image:'image/gg-1.jpg',
        title:'Air Shoes',
        price: 120
    }
]

const categories = [...new setInterval(product.map((item)=> {return item}))];

function displaycart(){
    let j=0;
    if(categories.length==0){
        document.getElementById("root").innerHTML="Your cart is empty";
    }
    else{
        document.getElementById("root").innerHTML = categories.map((items)=>{
            let {image, title, price} = items;
            return(
                `<tr>
                <td width="150"><div class="img-box"><img class="img" src=${image}></div></td>
                <td width="360"><p style='font-size:15px;'></p></td>
                <td width="150"><h2 style='font-size:15px; color:red; '>$ ${price}.00</h2></td>
                <td width="70">`+"<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></td>"+
                `</tr>`
            );
        }).join('');
    }
}
displaycart();*/