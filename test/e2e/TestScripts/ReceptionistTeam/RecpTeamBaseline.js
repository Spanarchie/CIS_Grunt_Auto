/**
 * Created by c.moore-hill on 29/07/2015.
 */

'use strict';
var loggingPage = require('../pgObjects/versionSelection.js');

    describe('When I Log in as a Receptionist',function(){
        it('should log into UAT "The London Clinic - Consultant Information System"', function() {
            var role = 'IRENE.RECEPTION';
            console.log("logging on as "+role);
            loggingPage.logIn(role);
            var roleName = browser.driver.findElement(by.css('#logoutForm > ul > li:nth-child(2) > a')).getText();
            expect( roleName ).toEqual(role);
        });

        it('Should verify the links in the Navigation bar route to Consultants listing', function () {
            browser.driver.findElement(by.css('#navbar > ul > li:nth-child(2) > a')).click();
            var actURL = browser.getCurrentUrl();
            expect(actURL).toEqual('https://portal.thelondonclinic.com/#/Consultants');
            console.log(actURL + " - https://portal.thelondonclinic.com/#/Consultants");
        });

        it('Should verify the links in the Navigation bar route to the Patients listing', function () {
            browser.driver.findElement(by.css('#navbar > ul > li:nth-child(3) > a')).click();
            var actURL = browser.getCurrentUrl();
            expect(actURL).toEqual('https://portal.thelondonclinic.com/#/Patients');
            console.log(actURL + " - https://portal.thelondonclinic.com/#/Patients");
        });

        it('should then log out of UAT "The London Clinic - Consultant Information System"', function() {
            loggingPage.logout();
            var titleName = browser.driver.findElement(by.css('body > div.container.body-content > div.page-header')).getText();
            expect( titleName ).toEqual('Logout');
            browser.driver.findElement(by.css('body > div.container.body-content > div.row > div > form > fieldset > div > button')).click();
        });
    });
