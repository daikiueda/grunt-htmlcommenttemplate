"use strict";

var expect = require( "chai" ).expect,
    fs = require( "fs" )

describe( "grunt-htmlcommenttemplate", function(){

    var resultHTML;

    before( function(){
      resultHTML = fs.readFileSync( "./.tmp/utf8/htdocs/sub_dir/sub_sub_dir/index.html", "utf8" );
    } )

    it( "update HTML file", function(){
      expect( resultHTML ).to.contain( "<!-- Google Analytics:" );
    } );
} );
