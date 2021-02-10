var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _react=_interopRequireWildcard(require("react"));var _reactDom=_interopRequireDefault(require("react-dom"));var _lottieWeb=_interopRequireDefault(require("lottie-web"));var _jsxFileName="C:\\Users\\rik\\workspace\\react-native-web-lottie\\src\\index.js";function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}var Animation=function(_PureComponent){(0,_inherits2.default)(Animation,_PureComponent);var _super=_createSuper(Animation);function Animation(){var _this;(0,_classCallCheck2.default)(this,Animation);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_this.animationDOMNode=null;_this.calculateFrame=function(value){return Math.max(0,value/(1/_this.anim.getDuration(true))-1);};_this.loadAnimation=function(props){if(_this.anim){_this.anim.destroy();}_this.anim=_lottieWeb.default.loadAnimation({container:_this.animationDOMNode,animationData:props.source,renderer:'svg',loop:props.loop||false,autoplay:props.autoPlay,rendererSettings:props.rendererSettings||{}});if(props.onAnimationFinish){_this.anim.addEventListener('complete',props.onAnimationFinish);}};_this.setAnimationDOMNode=function(ref){return _this.animationDOMNode=_reactDom.default.findDOMNode(ref);};_this.play=function(){if(!_this.anim){return;}for(var _len2=arguments.length,frames=new Array(_len2),_key2=0;_key2<_len2;_key2++){frames[_key2]=arguments[_key2];}_this.anim.playSegments(frames,true);};_this.reset=function(){if(!_this.anim){return;}_this.anim.stop();};return _this;}(0,_createClass2.default)(Animation,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;this.loadAnimation(this.props);if(typeof this.props.progress==='object'&&this.props.progress._listeners){this.anim.currentFrame=this.calculateFrame(this.props.progress._startingValue);this.props.progress.addListener(function(progress){var value=progress.value;var frame=_this2.calculateFrame(value);_this2.anim.goToAndStop(frame,true);});}}},{key:"componentWillUnmount",value:function componentWillUnmount(){if(typeof this.props.progress==='object'&&this.props.progress._listeners){this.props.progress.removeAllListeners();}}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){if(this.props.source&&prevProps.source&&this.props.source.nm!==prevProps.source.nm){this.loadAnimation(this.props);}}},{key:"render",value:function render(){return _react.default.createElement("div",{ref:this.setAnimationDOMNode,__source:{fileName:_jsxFileName,lineNumber:75,columnNumber:12}});}}]);return Animation;}(_react.PureComponent);var _default=_react.default.forwardRef(function(props,ref){return _react.default.createElement(Animation,(0,_extends2.default)({},props,{ref:typeof ref=='function'?function(c){return ref(c&&c.anim);}:ref,__source:{fileName:_jsxFileName,lineNumber:80,columnNumber:3}}));});exports.default=_default;