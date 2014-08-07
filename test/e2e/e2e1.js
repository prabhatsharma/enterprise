'use strict';

describe('E2E: main page', function() {
    var ptor;

    beforeEach(function() {
        browser.get('http://127.0.0.1:8080/');
        browser.debugger();
        ptor = protractor.getInstance();
    });
    
    it('should load the home page', function() {
        var ele = by.id('home');
        expect(ptor.isElementPresent(ele)).toBe(true);
    });
    
/*    it('Check for filtering', function() {
        element(by.id('search.projectName')).sendKeys('batman');
        expect(element(by.id('search.projectName'))).toBe('batman');
    });*/

});