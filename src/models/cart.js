module.exports = function Cart(oldCart){

    this.items = oldCart.items || 0
    this.Quntaty = oldCart.Quntaty || 0
    this.Totalprice = oldCart.Totalprice || 0


    this.add = function(item , id){
        const store = this.items[id]
        if(!store){
            store = this.items[id] ={
                item:item ,
                Quntaty : 0 ,
                price : 0           
         }
        }
        store.Quntaty++
        store.price = store.item.price * store.Quntaty
        this.Quntaty++
        this.Totalprice += store.item.price
    };
};


