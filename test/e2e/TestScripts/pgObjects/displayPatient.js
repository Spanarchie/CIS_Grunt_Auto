/**
 * Created by C.Moore-Hill on 06/08/2015.
 */

var patientPage = function() {

    this.getPage = function() {
        return browser.get("https://portal.thelondonclinic.com/#/Patients/Details/155");
    };

//Details
    this.pName = function () {
        var name = element(by.css('body > div.page-container > div > div > div > div > div > ng-view > div > div:nth-child(1) > div.ng-scope > div > div:nth-child(1) > div > span'));
        return name;
    };


    //this.DoB = element(by.xpath('/html/body/div/div/div/div/div/div/ng-view/div/div[1]/div[1]/div/div[2]/div[1]/div/div[2]/p[2]/text()[1]'));
    //this.gender = element(by.xpath('/html/body/div/div/div/div/div/div/ng-view/div/div[1]/div[1]/div/div[2]/div[1]/div/div[2]/p[2]/text()[2]'));
    //this.address1 = element(by.xpath('/html/body/div/div/div/div/div/div/ng-view/div/div[1]/div[1]/div/div[2]/div[2]/div/div[2]/p/text()[1]'));

//Listings
//    this.appointments = element.all(by.repeater('item in collection'));

//ListingElement

    this.updateMiddlename = function (refName){
        element(by.css('body > div.page-container > div > div > div > div > div > ng-view > div > div:nth-child(1) > div.ng-scope > div > div:nth-child(1) > div.col-md-3 > div > input')).clear().then(function(){
            element(by.css('body > div.page-container > div > div > div > div > div > ng-view > div > div:nth-child(1) > div.ng-scope > div > div:nth-child(1) > div.col-md-3 > div > input')).sendKeys(refName);
        })
    };


//Actions
    this.pressEditButton = function(){
        element(by.buttonText('Edit')).click();
    };
    this.pressCancelButton = function(){
        element(by.buttonText('Cancel')).click();
    };
    this.pressSaveButton = function(){
        element(by.buttonText('Save')).click();
    };
    this.pressBookOutButton = function(){
        element(by.buttonText('Book out')).click();
    };
    this.pressYesButton = function(){
        element(by.buttonText('Yes')).click();
    };
    this.pressContinueButton = function(){
        element(by.css('#modalSlideUpSmall > div > div > div > div > button')).click();
        browser.waitForAngular();
    };

// Modal Buttons

    this.pressContinueButton = function(){
        element(by.css('#modalSlideUpSmall > div > div > div > div > button')).click();
        browser.waitForAngular();
    };

};
module.exports = new patientPage();
