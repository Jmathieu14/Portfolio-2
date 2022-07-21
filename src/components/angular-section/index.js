import React, { useState } from 'react';
import PropTypes from 'prop-types';
import store from '../../store';

const AngularSection = ({
    name,
    hoverBackground,
    bannerSpecs,
    expandableContentSpecs,
    sectionLinks,
    dividerOrientation,
    state,
    prevSectionLinkPriority,
}) => {
    const sectionRef = React.createRef();
    const childSetParentSectBGAndHoverText = () => { };
    const expandableContentExpanded = useState(store.expandableContent.contentExpanded);

    const handleHoverState = () => {
        
    }
    return (
        <div>AngularSection</div>
    );
};

AngularSection.propTypes = {};

export default AngularSection;