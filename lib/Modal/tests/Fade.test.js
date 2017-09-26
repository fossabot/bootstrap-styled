'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TransitionGroup = require('react-transition-group/TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _Fade = require('../Fade');

var _Fade2 = _interopRequireDefault(_Fade);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Testing our NavBar component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var children = _react2.default.createElement(
  'h1',
  null,
  'test'
);

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _BootstrapProvider2.default,
    null,
    _react2.default.createElement(_Fade2.default, props)
  ));
};

var Helper = function (_React$Component) {
  _inherits(Helper, _React$Component);

  function Helper(props) {
    _classCallCheck(this, Helper);

    var _this = _possibleConstructorReturn(this, (Helper.__proto__ || Object.getPrototypeOf(Helper)).call(this, props));

    _this.toggle = _this.toggle.bind(_this);
    _this.state = {
      showItem: props.showItem
    };
    return _this;
  }

  _createClass(Helper, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({
        showItem: !this.state.showItem
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          { onClick: this.toggle },
          'Toggle'
        ),
        _react2.default.createElement(
          _TransitionGroup2.default,
          { component: 'div' },
          this.state.showItem ? this.props.children : null
        )
      );
    }
  }]);

  return Helper;
}(_react2.default.Component);

Helper.propTypes = {
  showItem: _propTypes2.default.bool,
  children: _propTypes2.default.node
};


describe('<Fade />', function () {
  it('should render an <Fade> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('Fade').length).toBe(1);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('should transition classes from "fade" to "fade show" on appear', function () {
    var isOpen = true;
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      Helper,
      { showItem: isOpen },
      _react2.default.createElement(
        _Fade2.default,
        { key: Math.random() },
        'Yo!'
      ),
      _react2.default.createElement(
        _Fade2.default,
        { transitionAppear: false, transitionEnter: false, transitionLeave: false, key: Math.random() },
        'Yo 2!'
      )
    ));
    expect(renderedComponent.find('div.fade').length).toBe(2);
    expect(renderedComponent.find('div.fade.show').length).toBe(1);
    renderedComponent.find('button').simulate('click');
    expect(renderedComponent.find('div.fade.show').length).toBe(0);
  });
});