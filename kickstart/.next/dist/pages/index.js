'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/basedgod/Documents/kickstart/pages/index.js?entry';


var CampaignIndex = function (_Component) {
    (0, _inherits3.default)(CampaignIndex, _Component);

    function CampaignIndex() {
        (0, _classCallCheck3.default)(this, CampaignIndex);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignIndex, [{
        key: 'renderCampaigns',
        value: function renderCampaigns() {
            var items = this.props.campaigns.map(function (address) {
                return {
                    header: address,
                    description: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 19
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 20
                        }
                    }, 'View Campaign')),
                    fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, 'Open Campaigns'), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                floated: 'right',
                content: 'Create Campaign',
                icon: 'add circle',
                primary: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }))), this.renderCampaigns()));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var campaigns;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.getDeployedCampaigns().call();

                            case 2:
                                campaigns = _context.sent;
                                return _context.abrupt('return', { campaigns: campaigns });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignIndex;
}(_react.Component);

;

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsImZhY3RvcnkiLCJMYXlvdXQiLCJMaW5rIiwiQ2FtcGFpZ25JbmRleCIsIml0ZW1zIiwicHJvcHMiLCJjYW1wYWlnbnMiLCJtYXAiLCJoZWFkZXIiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlckNhbXBhaWducyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNOztBQUNmLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOzs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7MENBT2dCLEFBQ2Q7Z0JBQU0sYUFBUSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLElBQUksbUJBQVcsQUFDOUM7OzRCQUFNLEFBQ00sQUFDUjtpREFDSSxBQUFDLDhCQUFLLHVCQUFOLEFBQTJCO3NDQUEzQjt3Q0FBQSxBQUNJO0FBREo7cUJBQUEsa0JBQ0ksY0FBQTs7c0NBQUE7d0NBQUE7QUFBQTtBQUFBLHVCQUpOLEFBR0UsQUFDSSxBQUtSOzJCQVRKLEFBQU0sQUFTSyxBQUVkO0FBWFMsQUFDRjtBQUZSLEFBQWMsQUFjZCxhQWRjOztpREFjUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBUCxBQUFPLEFBQ1Y7QUFEVTthQUFBOzs7O2lDQUdGLEFBRUw7O21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDQTtBQURBO0FBQUEsK0JBQ0EsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREEsQUFDQSxBQUVBLG1DQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZOzhCQUFaO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDO3lCQUFELEFBQ1ksQUFDUjt5QkFGSixBQUVZLEFBQ1I7c0JBSEosQUFHUyxBQUNMO3lCQUpKOzs4QkFBQTtnQ0FMUixBQUdBLEFBQ0ksQUFDSSxBQVFQO0FBUk87QUFDSSx1QkFScEIsQUFDSSxBQUNJLEFBYUMsQUFBSyxBQUlqQjs7Ozs7Ozs7Ozs7O3VDQTNDMkIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHVCQUFoQixBQUF1QyxBOztpQ0FBekQ7QTtpRUFDQyxFQUFFLFdBQUYsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBLEFBSmE7O0FBK0MzQixBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2Jhc2VkZ29kL0RvY3VtZW50cy9raWNrc3RhcnQifQ==