function getProductUrl(){
    return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`
}

function getProduct(){
    // yourCodeAjx
}

function clearProuct(){
    const productUrl=document.getElementById("products");
    productUrl.textContent='';
}
function displayProducts (data){
    data.data.products.foreach(product =>displayProduct(product));
}
function displayProduct (product){
    const productLi=document.createElement("li");
    productLi.textContent=product.name;

    const productUl =document.getElementById("table-products");
    productUl.appendChild(productLi);
}
function clearTableProducts(){
    const productUl=document.getElementById("table-product")
    productUl.textContent="";
}
function dispalyTableProduct (data){
    const table = document.createElement("table");
    table.setAttribute("border",1);

    let index =0;
    data.data.products.foreach(product=>)
}
function (){}