/**
 * Created by c.moore-hill on 28/07/2015.
 */
var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();
var today = day+"-"+month+"-"+year;
var time = currentDate.getTime();
var HtmlReporter = require('protractor-html-screenshot-reporter');
var reporter=new HtmlReporter({
  baseDirectory: './protractor-results/PROD/Prod_'+today+'/run@'+time+"", // a location to store screen shots.
  docTitle: 'The London Clinic - CIS Reporter Production',
  docName:  'CIS-Autotest-report.html'
});

exports.config = {
  allScriptsTimeout: 11000,

  //params: require('./appt.json'),

  specs: [
    'e2e/TestScripts/AppointmentTeam/AppointmentTeamViewPatient.js'
  ],

  suites:{
    FullSuite: 'e2e/TestScripts/*/*.js',
    AppointmentTeam: 'e2e/TestScripts/AppointmentTeam/*.js',
    SecretaryTeam: 'e2e/TestScripts/SecretaryTeam/SecretaryViewPatient.js',
    ReceptionistTeam: 'e2e/TestScripts/ReceptionistTeam/RecpTeamBaseline.js'
  },

  //seleniumArgs: ['-Dwebdriver.ie.driver=C:/Users/C.Moore-Hill/AppData/Roaming/npm/node_modules/protractor/selenium/IEDriverServer.exe'],

  multiCapabilities: [
    {
      'browserName': 'chrome'
    }//},
    //{
    //  'browserName': 'internet explorer'
    //}
  ],

  baseUrl: 'https://portal.thelondonclinic.com',

  framework: 'jasmine',

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 9000
  },

  onPrepare: function() {
    jasmine.getEnv().addReporter(reporter);
  }
};
