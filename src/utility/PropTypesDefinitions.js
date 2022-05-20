import PropTypes from 'prop-types';

export const IMAGE_SLIDER_SPECS_SHAPE = PropTypes.shape({
    images: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    )
});

export const EXPANDABLE_CONTENT_SPECS_SHAPE = PropTypes.shape({
    show: PropTypes.bool.isRequired,
    icon: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    imageSliderSpecs: IMAGE_SLIDER_SPECS_SHAPE
});
