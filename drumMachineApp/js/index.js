var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var projectName = "drum-machine";

var drumPadSets = [
{
  drumKey: "Q",
  name: "Heater-1",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },

{
  drumKey: "W",
  name: "Heater-2",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },

{
  drumKey: "E",
  name: "Heater-3",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },

{
  drumKey: "A",
  name: "Heater-4",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },

{
  drumKey: "S",
  name: "Clap",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },

{
  drumKey: "D",
  name: "Open-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },

{
  drumKey: "Z",
  name: "Kick-n'-Hat",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },

{
  drumKey: "X",
  name: "Kick",
  url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },

{
  drumKey: "C",
  name: "Closed-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }];var



DrumPad = function (_React$Component) {_inherits(DrumPad, _React$Component);
  function DrumPad(props) {_classCallCheck(this, DrumPad);var _this = _possibleConstructorReturn(this, (DrumPad.__proto__ || Object.getPrototypeOf(DrumPad)).call(this,
    props));

    _this.drumClick = _this.drumClick.bind(_this);return _this;
  }_createClass(DrumPad, [{ key: "drumClick", value: function drumClick()

    {
      if (this.props.power) {
        var audio = document.getElementById(this.props.drumKey);
        audio.play();
        this.props.updateText(this.props.name);
      }
    } }, { key: "render", value: function render()

    {
      return (
        React.createElement("div", {
            key: this.props.drumKey,
            className: "drum-pad",
            onClick: this.drumClick },

          this.props.drumKey,
          React.createElement("audio", { className: "clip", id: this.props.drumKey, name: this.props.name },
            React.createElement("source", { src: this.props.url, type: "audio/mp3" }))));



    } }]);return DrumPad;}(React.Component);var


DrumSet = function (_React$Component2) {_inherits(DrumSet, _React$Component2);
  function DrumSet(props) {_classCallCheck(this, DrumSet);return _possibleConstructorReturn(this, (DrumSet.__proto__ || Object.getPrototypeOf(DrumSet)).call(this,
    props));
  }_createClass(DrumSet, [{ key: "render", value: function render()

    {var _this3 = this;
      var drumSet = this.props.drumSetItems.map(function (item) {
        return (
          React.createElement(DrumPad, {
            power: _this3.props.power,
            clipVolume: _this3.props.volumeBar,
            drumKey: item.drumKey,
            name: item.name,
            url: item.url,
            updateText: _this3.props.updateText }));


      });

      return React.createElement("div", { id: "drum-pad-set" }, drumSet);
    } }]);return DrumSet;}(React.Component);var


DrumMachine = function (_React$Component3) {_inherits(DrumMachine, _React$Component3);
  function DrumMachine(props) {_classCallCheck(this, DrumMachine);var _this4 = _possibleConstructorReturn(this, (DrumMachine.__proto__ || Object.getPrototypeOf(DrumMachine)).call(this,
    props));
    _this4.state = {
      power: false,
      display: "Off",
      volumeBar: 0.3 };

    _this4.drumSetItems = drumPadSets;
    _this4.powerClick = _this4.powerClick.bind(_this4);
    _this4.updateText = _this4.updateText.bind(_this4);
    _this4.adjustVolume = _this4.adjustVolume.bind(_this4);return _this4;
  }_createClass(DrumMachine, [{ key: "powerClick", value: function powerClick()

    {
      if (!this.state.power) {
        document.getElementById("btn-power").style.color = "green";
        this.setState({
          power: !this.state.power,
          display: "on" });

      } else {
        document.getElementById("btn-power").style.color = "red";
        this.setState({
          power: this.state.power,
          display: "off" });

      }
      var powerText = this.state.power ? "Off" : "On";
      this.setState({
        power: !this.state.power,
        display: powerText });

    } }, { key: "updateText", value: function updateText(

    text) {
      this.setState({
        display: text });

    } }, { key: "adjustVolume", value: function adjustVolume(

    e) {
      if (this.state.power) {
        this.setState({
          volumeBar: e.target.value,
          display: "Volume: " + Math.round(e.target.value * 100) });

      }
    } }, { key: "render", value: function render()

    {var _this5 = this;
      var clips = [].slice.call(document.getElementsByClassName("clip"));
      clips.forEach(function (sound) {
        sound.volume = _this5.state.volumeBar;
      });
      return (
        React.createElement("div", { id: "drum-machine", className: "machine-body" },
          React.createElement("div", { id: "title" }, "Drum Machine"),
          React.createElement("div", { id: "control-pad", className: "control-pad" },
            React.createElement("div", {
                id: "btn-power",
                className: "btn control-pad-item",
                onClick: this.powerClick },

              React.createElement("i", { className: "fa fa-power-off" })),

            React.createElement("div", { id: "display", className: "control-pad-item" },
              this.state.display),

            React.createElement("div", { className: "volumeText control-pad-item" }, "volume",
              React.createElement("input", {
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: this.state.volumeBar,
                onChange: this.adjustVolume })),


            React.createElement("div", { className: "footer control-pad-item" }, "by ",
              React.createElement("a", { href: "https://codepen.io/dashboard/" }, "fangni"))),


          React.createElement(DrumSet, {
            power: this.state.power,
            clipVolume: this.state.volumeBar,
            updateText: this.updateText,
            drumSetItems: this.drumSetItems })));



    } }]);return DrumMachine;}(React.Component);


ReactDOM.render(React.createElement(DrumMachine, null), document.getElementById("root"));
