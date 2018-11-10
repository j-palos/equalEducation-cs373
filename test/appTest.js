import React from 'react';

const assert = require('chai').assert;
const app = require('../src/App');

describe('App', function() {
    it('test the main app js file', function(){
        assert.equal(app(), 'hello');
    });
});