



const loadCategoriesButton=()=>{
    const url='https://fakestoreapi.com/products/categories';
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayCategoriesButton(data))
}

const manageSpinner=(status)=>{
    
    if(status==true){
    document.getElementById('spinner').classList.remove('hidden');
    document.getElementById("products-container").classList.add('hidden');

    }
    else{
    document.getElementById('spinner').classList.add('hidden');
    document.getElementById("products-container").classList.remove('hidden'); 
    }
}


const removeActive=()=>{
    const categoryBtn=document.querySelectorAll('.category-btn');
    categoryBtn.forEach(btn=>btn.classList.remove('active'));
    
}
const truncateText = (text, limit = 30) => {
  return text.length > limit
    ? text.slice(0, limit) + "..."
    : text;
};

const loadByCategory=async(id)=>{
 manageSpinner(true);
 const url=`https://fakestoreapi.com/products/category/${encodeURIComponent(id)}`;
 const res= await fetch(url);
 const data= await res.json();
 displayAllProducts(data)
 
}

const displayCategoriesButton=(categories)=>{
const categoriesContainer=document.getElementById('product-categories');

    categoriesContainer.innerHTML = `
    <button class="btn py-4 bg-white shadow-sm rounded-lg category-btn active" id="all-btn">All </button>
`;

    document.getElementById("all-btn").addEventListener("click", () => {
    removeActive();
    document.getElementById("all-btn").classList.add("active");
    loadAllProducts();
    
});

categories.forEach(category=>{
const btn = document.createElement('button');
    btn.className = "btn py-4 bg-white shadow-sm rounded-lg category-btn";
    btn.textContent = category[0].toUpperCase() + category.slice(1);
    btn.dataset.category = category;
    btn.id=`categoryButton-${category.replace(/[^a-z0-9]/gi, "")}`;
    
    btn.addEventListener("click", () => {
      loadByCategory(category);
      removeActive();
      btn.classList.add('active');
      
    });

    categoriesContainer.appendChild(btn);
})

}
loadCategoriesButton()

// ----------------------------------
const loadAllProducts=async()=>{
    const url='https://fakestoreapi.com/products';

    const res= await fetch (url);
    const data= await res.json();
    displayAllProducts(data);   
}


const loadProductDetails=async(id)=>{
    const url=`https://fakestoreapi.com/products/${id}`;
    const res= await fetch(url);
    const data= await res.json();
    displayProductDetails(data);
}

const displayProductDetails=(product)=>{
    const detailsContainer=document.getElementById('details-container');
    detailsContainer.innerHTML=`
    <div class="card bg-base-100 w-96 py-2 shadow-lg ">
    
        <div>
        <div class="py-2 px-4 flex justify-between">
            <div>
                <a class="btn bg-blue-100 rounded-full text-blue-600 ">${product.category}</a>
            </div>
             <div>
            <span class="text-yellow-500"><i class="fa-solid fa-star"></i></span>
            <span>${product.rating.rate}</span>
            <span>(${product.rating.count})</span>
        </div>
        </div>
       
      </div>
        <div class="card-body">
         <h2 class="card-title">
         ${product.title}
            </h2>
             <h3 class="font-semibold ">
         ${product.description}
            </h3>
        <p class="text-bold text-2xl text-left">$ ${product.price}</p>
        <div class="card-actions justify-between">
        <div class="btn btn-active py-4 w-5/12 rounded-lg"><i class="fa-solid fa-bag-shopping"></i>Buy Now</div>
        <div class="btn btn-active btn-primary w-5/12 rounded-lg"><i class="fa-solid fa-cart-shopping"></i>Add To Cart</div>
        </div>
        </div>
        </div>

    `;
    document.getElementById('product_modal').showModal();
   
    
}
const displayAllProducts=(products)=>{
    
    const productsContainer=document.getElementById('products-container');
    productsContainer.innerHTML='';
    
    products.forEach(product => {

    const productCard=document.createElement('div');
    productCard.innerHTML=`
    
<div class="">

<div class="card bg-base-100 w-96 h-[420px] shadow-lg ">
        <figure class="bg-gray-300 h-96">
        <img src="${product.image}" class="h-full py-4"/>
      </figure>
      
        <div>
        <div class="py-2 px-4 flex justify-between">
            <div>
                <a class="btn bg-blue-100 rounded-full text-[#422ad5] ">${product.category}</a>
            </div>
             <div>
            <span class="text-yellow-500"><i class="fa-solid fa-star"></i></span>
            <span>${product.rating.rate}</span>
            <span>(${product.rating.count})</span>
        </div>
        </div>
       
      </div>
        <div class="card-body">
         <h2 class="card-title">
         ${truncateText(product.title, 30)}
            </h2>
        <p class="text-bold text-2xl text-left">$ ${product.price}</p>
        <div class="card-actions justify-between">
        <div onclick="loadProductDetails(${product.id})" class="btn btn-active py-4 w-5/12 rounded-lg"><i class="fa-regular fa-eye"></i>Details</div>
        <div class="btn btn-active btn-primary w-5/12 rounded-lg"><i class="fa-solid fa-cart-shopping"></i>Add</div>
        </div>
        </div>
        </div>

</div>

    `
    
    productsContainer.append(productCard);
     
    });
    manageSpinner(false)
}
loadAllProducts();


// ----------------------------------------
const loadTrendingProducts=async()=>{
    const url='https://fakestoreapi.com/products';

    const res= await fetch (url);
    const data= await res.json();
    displayTrendingProducts(data);
    
}

const displayTrendingProducts=(products)=>{
     const productTrendingContainer=document.getElementById('trending-container');
    productTrendingContainer.innerHTML='';
    
    products.slice(0,3).forEach(product => {
    console.log(product);

    const trendingCard=document.createElement('div');
    trendingCard.innerHTML=`
    
<div class="">

<div class="card bg-base-100 w-96 h-[420px] shadow-lg ">
        <figure class="bg-gray-300 h-96">
        <img src="${product.image}" class="h-full py-4"/>
      </figure>
      
        <div>
        <div class="py-2 px-4 flex justify-between">
            <div>
                <a class="btn bg-blue-100 rounded-full text-[#422ad5] ">${product.category}</a>
            </div>
             <div>
            <span class="text-yellow-500"><i class="fa-solid fa-star"></i></span>
            <span>${product.rating.rate}</span>
            <span>(${product.rating.count})</span>
        </div>
        </div>
       
      </div>
        <div class="card-body">
         <h2 class="card-title ">
         ${truncateText(product.title, 30)}
            </h2>
        <p class="text-bold text-2xl text-left">$ ${product.price}</p>
        <div class="card-actions justify-between">
        <div onclick="loadProductDetails(${product.id})" class="btn btn-active py-4 w-5/12 rounded-lg"><i class="fa-regular fa-eye"></i>Details</div>
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