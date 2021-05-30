class Header{
    hanlerOpenShoppingPage(){
        shoppingPage.render();
    }
render(count){
    const html=`
    <div class="header-container">
    <a href=" ../tovarList.html" id="main" class="header-a"><span>Back</span></a>
        <div class ='header-counter' onclick="headerPage.hanlerOpenShoppingPage();">
        🙀${count}    
        </div>
    </div>
    `;
    ROOT_HEADER.innerHTML=html;

    }
}
const headerPage=new Header();
const productsStore =localStorageUtil.getProducts();
headerPage.render(productsStore.length);

