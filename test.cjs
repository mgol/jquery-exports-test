#!/usr/bin/env node

'use strict';

// No global window => this returns the jQuery factory.
const jQueryFullFactory = require( "jquery" );

// Get a `window` implementation from jsdom.
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "<!DOCTYPE html><p>Hello world</p>" );

// Log the jQuery full version.
const jQueryFull = jQueryFullFactory( window );
console.log( "jQuery full version:", jQueryFull?.fn?.jquery );

// Make the `window` from JSDOM a global variable.
globalThis.window = window;

// Log the jQuery slim version.
// Global window present => this returns jQuery directly.
const jQuerySlim = require( "jquery/slim" );
console.log( "jQuery slim version:", jQuerySlim?.fn?.jquery );

const main = async() => {

    // Log the contents of the internal cssExpand array.
    const { default: cssExpand } = await import( "jquery/src/css/var/cssExpand.js" );
    console.log( "jQuery cssExpand array:", cssExpand );
};

main();
