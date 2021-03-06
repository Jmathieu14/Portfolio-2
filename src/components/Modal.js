import ImageSlider from './ImageSlider';
const React = require('react');
const { genKey, checkObjAndKey } = require('./Utility');

class BottomSpawnModal extends React.Component {
    constructor(props) {
        super(props);
        this.specs = props.specs;
        this.state = props.state;
        this.toggleState = this.toggleState.bind(this);
    }
    toggleState() {
        this.setState({ show: !this.state.show });
    }
    getStyle() {
        if (checkObjAndKey(this.specs, 'style')) {
            return this.specs['style'];
        }
    }
    getTitle() {
        if (checkObjAndKey(this.specs, 'title')) {
            return this.specs['title'];
        }
        return "";
    }
    getClassName() {
        const baseCName = "bottom-spawn-modal";
        if (this.state.show) {
            return baseCName + " show";
        }
        return baseCName;
    }
    getCloseImagePath() {
        if (checkObjAndKey(this.specs, 'close')) {
            return this.specs['close'];
        }
    }
    render() {
        let imageSlider = null;
        if (checkObjAndKey(this.specs, 'imageSliderSpecs') && this.specs.imageSliderSpecs !== null) {
            imageSlider = <ImageSlider specs={this.specs.imageSliderSpecs}
            id={genKey("IMAGE_SLIDER")} 
            key={genKey("IMAGE_SLIDER_KEY")}
            />
        }        
        return (
            <span className={this.getClassName()} style={this.getStyle()}>
                <span className="bs-modal-menu-bar">
                    <span className="bs-modal-header">
                        {this.getTitle()}
                    </span>
                    <span className="bs-modal-close" onClick={this.toggleState}>
                        <img src={this.getCloseImagePath()}>
                        </img>
                    </span>
                </span>
                <span className="bs-modal-content">
                    {imageSlider}
                </span>
            </span>
        );
    }
}

export default BottomSpawnModal;
