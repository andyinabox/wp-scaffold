/**
 * App description goes here
 * 
 * @module app
 */
define(['jquery', 'lodash'], function($, _) {

	/*
	 * VARS
	 */

	var _cmds = {}, // commands object
	
			/* config */
			_defaults = {
				
			},
			_opts;
	
			/* deferreds */
			_q = $.Deferred();
	
	
	/**
	 * PRIVATE FUNCTIONS
	 */

	// any helpers or other private functions can go here
	
	/*
	 * COMMANDS
	 */
	
	/**
	 * Alias of the module config in command syntax
	 * @method init
	 * @public
	 * @param {object} [opts] An initialization options object
	 * 
	 */
	_cmds.init = _initModule;	
	
	// any additional commands go here
	
	
	/*
	 * UTILITIES
	 * Feel free to mod these if necessary, but you might not have to!
	 */

	/**
	 * Module initization logic goes here
	 * @method _initModule
	 * @private
	 */
	function _initModule(opts) {
		// parse opts
		_opts = _.defaults(_defaults, opts);
		
		// the main module deferred object should resolve itself
		_q.resolve();
		
		return _q.promise();
	}

	/**
	* Invoke a module command
	* 
	* @method _initModule
	* @param {string} [command] command to invoke
	* @private
	*/
	function _invokeCommand(/* arguments */) {
				// turn `arguments` into true array
		var args = Array.prototype.slice.call(arguments),
				// get command string and remove from args
				command = args.shift();
				
		// call the command if it exists	
		if(_.isFunction(_cmds[command]) return _cmds[command].apply(this, args);
		else throw new Error("Command '"+input+"' does not exist.");		
	}
	
	
	/**
	 * This is the main interface point for the module. It will take the following signatures:
	 *   `module(opts, [arg1, arg2, ...])` -> passed an options object first, initializes module with _initModule and returns deferred promise
	 *   `module(command, [arg1, arg2, ...]) -> the first arg is a string mapped to a function in the `self` object, the rest are argments for that function
	 * @method _facade
	 * @private
	 * @param {object|string} [input] an object containing module init options, or a string for command name
	 */
	function _facade(input) {	
		// if the first item is an object we are initializing the module
		if(_.isObject(input)) _initModule(arguments);
		// if first item is a string we are calling a command.		
		} else if(_.isString(input)) _invokeCommand(arguments)
	};
	
	return _facade;

})