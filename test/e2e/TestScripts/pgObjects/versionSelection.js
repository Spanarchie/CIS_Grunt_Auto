/**
 * Created by c.moore-hill on 28/07/2015.
 */

var loggingPage = function(){
  var navElemName = "";

  this.myConsSectionTitle = element(by.css('#My\20 ConsultantsTableWithDynamicRows > tbody > tr:nth-child(1) > td.v-align-middle.sorting_1.ng-binding.ng-scope > p.ng-binding'));  //MY CONSULTANTS

  this.firstPatient = element(by.css('body > div > div > div > div > div > div > ng-view > div:nth-child(11) > div > tlc-grid > div > div > div.panel-body > div:nth-child(2) > div > div.col-md-7 > div > a'));

  this.logIn = function(role){
    browser.driver.ignoreSynchronization = true;
    browser.driver.get('https://portal.thelondonclinic.com');
    browser.driver.manage().window().maximize();
    //browser.waitForAngular();
    browser.driver.findElement(by.id('username')).sendKeys(role);
    browser.driver.findElement(by.id('password')).sendKeys('Test1234');

    browser.driver.findElement(by.css('#form-login > button')).click();
  };

  this.getElemName = function(){
    browser.driver.findElement(by.css('#navbar > ul > li:nth-child(3) > a')).click();
  };



  this.logout = function(){
    browser.driver.findElement(by.css('#logoutForm > ul > li:nth-child(3) > a')).click();
  }

};
module.exports = new loggingPage();
