var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var placeholder = "# This is a markdown\n\n----\n## Just practice by doing\n\n### Some list items:\r\n  * Seattle\r\n  * Belleuve\r\n  * Sammamish\r\n  * Issaquah\r\n  * Redmond\n\n\n Make it **bold** or make it*italic*\n\n Create a links [FCC](https://www.freecodecamp.com).\n\n And feel free to go crazy~~strikethrough~~.";var
App = function (_React$Component) {_inherits(App, _React$Component);
    function App(props) {_classCallCheck(this, App);var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
        props));
        _this.state = {
            userInput: placeholder };

        _this.handleUserInput = _this.handleUserInput.bind(_this);
        _this.getPreview = _this.getPreview.bind(_this);return _this;
    }_createClass(App, [{ key: "handleUserInput", value: function handleUserInput(

        e) {
            this.setState({
                userInput: e.target.value });

        } }, { key: "getPreview", value: function getPreview()

        {
            return { __html: marked(this.state.userInput) };
        } }, { key: "render", value: function render()

        {
            return (
                React.createElement("div", null,
                    React.createElement("div", { id: "name" }, "Markdown Previewer"),

                    React.createElement("div", { id: "reminder" }, "Type here"),

                    React.createElement("div", { className: "row" },

                        React.createElement("textarea", { id: "editor", className: "col-sm-6", type: "text", value: this.state.userInput, onChange: this.handleUserInput }),


                        React.createElement("div", { id: "preview", className: "col-sm-6", dangerouslySetInnerHTML: this.getPreview() })),


                    React.createElement("div", { className: "footer" }, " by ", React.createElement("a", { href: "https://codepen.io/dashboard/" }, "fangni"))));


        } }]);return App;}(React.Component);


ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
