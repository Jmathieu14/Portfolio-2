import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import ImageSlider from '../ImageSlider';
import { genKey } from '../Utility';
import { EXPANDABLE_CONTENT_SPECS_SHAPE } from '../../utility/PropTypesDefinitions';
import store from '../../store';

const ExpandableContent = ({
    expandableContentSpecs,
    buttonTestId,
    imageSliderTestId
}) => {
    const [showContent, setShowContent] = useState(expandableContentSpecs?.show);
    const [imageSlider, setImageSlider] = useState();
    const getClassName = () => {
        if (store.expandableContent.contentExpanded) {
            return "expandable-content-wrapper expanded";
        } else return "expandable-content-wrapper";
    }

    const handleExpandContent = () => {
        if (expandableContentSpecs?.imageSliderSpecs) setShowContent(!showContent);
    };

    useEffect(() => {
        setShowContent(expandableContentSpecs?.show);
    }, [expandableContentSpecs?.show])

    useEffect(() => {
        if (!expandableContentSpecs?.imageSliderSpecs) {
            setShowContent(false);
        } else if (!showContent && store.expandableContent.contentExpanded) {
            store.expandableContent.resetContentExpanded();
        }
        if (showContent) {
            store.expandableContent.setContentExpanded(this);
            setImageSlider(
                <ImageSlider
                    data-testid={imageSliderTestId}
                    specs={expandableContentSpecs?.imageSliderSpecs}
                    id={genKey("IMAGE_SLIDER")}
                    key={genKey("IMAGE_SLIDER_KEY")}
                />
            );
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [expandableContentSpecs?.imageSliderSpecs, showContent]);

    return (
        <div className={getClassName()}>
            <div className="ec-menu-bar">
                <button
                    className="ec-button"
                    data-testid={buttonTestId}
                    onClick={() => handleExpandContent()}
                >
                    <img
                        alt={expandableContentSpecs?.alt}
                        className="ec-icon"
                        src={expandableContentSpecs?.icon}
                    />
                </button>
            </div>
            <div className="expandable-content">
                {showContent
                    ? imageSlider
                    : null
                }
            </div>
        </div>
    );
}


ExpandableContent.propTypes = {
    expandableContentSpecs: EXPANDABLE_CONTENT_SPECS_SHAPE.isRequired,
    imageSliderTestId: PropTypes.string,
    buttonTestId: PropTypes.string
};

ExpandableContent.defaultProps = {
    buttonTestId: undefined,
    imageSliderTestId: undefined
};

export default observer(ExpandableContent);
