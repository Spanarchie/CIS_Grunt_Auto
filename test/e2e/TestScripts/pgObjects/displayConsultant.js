/**
 * Created by C.Moore-Hill on 06/08/2015.
 */
var consultantPage = function(){

this.name = element(by.css('body > div > div > div > div > div > div > ng-view > div > tlc-item > div > div:nth-child(2) > div:nth-child(1) > div > div > div.col-md-9 > div:nth-child(2) > h3'));
this.title = element(by.css('body > div > div > div > div > div > div > ng-view > div > tlc-item > div > div:nth-child(2) > div:nth-child(1) > div > div > div.col-md-9 > div:nth-child(2) > b'));
this.phone = element(by.css('body > div > div > div > div > div > div > ng-view > div > tlc-item > div > div:nth-child(2) > div:nth-child(1) > div > div > div.col-md-9 > div:nth-child(2) > h5:nth-child(3) > a'));

};
module.exports = new consultantPage();

