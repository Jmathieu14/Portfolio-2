import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import ImageSlider from '../ImageSlider';
import { genKey } from '../Utility';
import { EXPANDABLE_CONTENT_SPECS_SHAPE } from '../../utility/PropTypesDefinitions';
import store from '../../store';

const ExpandableContent = ({
    expandableContentSpecs,
}) => {
    const [showContent, setShowContent] = useState(expandableContentSpecs?.show);
    const [imageSlider, setImageSlider] = useState();
    const getClassName = () => {
        if (store.expandableContent.contentExpanded) {
            return "expandable-content-wrapper expanded";
        } else return "expandable-content-wrapper";
    }

    useEffect(() => {
        if (expandableContentSpecs?.imageSliderSpecs) setShowContent(expandableContentSpecs?.show);
        if (showContent) {
            setImageSlider(
                <ImageSlider specs={expandableContentSpecs?.imageSliderSpecs}
                    id={genKey("IMAGE_SLIDER")}
                    key={genKey("IMAGE_SLIDER_KEY")}
                />
            );
        }
    }, [expandableContentSpecs.imageSliderSpecs, expandableContentSpecs.show, showContent]);

    return (
        <div className={getClassName()}>
            <div className="ec-menu-bar">
                <button onClick={() => { }} className="ec-button">
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
};

export default observer(ExpandableContent);
