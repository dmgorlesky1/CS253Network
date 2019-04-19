/**
 * TDD Style Testing
 */
var assert = require('chai').assert;
var network = require("./network.js");
var fs = require('fs');
/** A test suite for testing the Station object **/
suite("Test Station object", function(){
    //Test fixture A for network object
    var stationA = null;
    //Test fixture B for network object
    var stationB = null;
    //Test fixture C for network object
    var stationC = null;
    //Test fixture D for netork object
    var stationD = null;
    //Test fixture E for network object
    var stationE = null;

    /**
     * Called as test suite begins, good for setting up objects used through
     * tests.
     **/
    suiteSetup(function(){
        stationA = new Station.Station(0, "York");
        stationB = new Station.Station(5, "Hope");
        stationC = new Station.Station(7, "Shire");
    });

    /**
     * Calledbefore each unit test to set up fixtures for testing purposes
     **/
     setup(function(){
         rectangleD = new Station.Station(-5, "Negative");
         rectangleE = new Station.Station(null, "Null StationID");
     });

     /**
      * Called after each function to reset objects
      **/
      teardown(function(){
          rectangleD = null;
          rectangleE = null;
      });

      /**
       * Called after each suite to reset objects
       **/
       suiteTeardown(function(){
           rectangleA = null;
           rectangleB = null;
           rectangleC = null;
       });

       //BELOW HERE ARE WHERE UNIT TESTS BEGIN
       suite('Unit Tests for the addLinks function', function(){
           test('Test addLink function to add a regular station link', function(){
               rectangleA.addLink(stationB);
               let rectALinks = rectangleA.links;
               assert(rectangleB.stationName == rectALinks, "Added link");
           });
           test('Test addLink for negative stationID', function(){
               rectangleC.addLink(stationD);
               let rectCLink = rectangleC.links;
               assert(rectCLink.stationID === -5, "-5 is the stationID");
           });
           test("Test addLink for nullStationID", function(){
               rectangleB.addLink(rectangleE);
               let rectBLinks = rectangleB.links;
               assert(rectCLinks.stationID === null, "null stationID");
           });
       });  //END OF addLinks suite TESTING
}); //END OF Station SUITE TESTING

/** A test suite to test Link object **/
suite('Testing the Link object', function(){
    //Fixture for linkA object
    var linkA = null;
    var stationA = null;
    //Fixture for linkB object
    var linkB = null;
    var stationB = null;
    //Fixture for linkC object
    var linkC = null;
    var stationC = null;
    //Fixture for linkD object 
    var linkD = null;
    var stationD = null;
    //Fixture for linkE object
    var linkE = null;
    var stationE = null;
    //Fixture for linkF object
    var linkF = null;
    var stationF = null;

    /** 
     * Called as test suite begins, useful for setting up objects
     **/
     suiteSetup(function(){
         stationA = new Station.Station(0, "First");
         linkA = new Link.Link("Simpleton", stationA, 25);

         stationB = new Station.Station(1, "Second");
         linkB = new Link.Link("Simpleton", stationB, 0);

         stationC = new Station.Station(2, "Third");
         linkC = new Link.Link("Simpleton", stationC, 50);
     });

     /** Called before each unit tests to set up fixtures **/
     setup(function(){
         stationD = new Station.Station(3, "Fourth");
         linkD = new Link.Link(null, stationD, 25);

         stationE = new Station.Station(4, "Fifth");
         linkE = new Link.Link("Simpleton", stationE, null);
         
         stationF = new Station.Station(5, "Last");
         linkE = new Link.Link("Simpleton", null, 25); 
     });

     /** Called after each suite test to refresh fixtures **/
     teardown(function(){
         stationD = null;
         linkD = null;
        
         stationE = null;
         linkE = null;

         stationF = null;
         linkF = null;
     });

     /** Called as the test suite ends. Useful for tearing down objects **/
     suiteTeardown(function(){
         stationA = null;
         linkA = null;

         stationB = null;
         linkB = null;

         stationC = null;
         linkC = null;
     });

     /** BELOW HERE ARE THE UNIT TESTS **/
     suite("Unit tests for Link objects", function(){
         test('Test standard station', function(){
             assert(linkA.linkName === stationA.stationName, "First is the stationName");
         });
         test("Test station with no routeName", function(){
             assert(linkD.routeName === null, "null is station Name");
         });
         test("Test station with null distance", function(){
             assert(linkE.distance === null, "distance is null");
         });
         test("Test station with null station", function(){
             assert(linkF.station === null, "Station is null");
         });
         test("Test station with 0 distance", function(){
             assert(stationB.distance === 0, "Distance is 0");
         });
     });  //END OF Link OBJECT TEST SUITE
}); //END OF Link TEST SUITE

/** A test suite for the Journey objects **/
suite("Test Journey objects", function(){
    //Fixture for JourneyA object
    journeyA = null;
    //Fixture for JourneyB object
    journeyB = null;
    //Fixture for JourneyC object
    journeyC = null;
    //Fixture for JourneyD object
    journeyD = null;
    //Fixture for JourneyE object
    journeyE = null;   

    /** Called as test suite begins, sets up fixtures **/
    suiteSetup(function(){
        journeyA;
        journeyB;
        journeyC;
    });

    /** Called before each unit test to set up fixtures **/
    setup(function(){
        journeyD;
        journeyE;
    });

    /** Called after each test suite to tear down objects **/
    teardown(function(){
        journeyD = null;
        journeyE = null;
    });

    /** Called as the test suite ends **/
    suiteTeardown(function(){
        journeyA = null;
        journeyB = null;
        journeyC = null;
    });

    //BELOW HERE THE UNIT TESTS BEGIN
    suite('Tests for Journey Objects', function(){
        
    }); //END OF JOURNEY OBJECT TESTS

    suite('Test copy function', function(){

    }); //END OF COPY FUNCTION TESTS

    suite('Test incDistance function', function(){

    }); //END OF incDistance FUNCTION

    suite('Test report function', function(){

    }); //END OF REPORT FUNCTION TESTS
}); //END OF JOURNEY TEST SUITE


