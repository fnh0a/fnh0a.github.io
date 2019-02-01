var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var Clock = function (_React$Component) {_inherits(Clock, _React$Component);
  function Clock(props) {_classCallCheck(this, Clock);var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this,
    props));
    _this.state = {
      sessionLength: 25,
      breakLength: 5,
      leftMinutes: 25,
      leftSeconds: 0,
      timerMode: true,
      timerStatus: true };

    _this.sessionDecrement = _this.sessionDecrement.bind(_this);
    _this.sessionIncrement = _this.sessionIncrement.bind(_this);
    _this.breakDecrement = _this.breakDecrement.bind(_this);
    _this.breakIncrement = _this.breakIncrement.bind(_this);
    _this.timerStartStop = _this.timerStartStop.bind(_this);
    _this.resetClock = _this.resetClock.bind(_this);return _this;
  }_createClass(Clock, [{ key: "sessionDecrement", value: function sessionDecrement()
    {
      if (this.state.sessionLength > 1) {
        this.setState({
          sessionLength: this.state.sessionLength - 1,
          leftMinutes: this.state.leftMinutes - 1,
          leftSeconds: 0 });

      }
    } }, { key: "sessionIncrement", value: function sessionIncrement()

    {
      if (this.state.sessionLength < 60) {
        this.setState({
          sessionLength: this.state.sessionLength + 1,
          leftMinutes: this.state.leftMinutes + 1,
          leftSeconds: 0 });

      }
    } }, { key: "breakDecrement", value: function breakDecrement()

    {
      if (this.state.breakLength > 1) {
        this.setState({
          breakLength: this.state.breakLength - 1 });

      }
    } }, { key: "breakIncrement", value: function breakIncrement()

    {
      if (this.state.breakLength < 60) {
        this.setState({
          breakLength: this.state.breakLength + 1 });

      }
    } }, { key: "startSound", value: function startSound()

    {
      var audio = document.getElementById("beep");
      audio.play();
    } }, { key: "stopSound", value: function stopSound()

    {
      var audio = document.getElementById("beep");
      audio.pause();
    } }, { key: "timerStartStop", value: function timerStartStop()

    {var _this2 = this;
      this.setState({
        timerStatus: !this.state.timerStatus });


      if (this.state.timerStatus == true) {
        this.interval = setInterval(function () {
          var minutes = _this2.state.leftMinutes;
          var seconds = _this2.state.leftSeconds;
          if (minutes != 0 && seconds == 0) {
            minutes--;
            seconds = 59;
          } else if (minutes == 0 && seconds == 0) {
            _this2.startSound();
            _this2.setState({
              timerMode: !_this2.state.timerMode });

            _this2.state.timerMode == true ? (
            minutes = _this2.state.sessionLength, seconds = 0) : (
            minutes = _this2.state.breakLength, seconds = 0);
          } else {
            seconds--;
          }
          _this2.setState({
            leftMinutes: minutes,
            leftSeconds: seconds });

        }, 1000);
      } else {
        clearInterval(this.interval);
      }
    } }, { key: "resetClock", value: function resetClock()

    {
      this.stopSound();
      this.setState({
        sessionLength: 25,
        breakLength: 5,
        leftMinutes: 25,
        leftSeconds: 0,
        timerMode: true,
        timerStatus: true });

    } }, { key: "render", value: function render()

    {
      return (
        React.createElement("div", { className: "app-container" },
          React.createElement("div", { className: "time-container" },
            React.createElement("h1", { className: "appName" }, "Pomodoro Clock"),
            React.createElement("div", { className: "timer-pad" },
              React.createElement("h2", { id: "timer-label" },
                this.state.timerMode == true ? "session" : "break"),

              React.createElement("span", { id: "time-left" },
                this.state.leftMinutes >= 10 ?
                this.state.leftMinutes :
                "0" + this.state.leftMinutes, ":", this.state.leftSeconds >= 10 ?
                this.state.leftSeconds :
                "0" + this.state.leftSeconds)),


            React.createElement("div", { className: "buttons-panel" },
              React.createElement("button", {
                  id: "start_stop",
                  className: "btn btn1 pull-left",
                  onClick: this.timerStartStop },

                React.createElement("i", { "class": "fa fa-play" }),
                React.createElement("i", { "class": "fa fa-pause" })),

              React.createElement("button", {
                  id: "reset",
                  className: "btn btn1 pull-right",
                  onClick: this.resetClock },

                React.createElement("i", { "class": "fa fa-refresh" })),

              React.createElement("audio", {
                id: "beep",
                src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" }))),


          React.createElement("div", { className: "lengthControl-container" },
            React.createElement("div", { className: "session-pad" },
              React.createElement("h3", { id: "session-label" }, "session length"),

              React.createElement("button", {
                  id: "session-decrement",
                  className: "btn btn2 pull-left",
                  onClick: this.sessionDecrement }, "-"),


              React.createElement("p1", { id: "session-length" }, this.state.sessionLength),
              React.createElement("button", {
                  id: "session-increment",
                  className: "btn btn2 pull-right",
                  onClick: this.sessionIncrement }, "+")),


            React.createElement("div", { className: "break-pad" },
              React.createElement("h3", { id: "break-label" }, "break length"),

              React.createElement("button", {
                  id: "break-decrement",
                  className: "btn btn2 pull-left",
                  onClick: this.breakDecrement }, "-"),


              React.createElement("p2", { id: "break-length" }, this.state.breakLength),
              React.createElement("button", {
                  id: "break-increment",
                  className: "btn btn2 pull-right",
                  onClick: this.breakIncrement }, "+"))),


          React.createElement("div", { "class": "footer" }, "by ",
            React.createElement("a", { href: "https://codepen.io/dashboard/" }, "fangni"))));


    } }]);return Clock;}(React.Component);


ReactDOM.render(React.createElement(Clock, null), document.getElementById("root"));
