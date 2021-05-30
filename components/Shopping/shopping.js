class Shopping {
  handleClear() {
    ROOT_SHOPPING.innerHTML = "";
  }
  render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = "";
    let sumCatalog = 0;
    CATALOG.forEach(({ id, name, img, price }) => {
      if (productsStore.indexOf(id) !== -1) {
        htmlCatalog += `
                    <tr>
                    <td class="shopping-element__name" >🤪${name}</td> 
                    <td  class="shopping-element__price">${price.toLocaleString()} UAH</td>
                    <td> <img src="${img}" class="shopping-element__img"></td>
                    </tr>
                    
                `;
        sumCatalog += price;
      }
    });

    const html = `
        <div class="shopping-container">
            <div class="shopping_close" onclick="shoppingPage.handleClear()"></div>
            <table>
            ${htmlCatalog}
            <tr>
                <td class="shopping-element__name" >💸Сумма</td> 
                <td  class="shopping-element__price">${sumCatalog.toLocaleString()} UAH</td>
            </tr>
            </table>
            <div>
                <button class="buyButton" onclick="document.location='../wishList/wishList.html'">Купить</button>
            </div>
        </div>
            
        `;
    ROOT_SHOPPING.innerHTML = html;
  }
}
const shoppingPage = new Shopping();
