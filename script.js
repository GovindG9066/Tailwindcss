let Object_container = document.querySelector(".object-container");

let btn_cont = document.querySelector(".btn-cont");
let btn_circle = document.querySelector(".btn-circle");

// function mode() {
//     btn_cont.addEventListener("click",()=>{
//         btn_circle.classList.toggle("translate-x-full");
//         console.log("click");

//     })
// }
// mode();

btn_cont.addEventListener("click", () => {
    // btn_circle.classList.toggle("translate-x-full");
    btn_circle.classList.toggle("move-btn");
    document.body.classList.add("dark");
    if (btn_circle.classList.contains("move-btn")) {
        btn_circle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
    <path d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>`;
        document.body.classList.add("dark");
    }
    else {
        btn_circle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
    <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="currentColor" stroke-width="1.5" />
    <path d="M12 2C11.6227 2.33333 11.0945 3.2 12 4M12 20C12.3773 20.3333 12.9055 21.2 12 22M19.5 4.50271C18.9685 4.46982 17.9253 4.72293 18.0042 5.99847M5.49576 17.5C5.52865 18.0315 5.27555 19.0747 4 18.9958M5.00271 4.5C4.96979 5.03202 5.22315 6.0763 6.5 5.99729M18 17.5026C18.5315 17.4715 19.5747 17.7108 19.4958 18.9168M22 12C21.6667 11.6227 20.8 11.0945 20 12M4 11.5C3.66667 11.8773 2.8 12.4055 2 11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>`;
        document.body.classList.remove("dark");
    }
    console.log("clicked");



})

{/* <div class= "flex w-full border ">
<div class="hover:shadow-2xl border border-purple-500 hover:-translate-y-2 hover:translate-x-1 transition-all duration-150 ease-in-out w-full h-full p-3 m-2 rounded-lg">
    <div class="img-box w-1/2 rounded-lg h-52  m-auto">
        <img src="images/product1.png" class="h-full" alt="">
    </div>
    <h2 class="pl-2 text-xl font-bold text-blue-600">Perfurm product</h2>
    <div class="product-info pl-2 text-lg min-h-32 dark:text-white ">This is amezing product</div>
    <div class="price-cart-section flex justify-evenly">
        <div class="price p-2 border rounded-xl font-bold bg-blue-400 hover:bg-blue-500 cursor-pointer">
            Price- <span>$5.33</span></div>
        <div
            class="cart border rounded-xl p-2 font-bold bg-orange-300 hover:bg-orange-400 cursor-pointer">
            add to cart</div>
    </div> */}

let product_container = document.querySelector(".product-container");
function product_list(src, product_title, desc, price) {
    let product_element =document.createElement("div");
    product_element.classList.add("product-item,border,border-gray-200");
    product_element.innerHTML= `
        <div class= "flex w-full border ">
            <div class="hover:shadow-2xl border border-purple-500 hover:-translate-y-2 hover:translate-x-1 transition-all duration-150 ease-in-out w-full h-full p-3 m-2 rounded-lg">
                <div class="img-box w-1/2 rounded-lg h-52  m-auto">
                    <img src="${src}" class="h-full" alt="">
                </div>
            <h2 class="pl-2 text-xl font-bold text-blue-600">${product_title}</h2>
            <div class="product-info pl-2 text-lg min-h-32 dark:text-white ">${desc}</div>
            <div class="price-cart-section flex justify-evenly">
            <div class="price p-2 border rounded-xl font-bold bg-blue-400 hover:bg-blue-500 cursor-pointer">
                    Price- <span>$${price}</span></div>
            <div class="cart border rounded-xl p-2 font-bold bg-orange-300 hover:bg-orange-400 cursor-pointer">
                    add to cart</div>
        </div>`;
        product_container.appendChild(product_element);

}
product_list("images/product1.png","Perfurm product","This is amezing product","5.33");
product_list("images/product1.png","Perfurm product","This is amezing product","5.33");
product_list("images/product1.png","Perfurm product","This is amezing product","5.33");
product_list("images/product1.png","Perfurm product","This is amezing product","5.33");
