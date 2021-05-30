
class wishlist{
render(){
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog=0;
        CATALOG.forEach(({ id, name,img, price}) => {
            if(productsStore.indexOf(id)!==-1){
                htmlCatalog +=`
                    <tr>
                    <td class="wishlish-element__name" >🤪${name}</td> 
                    <td  class="wishlish-element__price">${price.toLocaleString()} UAH</td>
                    <td> <img src="${img}" class="wishlish-element__img"></td>
                    </tr>
                    
                `;
                sumCatalog +=price;
            }
        });   
        
        const html =`
        <div class="wishlish-container">
            <div class="wishlish_close" onclick="wishlishPage.handleClear()"></div>
            <table>
            ${htmlCatalog}
            <tr>
                <td class="wishlish-element__name" >💸Сумма</td> 
                <td  class="wishlish-element__price">${sumCatalog.toLocaleString()} UAH</td>
            </tr>
            </table>
        </div>
            
        `;
        ROOT_WISHLIST.innerHTML=html;
    }
}
const WishList=new wishlist();
WishList.render()

  
