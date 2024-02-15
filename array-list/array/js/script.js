class Product{

    constructor(){
        this.id = 1;
        this.arrayProducts = [];
    }

    save(){
        let product = this.readData();

        this.analyzeData(product)

        console.log(product);
    }

    readData(){
        let product = {}

        product.id = this.id++;

        product.productName = document.getElementById("product").value;

        product.price = document.getElementById("price").value;

        return product;
    }

    analyzeData(product){

        let msg = '';

        if(product.productName == ''){
            msg += '- write the name of the product \n';
        }

        if(product.price == ''){
            msg += '- type the price of the product'
        }

        if(msg != ''){
            alert(msg);
            return false;
        }

        return true;
    }

    cancel(){
        console.log("Item deleted!")
    }

}

var product = new Product();