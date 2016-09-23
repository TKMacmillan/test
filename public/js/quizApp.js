/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8080/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/thomas.kim/Sites/dryrun2/dryrun/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/thomas.kim/Sites/dryrun2/dryrun/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react/addons\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var Quiz = __webpack_require__(184);

	React.render(React.createElement(Quiz, null), document.getElementById('content'));

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/thomas.kim/Sites/dryrun2/dryrun/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "QuizApp.jsx" + ": " + err.message); } }); } } })(); }

/***/ },

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/thomas.kim/Sites/dryrun2/dryrun/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/thomas.kim/Sites/dryrun2/dryrun/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var isNode = typeof module !== 'undefined' && module.exports ? true : false,
	    React = isNode ? __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react/addons\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) : window.React,
	    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

	var Quiz = (function (_React$Component) {
	  _inherits(Quiz, _React$Component);

	  function Quiz(props) {
	    _classCallCheck(this, Quiz);

	    _get(Object.getPrototypeOf(Quiz.prototype), 'constructor', this).call(this, props);
	    this.process = this.process.bind(this);
	  }

	  _createClass(Quiz, [{
	    key: 'process',
	    value: function process(e) {

	      var answer = '',
	          answerValidates = false,
	          nameRegex = /^[A-Za-z0-9-]/,
	          nameValidates = false,
	          radios = document.getElementsByName('answer'),
	          studentName = document.getElementById('StudentName').value;

	      document.getElementById('AnswerError').className = 'error invis';
	      document.getElementById('NameError').className = 'error invis';

	      for (var i = 0, length = radios.length; i < length; i++) {
	        if (radios[i].checked) {
	          answer = radios[i].value;
	          answerValidates = true;
	          break;
	        }
	      }
	      nameValidates = nameRegex.test(studentName) && studentName !== '' ? true : false;

	      if (!answerValidates) {
	        document.getElementById('AnswerError').className = 'error';
	        e.preventDefault();
	      }
	      if (!nameValidates) {
	        if (studentName === '') {
	          document.getElementById('NameError').innerHTML = 'Your name is required.';
	        } else {
	          document.getElementById('NameError').innerHTML = 'Only alphanumeric characters, spaces and hyphens are allowed.';
	        }
	        document.getElementById('NameError').className = 'error';
	        e.preventDefault();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var val = '';
	      return React.createElement(
	        'div',
	        { id: 'Quiz' },
	        React.createElement(
	          'h4',
	          null,
	          'Hypothetical University » Fall 2015 ',
	          React.createElement(
	            'em',
	            null,
	            'Math 101'
	          )
	        ),
	        React.createElement(
	          'form',
	          { onSubmit: this.process, action: '/api/quiz', method: 'post' },
	          React.createElement(
	            'h1',
	            null,
	            'Quiz 1'
	          ),
	          React.createElement('input', { type: 'text', id: 'StudentName', name: 'name', placeholder: 'Enter Your Name' }),
	          React.createElement(
	            'b',
	            { id: 'NameError', className: 'error invis' },
	            'Your name is required.'
	          ),
	          React.createElement(
	            'p',
	            null,
	            React.createElement(
	              'em',
	              null,
	              'Question 1:'
	            ),
	            'Is 1,024',
	            React.createElement(
	              'span',
	              { id: 'super' },
	              '2'
	            ),
	            ' equal to 1,048,576 ?'
	          ),
	          React.createElement(
	            'label',
	            { htmlFor: 'radio1' },
	            React.createElement('input', { type: 'radio', id: 'radio1', name: 'answer', value: 'True' }),
	            'True'
	          ),
	          React.createElement(
	            'label',
	            { htmlFor: 'radio2' },
	            React.createElement('input', { type: 'radio', id: 'radio2', name: 'answer', value: 'False' }),
	            'False'
	          ),
	          React.createElement(
	            'b',
	            { id: 'AnswerError', className: 'error invis' },
	            'An answer is required.'
	          ),
	          React.createElement(
	            'button',
	            { ref: 'formSubmit', type: 'submit' },
	            'Submit'
	          )
	        )
	      );
	    }
	  }]);

	  return Quiz;
	})(React.Component);

	exports['default'] = Quiz;

	if (isNode) {
	  exports.Quiz = Quiz;
	}
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/thomas.kim/Sites/dryrun2/dryrun/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Quiz.jsx" + ": " + err.message); } }); } } })(); }

/***/ }

/******/ });