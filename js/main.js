/**
 * To customize, rename "_app.js" to "[yourappname].js"
 * and do a find & replace on this file: '_app' -> '[yourappname]'
 */

require.config({
	/* baseUrl: 'js/', */
	urlArgs: "_=" +  (new Date()).getTime(),
	paths: {
		/* dirs */
		// if you want to alias directories, i.e. `"a" : "some/path"`
		
		/* require plugins */
		async: 'lib/requirejs-plugins/async',
		depend: 'lib/requirejs-plugins/depend',
		font: 'lib/requirejs-plugins/font',
		goog: 'lib/requirejs-plugins/goog',
		image: 'lib/requirejs-plugins/image',
		json: 'lib/requirejs-plugins/json',
		noext: 'lib/requirejs-plugins/noext',
		mdown: 'lib/requirejs-plugins/mdown',
		propertyParser : 'lib/requirejs-plugins/propertyParser',
		
		/* libraries */
		jquery: 'http://code.jquery.com/jquery-1.9.0.min',
		lodash: 'http://cdnjs.cloudflare.com/ajax/libs/lodash.js/1.0.0-rc.3/lodash.min',
		
		/* project */
		_app: 'app/_app'
	},
	shim: {
		/* define dom query library */
		'jquery': { exports: '$' },
		/* define js utility library */
		'lodash': { exports: '_'},
		/* export app facade */
		'_app': { exports: '_app'}
	}
});

require(['_app'], function(_app) {
		
	/* `app('init', {})` would also work! */
	_app().then(function(){
		console.log("Hello, world!");
	});
	
})