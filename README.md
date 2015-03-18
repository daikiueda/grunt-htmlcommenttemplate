# grunt-htmlcommenttemplate

> Update HTML files with &lt;!-- Comment format Template --&gt; Tags.

__see also [htmlcommenttemplate](https://github.com/daikiueda/htmlcommenttemplate)__.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-htmlcommenttemplate --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-htmlcommenttemplate');
```

## The "htmlcommenttemplate" task

In your project's Gruntfile, add a section named `htmlcommenttemplate` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig( {
  htmlcommenttemplate: {
    your_site: {
      html: "./htdocs/**/*.html",
      templatesDir: "./Templates"
    }
  }
} );
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* 2015-03-18   v0.0.1   experimental.
