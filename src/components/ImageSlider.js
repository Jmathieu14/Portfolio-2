import React from 'react';
import Slider from 'react-slick';
import '../assets/sass/image-slider.sass';
const { genKey } = require('./Utility');

class ImageSlider extends React.Component {
    constructor(props) {
        super(props);
        this.specs = props.specs;
        this.images = this.specs.images;
        this.slider = null;
        this.id = props.id;
        this.settings = {
            dots: true,
            arrows: true
        }
    }
    componentDidMount() {
        // $('#' + this.id).slick(this.settings);
    }
    render() {
        console.log('rendering image-slider...');
        let imageElements = this.images.map((obj) =>
            <div key={genKey(obj.text)}>
                <img alt={obj.text} src={obj.path} />
            </div>
        );
        return (
            <div id={this.id} className="ec-image-slider container">
                <Slider {...this.settings}>
                    {imageElements}
                </Slider>
            </div>
        );
    }
}

export default ImageSlider;
