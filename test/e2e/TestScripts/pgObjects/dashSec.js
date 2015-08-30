/**
 * Created by c.moore-hill on 30/07/2015.
 */


var SecretaryDash = function(){
    this.getPage = function() {return browser.get('#/');};

    this.myConsSectionTitle = element(by.css('body > div > div > div > div > div > div > ng-view > div:nth-child(9) > div > tlc-grid > div > div > div.panel-heading > div.panel-title.ng-binding'));  //MY CONSULTANTS

    this.ConsName = element(by.css('body > div > div > div > div > div > div > ng-view > div:nth-child(10) > div > tlc-grid > div > div > div.panel-body > div:nth-child(2) > div > div.col-md-7 > div > a'));
    this.ConsTitle = element(by.css('body > div > div > div > div > div > div > ng-view > div:nth-child(10) > div > tlc-grid > div > div > div.panel-body > div:nth-child(2) > div > div.col-md-7 > div > p:nth-child(2) > strong'));
    this.ConsSpecialty = element(by.css('body > div > div > div > div > div > div > ng-view > div:nth-child(10) > div > tlc-grid > div > div > div.panel-body > div:nth-child(2) > div > div.col-md-7 > div > p.ng-binding'));
    this.ConsCalendarLink = element(by.css('body > div > div > div > div > div > div > ng-view > div:nth-child(10) > div > tlc-grid > div > div > div.panel-body > div:nth-child(2) > div > div.col-md-7 > div > p.ng-binding'));
    this.ConsBookLink = element(by.css('body > div > div > div > div > div > div > ng-view > div:nth-child(10) > div > tlc-grid > div > div > div.panel-body > div:nth-child(2) > div > div:nth-child(4) > div > a:nth-child(2)'));


    this.myConsApps = element(by.css('body > div > div > div > div > ng-view > div > tlc-grid:nth-child(10) > div > div > div.panel-heading > div.panel-title.ng-binding'));  //UPCOMING APPOINTMENTS
    this.patientListLink = element(by.css('body > div > div > div > div > div > div > ng-view > div:nth-child(11) > div > tlc-grid > div > div > div.panel-body > div:nth-child(3) > div > div.col-md-4 > a'));
    this.ViewAppointmentLink = element(by.css('body > div > div > div > div > div > div > ng-view > div:nth-child(11) > div > tlc-grid > div > div > div.panel-body > div:nth-child(3) > div > div:nth-child(4) > a'));
    this.cancelAppointmentLink = element(by.css('body > div > div > div > div > div > div > ng-view > div:nth-child(11) > div > tlc-grid > div > div > div.panel-body > div:nth-child(3) > div > div:nth-child(4) > span:nth-child(4) > a'));

};
module.exports = new SecretaryDash();

