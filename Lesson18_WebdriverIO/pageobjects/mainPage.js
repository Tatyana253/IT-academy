const BasePage = require('./basePage');

class MainPage extends BasePage {

constructor() {
super();
this.Gitbutton = 'xpath';

}

get bigListSales() {
    return $('.salesBig-lists_content__link');
}

get nextItemPagination() {
    return $$('#amasty-shopby-product-list .icon-arrow-next');
}

get previousItemPagination() {
    return $$('#amasty-shopby-product-list .icon-arrow-prev');
}
}

module.exports = new MainPage();
