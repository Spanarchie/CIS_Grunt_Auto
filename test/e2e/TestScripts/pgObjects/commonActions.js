/**
 * Created by C.Moore-Hill on 07/08/2015.
 */


var common = function(){

    this.pressButtonText = function(refText){
        element(by.buttonText(refText)).click();
    };


};
module.exports = new common();