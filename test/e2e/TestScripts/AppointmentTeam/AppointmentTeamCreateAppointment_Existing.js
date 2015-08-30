/**
 * Created by C.Moore-Hill on 06/08/2015.
 */


'use strict';
var loggingPage = require('../pgObjects/versionSelection.js');
var patientPage = require('../pgObjects/displayPatient.js');
var appointmentPage = require('../pgObjects/displayAppointment.js');
var consultantPage = require('../pgObjects/displayConsultant.js');

describe('When I Log in as a Appointment team member',function(){
    it('should log into UAT "The London Clinic - Consultant Information System"', function() {
        var role = 'FRANCES.APPOINTMENT';
        console.log("logging on as "+role);
        loggingPage.logIn(role);
        var roleName = browser.driver.findElement(by.css('#logoutForm > ul > li:nth-child(2) > a')).getText();
        expect( roleName ).toEqual(role);
    });

    it('I select a patient from the listing I should see the patient details', function () {
        patientPage.getPage();
        browser.waitForAngular();

        console.log("About to check the name");
        var name = patientPage.pName();
        expect(name.getText()).toContain("Garth");
        console.log(name+" is the name");
    });

    it('should be able to update a patient detail', function () {
        patientPage.getPage();
        browser.waitForAngular();

        console.log("About to update the name");
        var name = patientPage.pName();
        expect(name.getText()).toContain("Garth");
        console.log(name+" is the name");
    });

    it('should be able to update a patients Middle Name detail', function () {
        var midName = "Spanarchie";
        patientPage.getPage();
        browser.waitForAngular();

        patientPage.pressEditButton();
        browser.waitForAngular();
        console.log("About to update the Middlename");
        patientPage.updateMiddlename(midName);
        patientPage.pressSaveButton();
        browser.waitForAngular();

        console.log("About to check the Middlename");
        var name = patientPage.pName();
        expect(name.getText()).toContain(midName);
        console.log(name+" is the name");
        patientPage.pressContinueButton();
        browser.waitForAngular();
    });

    it('should be able to cancel an update without changing patients detail', function () {
        var midName = "Reactor";
        patientPage.getPage();
        browser.waitForAngular();

        patientPage.pressEditButton();
        browser.waitForAngular();
        console.log("About to update the Middlename");
        patientPage.updateMiddlename(midName);
        patientPage.pressCancelButton();
        patientPage.getPage();
        browser.waitForAngular();


        console.log("About to check the Middlename is not changed");
        var name = patientPage.pName();
        expect(name.getText()).not.toContain(midName);
        console.log(name+" is the name");
        browser.waitForAngular();
    });

    it('should then log out of UAT "The London Clinic - Consultant Information System"', function() {
        loggingPage.logout();
        var titleName = browser.driver.findElement(by.css('body > div.container.body-content > div.page-header')).getText();
        console.log(titleName+" is the name ot the title");

        expect( titleName ).toEqual('Logout');
        browser.driver.findElement(by.css('body > div.container.body-content > div.row > div > form > fieldset > div > button')).click();

    });
});

describe('When I add a Note to an appointment', function(){
    it('should log into UAT "The London Clinic - Consultant Information System"', function() {
        var role = 'FRANCES.APPOINTMENT';
        console.log("logging on as "+role);
        loggingPage.logIn(role);
        var roleName = browser.driver.findElement(by.css('#logoutForm > ul > li:nth-child(2) > a')).getText();
        expect( roleName ).toEqual(role);
    });

    it('should go to an appointment', function(){
        appointmentPage.getPage();
        browser.waitForAngular();
    });

    it('should go Verify buttons are present["Reschedule","Cancel","Add Note"]', function(){



    });

    it('should then log out of UAT "The London Clinic - Consultant Information System"', function() {
        loggingPage.logout();
        var titleName = browser.driver.findElement(by.css('body > div.container.body-content > div.page-header')).getText();
        console.log(titleName+" is the name ot the title");

        expect( titleName ).toEqual('Logout');
        browser.driver.findElement(by.css('body > div.container.body-content > div.row > div > form > fieldset > div > button')).click();

    });

});