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
