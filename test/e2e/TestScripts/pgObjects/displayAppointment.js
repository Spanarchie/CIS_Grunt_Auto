/**
 * Created by C.Moore-Hill on 06/08/2015.
 */

var appointmentPage = function(){

    this.getPage = function() {
        return browser.get("https://portal.thelondonclinic.com/#/Appointments/Details/18318");
    };

    this.pressRescheduleButton = function(){
        element(by.buttonText('Reschedule')).click();
    };
    this.pressCancelButton = function(){
        element(by.buttonText('Cancel')).click();
    };
    this.pressAddNoteButton = function(){
        element(by.buttonText('Add Note')).click();
    };

    //To edit the funding of an appointment..
    this.fundingTitle = element(by.xpath('body/div/div/div/div/ng-view/div/tlc-item/div/div[2]/div/div[2]/div[1]/div[2]/div/div/div/div/div/div/div/text()'));
    this.EditFunding = element(by.css('[ng-click="viewModel.onChangeFunding()"]'));
    this.FundingHeader = element(by.css('body > div.modal.fade.ng-isolate-scope.slide-up.disable-scroll.in > div > div > div.modal-header.ng-scope > h4'));


    //To add a note to an appointment..
    this.AddNote = element(by.css('[ng-click="clickedy()"]'));
    this.NoteHeader = element(by.css('body > div.modal.fade.ng-isolate-scope.slide-up.disable-scroll.in > div > div > div.modal-header.ng-scope > h4'));
    this.NoteTitle = element(by.model('viewModel.title'));
    this.NoteText = element(by.model('viewModel.text'));
    this.NoteOk = element(by.css('[ng-click="save()"]'));
    this.NoteCancel = element(by.css('[ng-click="cancel()"]'));


};
module.exports = new appointmentPage();