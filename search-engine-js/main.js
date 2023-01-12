const searchInput = document.querySelector('#search-item');

searchInput.addEventListener("keyup", () => {

    const searchBox = searchInput.value.toUpperCase();
    const storeItems = document.querySelector('#storeItems');
    const products = document.querySelectorAll('.product');
    const productName = storeItems.getElementsByTagName('h2');

    for(var i = 0; i < productName.length; i++){

        let match = products[i].getElementsByTagName('h2')[0];

        if(match){

            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchBox) > -1){
                products[i]. style.display = "";
            }else{
                products[i]. style.display = "none";
            }
        }
    }
});