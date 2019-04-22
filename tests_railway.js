/**
 * TDD Style Testing
 **/
var assert = require('chai').assert;
var railway = require('./railway.js');
var fs = require('fs');
/** A test suite for testing the railway object **/
suite('Test Railway Object', function(){
    //Test fixture for a railway object 
    fileNameA = null;
    //Test fixture for a railway object
    fileNameB = null;
    //Test fixture for a railway object
    fileNameC = null;
    //Test fixture for a railway object
    fileNameD = null;
    //Test fixture for a railway object
    fileNameE = null;
    
    /** Called as suite begins, useful for setting up objects **/
    suiteSetup(function(){
        fileNameA = railtrack_uk.json;

        fileNameB = notional_ra.json;

        fileNameC = smokey_mountain.json;

    });
    
    /**Called before each unit test to reset objects **/
    setup(function(){
        fileNameD = simpleton_railway.json;

        fileNameE = null;
    });

    /** Called after each function to reset objects **/
    teardown(function(){
        fileNameD = null;
        fileNameE = null;
    });

    /** Called as the test suite ends **/
    suiteTeardown(function(){
        fileNameA = null;
        fileNameB = null;
        fileNameC = null;
    });

    //BELOW ARE THE UNIT TESTS

    suite('Unit tests for loadData', function(){
        test('Test a null fileName', function(){
            assert(railway.loadData(fileNameE) === null, 'Null fileName');
        });
    }); //END OF TESTS FOR LOAD DATA

    suite('Unit tests for getNetworkName', function(){
        test('Test for network name', function(){
            let name = railway.loadData(fileNameD);
            name = name.networkName;
            assert(name === "Simpleton Railway System", Gets network Name);
        });
    }); //END OF TESTS FOR GETNETWORKNAME

    suite('Unit Tests for getRouteNamess', function(){
        test('Test a line with one route', function(){
            let routeNames = railway.getRouteNames(fileNameD);
            assert(routeNames[0] === "Simpleton", "Gets route names");
        });
    }); //END OF TESTS FOR GETROUTENAMES

    suite('Unit tests for routeNamesToString', function(){
        test('Test with a route of length 1', function(){
            let name = railway.routeNamesToString(fileNameD);
            assert(name === 'Simpleton', 'routeName converts to string');
        });
    }); //END OF ROUTENAMETOSTRING


