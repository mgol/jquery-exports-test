#!/usr/bin/env node

// No global window => this returns the jQuery factory.
const { default: jQueryFullFactory } = await import( "jquery" );

// Get a `window` implementation from jsdom.
import { JSDOM } from "jsdom";
const { window } = new JSDOM( "<!DOCTYPE html><p>Hello world</p>" );

// Log the jQuery full version.
const jQueryFull = jQueryFullFactory( window );
console.log( "jQuery full version:", jQueryFull?.fn?.jquery );

// Make the `window` from JSDOM a global variable.
globalThis.window = window;

// Log the jQuery slim version.
// Global window present => this returns jQuery directly.
const { default: jQuerySlim } = await import( "jquery/slim" );
console.log( "jQuery slim version:", jQuerySlim?.fn?.jquery );

// Log the contents of the internal cssExpand array.
const { default: cssExpand } = await import( "jquery/src/css/var/cssExpand.js" );
console.log( "jQuery cssExpand array:", cssExpand );
