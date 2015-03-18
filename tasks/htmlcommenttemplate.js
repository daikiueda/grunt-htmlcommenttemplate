/*
 * grunt-htmlcommenttemplate
 * https://github.com/daikiueda/grunt-htmlcommenttemplate
 *
 * Copyright (c) 2015 daikiueda, @ue_di
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function( grunt ){

  var htmlcommenttemplate = require( "htmlcommenttemplate" );

  grunt.registerMultiTask( "htmlcommenttemplate", "Update HTML files with <!-- Comment format Template --> Tags.", function() {

    if( !this.data.templateDir || !this.data.html ){
      grunt.fail.fatal( 'htmlcommenttemplate require "templateDir" and "html".' );
      return;
    }

    var done = this.async();

    htmlcommenttemplate( this.data.templateDir )( this.data.html )
      .then(
        function( results ){
          grunt.log.ok( results.success.length + " html file(s) are updated." );
          results.success.forEach( function( path ){
            grunt.verbose.writeln( path );
          } );
          done();
        },
        function( e ){
          grunt.fail.fatal( e );
          done();
        }
      );
  });
};
