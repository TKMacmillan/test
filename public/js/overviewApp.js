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

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react/addons\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	    Chart = __webpack_require__(182),
	    StudentList = __webpack_require__(183);

	var OverviewApp = (function (_React$Component) {
	  _inherits(OverviewApp, _React$Component);

	  function OverviewApp(props) {
	    _classCallCheck(this, OverviewApp);

	    _get(Object.getPrototypeOf(OverviewApp.prototype), 'constructor', this).call(this, props);
	    this.state = quizStore.getState();
	    this.onChange = this.onChange.bind(this);
	  }

	  _createClass(OverviewApp, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      quizStore.listen(this.onChange);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      quizStore.unlisten(this.onChange);
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange(state) {
	      this.setState(state);
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      // Scrub the data before rendering.
	      // TODO: Removing the data-scrubbing code to another function outside of render().
	      var lineData = {},
	          scrubbedLineData = {},
	          pass = 0,
	          fail = 0,
	          total = 0,
	          count = 0;

	      for (var i = 0; i < this.state.quiz.length; i++) {
	        this.state.quiz[i].create_time = this.state.quiz[i].create_time.replace('T', ' ');
	        this.state.quiz[i].create_time = this.state.quiz[i].create_time.substring(0, this.state.quiz[i].create_time.lastIndexOf('-') - 2) + '00';
	        if (typeof lineData[this.state.quiz[i].create_time] !== 'undefined') {
	          lineData[this.state.quiz[i].create_time] = lineData[this.state.quiz[i].create_time] + 1;
	        } else {
	          lineData[this.state.quiz[i].create_time] = 1;
	        }
	        if (this.state.quiz[i].rating === 'Fail') {
	          fail++;
	        } else {
	          pass++;
	        }
	        count++;
	      }

	      scrubbedLineData.columns = [['x'], ['# of Students']];
	      for (var index in lineData) {
	        if (lineData.hasOwnProperty(index)) {
	          scrubbedLineData.columns[0].push(index);
	          scrubbedLineData.columns[1].push(total + parseInt(lineData[index], 10));
	          total = total + parseInt(lineData[index], 10);
	        }
	      }

	      var pieChartData = { columns: [['correct', parseInt(pass / total * 100, 10)], ['incorrect', 100 - parseInt(pass / total * 100, 10)]] };

	      // Percentage of students that have taken the test.
	      var gaugeChartData = {
	        columns: [['data', parseInt(count / 30 * 100, 10)]]
	      };

	      return React.createElement(
	        'div',
	        { className: 'mdl-grid demo-content' },
	        React.createElement(
	          'div',
	          { className: 'demo-charts mdl-color--white mdl-cell mdl-cell--3-col mdl-grid mdl-shadow--2dp' },
	          React.createElement(
	            'h3',
	            null,
	            'Attendance'
	          ),
	          React.createElement(
	            'div',
	            { id: 'Gauge' },
	            React.createElement(Chart, { data: gaugeChartData, type: 'gauge', element: 'Gauge' }),
	            ','
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'demo-charts mdl-color--white mdl-cell mdl-cell--6-col mdl-grid mdl-shadow--2dp' },
	          React.createElement(
	            'h3',
	            null,
	            'Volume'
	          ),
	          React.createElement(
	            'div',
	            { id: 'Line' },
	            React.createElement(Chart, { data: scrubbedLineData, type: 'Line', element: 'Line' }),
	            ','
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'demo-charts mdl-color--white mdl-cell mdl-cell--3-col mdl-grid mdl-shadow--2dp' },
	          React.createElement(
	            'h3',
	            null,
	            'Pass/Fail Ratio'
	          ),
	          React.createElement(
	            'div',
	            { id: 'Pie' },
	            React.createElement(Chart, { data: pieChartData, type: 'pie', element: 'Pie' }),
	            ','
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'mdl-color--white mdl-cell mdl-cell--12-col mdl-grid mdl-shadow--2dp' },
	          React.createElement(
	            'h3',
	            null,
	            'Students'
	          ),
	          React.createElement(
	            'div',
	            { id: 'People' },
	            React.createElement(StudentList, { students: this.state.quiz })
	          )
	        )
	      );
	    }
	  }]);

	  return OverviewApp;
	})(React.Component);

	React.render(React.createElement(OverviewApp, null), document.querySelector('.mdl-layout__content'));

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/thomas.kim/Sites/dryrun2/dryrun/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "OverviewApp.jsx" + ": " + err.message); } }); } } })(); }

/***/ },

/***/ 182:
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
	    React = isNode ? __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react/addons\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) : window.React;

	/**
	 * React-C3 Chart
	 * Copyright 2015 - Cody Reichert <codyreichert@gmail.com>
	 * Updated to use React v.0.13 - Thomas Kim
	 */

	var ChartComponent = (function (_React$Component) {
	  _inherits(ChartComponent, _React$Component);

	  function ChartComponent(props) {
	    _classCallCheck(this, ChartComponent);

	    _get(Object.getPrototypeOf(ChartComponent.prototype), 'constructor', this).call(this, props);
	    this.chart = null;
	  }

	  _createClass(ChartComponent, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      if (this.props.data.columns.length !== nextProps.data.columns.length) {
	        // shallow check
	        return true;
	      } else if (JSON.stringify(this.props.data.columns) !== JSON.stringify(nextProps.data.columns)) {
	        // deeper check
	        return true;
	      }
	      return false;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.type === 'pie') {
	        this._generateChart(this.props.data.columns, this.props.type, this.props.element);
	        Relay.isPieChartMounted = true;
	      } else if (this.props.type === 'gauge') {
	        this._generateChart(this.props.data.columns, this.props.type, this.props.element);
	        Relay.isGaugeChartMounted = true;
	      } else {
	        this._generateVolumeChart(this.props.data.columns, this.props.type, this.props.element);
	        Relay.isVolumeChartMounted = true;
	      }
	      Relay.update();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (prevProps.data.columns !== this.props.data.columns) {
	        if (this.props.type === 'pie' || this.props.type === 'gauge') {
	          this._generateChart(this.props.data.columns, this.props.type, this.props.element);
	        } else {
	          this._generateVolumeChart(this.props.data.columns, this.props.type, this.props.element);
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this._destroyChart();
	    }
	  }, {
	    key: '_generateVolumeChart',
	    value: function _generateVolumeChart(columns, type, element) {
	      this.chart = c3.generate({
	        bindto: '#' + element,
	        data: {
	          x: 'x',
	          columns: columns,
	          type: 'area',
	          xFormat: '%Y-%m-%d %H:%M:%S'
	        },
	        axis: {
	          x: {
	            type: 'timeseries',
	            tick: {
	              rotate: 75
	            }
	          }
	        },
	        color: {
	          pattern: ['#56b6c5']
	        }
	      });
	    }
	  }, {
	    key: '_generateChart',
	    value: function _generateChart(columns, type, element) {
	      this.chart = c3.generate({
	        bindto: '#' + element,
	        data: {
	          columns: columns,
	          type: type
	        },
	        color: {
	          pattern: ['#56bbca', '#154655']
	        }
	      });
	    }
	  }, {
	    key: '_destroyChart',
	    value: function _destroyChart() {
	      this.chart.destroy();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement('div', { className: 'c3 react-c3', id: this.props.element, style: this.props.styles });
	    }
	  }]);

	  return ChartComponent;
	})(React.Component);

	exports['default'] = ChartComponent;

	ChartComponent.propTypes = {
	  data: React.PropTypes.object.isRequired,
	  element: React.PropTypes.string.isRequired,
	  type: React.PropTypes.string.isRequired
	};

	if (isNode) {
	  exports.ChartComponent = ChartComponent;
	}
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/thomas.kim/Sites/dryrun2/dryrun/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Chart.jsx" + ": " + err.message); } }); } } })(); }

/***/ },

/***/ 183:
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

	var StudentList = (function (_React$Component) {
	  _inherits(StudentList, _React$Component);

	  function StudentList(props) {
	    _classCallCheck(this, StudentList);

	    _get(Object.getPrototypeOf(StudentList.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(StudentList, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      Relay.isStudentListMounted = true;
	      Relay.update();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var students = this.props.students.map((function (student, index) {
	        return React.createElement(
	          'li',
	          { key: index },
	          student.name,
	          React.createElement(
	            'em',
	            { className: student.rating },
	            student.rating
	          )
	        );
	      }).bind(this));
	      return React.createElement(
	        'ul',
	        null,
	        React.createElement(
	          ReactCSSTransitionGroup,
	          { transitionName: 'student', transitionAppear: true },
	          students
	        )
	      );
	    }
	  }]);

	  return StudentList;
	})(React.Component);

	exports['default'] = StudentList;

	if (isNode) {
	  exports.StudentList = StudentList;
	}
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/thomas.kim/Sites/dryrun2/dryrun/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "StudentList.jsx" + ": " + err.message); } }); } } })(); }

/***/ }

/******/ });