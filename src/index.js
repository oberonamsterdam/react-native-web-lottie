import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { View } from 'react-native';
import lottie from 'lottie-web';

class Animation extends PureComponent {
  animationDOMNode = null;

  componentDidMount() {
    this.loadAnimation(this.props);

    if (typeof this.props.progress === 'object' && this.props.progress._listeners) {
      this.anim.currentFrame = this.calculateFrame(this.props.progress._startingValue);
      this.props.progress.addListener((progress) => {
        const { value } = progress;
        const frame = this.calculateFrame(value);
        this.anim.goToAndStop(frame, true);
      });
    }
  }

  componentWillUnmount() {
    if (typeof this.props.progress === 'object' && this.props.progress._listeners) {
      this.props.progress.removeAllListeners();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.source && prevProps.source && this.props.source.nm !== prevProps.source.nm) {
      this.loadAnimation(this.props);
    }
  }

  calculateFrame = (value) => {
    return Math.max(0, value / (1 / this.anim.getDuration(true)) - 1);
  }

  loadAnimation = (props) => {
    if (this.anim) {
      this.anim.destroy();
    }

    this.anim = lottie.loadAnimation({
      container: this.animationDOMNode,
      animationData: props.source,
      renderer: 'svg',
      loop: props.loop || false,
      autoplay: props.autoPlay,
      rendererSettings: props.rendererSettings || {},
    });

    if (props.onAnimationFinish) {
      this.anim.addEventListener('complete', props.onAnimationFinish);
    }
  };

  setAnimationDOMNode = (ref) => (this.animationDOMNode = ReactDOM.findDOMNode(ref));

  play = (...frames) => {
    if (!this.anim) {
      return;
    }

    this.anim.playSegments(frames, true);
  };

  reset = () => {
    if (!this.anim) {
      return;
    }

    this.anim.stop();
  };

  render() {
    return <View style={this.props.style} ref={this.setAnimationDOMNode} />;
  }
}

export default React.forwardRef((props, ref) => (
  <Animation {...props} ref={typeof ref == 'function' ? (c) => ref(c && c.anim) : ref} />
));
