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
    
    suite('Unit tests for getRoute', function(){
        test('Testing for unknown routeName', function(){
            let routeName = 'Alphabeta';
            assert(railway.getRoute(fileNameD, routeName) === null, 'Didnt find route');
        });
        test('Testing for known routeName', function(){
            let routeName = 'Simpleton';
            assert(railway.getRoute(fileNameD, routeName) === fileNameD.routes[0],
            'Found correct route info');
        });
    }); //END OF GETROUTE TESTS

    suite('Unit tests for route Summary', function(){


    }); //END OF TESTS FOR ROUTE SUMMARY

    suite('Unit tests for totalStations', function(){
        test('Testing simpleton line', function(){
            let num = 5;
            assert(railway.totalStations(fileNameD) === num, 'Found total Stations');
        });
    }); //END OF TESTS FOR TOTAL STATIONS

    suite('Unit tests for routeDistance', function(){
        test('Testing simpleton line', function(){
            let dist = 100;
            assert(railway.routeDistance(fileNameD) === dist, 'Found total distance');
        });
    }); //END POF TESTS FOR ROUTEDISTANCE

    suite('Unit tests for routeToString', function(){
        test('Testing routeToStringfor simple line', function(){
            
        });
    }); //END OF TESTS FOR ROUTESUMMARY
    
    suite('Unit tests for findLongestRoute', function(){
        test('Testing for simpleton route', function(){

        });
    });

    suite('Unit tests for addDistances', function(){
        tests('Testing for distance addition', function(){
            let dist = 100;
            assert(railway.addDistances(fileNameD) === dist, 'Added total distance of route');
        });
    }); //END OF TESTS FOR ADDDISTANCE

    suite('Unit tests for sortRoutesByName', function){
        test('Test if asc is false', function(){


        });
        test('Test if asc is true', function(){


        });
    }); //END OF TESTS FORSORTROUTESBYNAME
    
    suite('Unit tests for sort', function(){
        test('Test if a > b', function(){
            assert(railway.sort(0,1) === -1, 'Sorted correctly');
        });
        test('Test if a < b', function(){
            assert(railway.sort(1,0) === 1, 'Sorted correctly');
        });
        test('Test if a=b', function(){
            assert(railway.sort(1,1) === 0, 'Sorted correctly');
        });
    }); //END OF UNIT TESTS FOR SORT

    suite('Unit tests for sortRoutesbtLength', function(){
        test('Testing if asc is false', function(){

        });
        test('Testing if asc is true', function(){

        });
    }); //END OF UNIT TESTS FOR SORTROUTEBYLENGTH
});


