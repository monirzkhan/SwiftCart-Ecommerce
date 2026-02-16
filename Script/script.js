const loadTrendingProducts=async()=>{
    const url='https://fakestoreapi.com/products';

    const res= await fetch (url);
    const data= await res.json();
    displayTrendingProducts(data);
    
}


// {
//     "id": 20,
//     "title": "DANVOUY Womens T Shirt Casual Cotton Short",
//     "price": 12.99,
//     "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
//     "category": "women's clothing",
//     "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
//     "rating": {
//         "rate": 3.6,
//         "count": 145
//     }
// }
const displayTrendingProducts=(products)=>{
     const productTrendingContainer=document.getElementById('trending-container');
    productTrendingContainer.innerHTML="";
    
    products.forEach(product => {
    console.log(product);

    const trendingCard=document.createElement('div');
    trendingCard.innerHTML=`
    
<div class="">

<div class="card bg-base-100 w-96 h-96 shadow-sm ">
        <figure>
        <img
      src="${product.image}"
      class="h-full" alt="Shoes" />
      
        </figure>
        <div>
        <div class="py-2 px-4 flex justify-between">
            <div>
                <a class="btn bg-blue-100 rounded-full text-blue-600 ">${product.category}</a>
            </div>
             <div>
            <span class="text-yellow-500"><i class="fa-solid fa-star"></i></span>
            <span>3${product.rating.rate}</span>
            <span>(${product.rating.count})</span>
        </div>
        </div>
       
      </div>
        <div class="card-body">
         <h2 class="card-title">
         ${product.title}
            </h2>
        <p class="text-bold text-2xl text-left">$ ${product.price}</p>
        <div class="card-actions justify-between">
        <div class="btn btn-active py-4 w-5/12 rounded-lg"><i class="fa-regular fa-eye"></i>Details</div>
        <div class="btn btn-active btn-primary w-5/12 rounded-lg"><i class="fa-solid fa-cart-shopping"></i>Add</div>
        </div>
        </div>
        </div>

</div>

    `
    productTrendingContainer.append(trendingCard);
        
    });
    
}
loadTrendingProducts();