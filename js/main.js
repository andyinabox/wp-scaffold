require.config({
	baseUrl: 'js/',
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
		propertyParser : 'lib/requirejs-plugins/propertyParser'
		
		/* libraries */
		jquery: 'http://code.jquery.com/jquery-1.9.0.min.js',
		lodash: 'http://cdnjs.cloudflare.com/ajax/libs/lodash.js/1.0.0-rc.3/lodash.min.js'
		
		/* project */
		// any project-specific paths go here
	},
	shim: {
		/* define dom query library */
		'jquery': { exports: '$' },
		/* define js utility library */
		'lodash': { exports: '_'}
	}
});

require(['app/app'], function(app) {
	
	/* `app('init', {})` would also work! */
	app(/* init options */); // initialize your app
	
})