import React, { useState } from 'react';
import PropTypes from 'prop-types';
import store from '../../store';
import { SectionLinksHeader } from '../SectionLink';

const AngularSection = ({
    name,
    hoverBackgroundColor,
    banner,
    expandableContentSpecs,
    sectionLinks,
    dividerOrientation,
    state,
    prevSectionLinkPriority,
}) => {
    const childSetParentSectBGAndHoverText = () => { };
    const expandableContentExpanded = useState(store.expandableContent.contentExpanded);

    const handleHoverState = () => {

    }
    return (
        <>
            <div id={name} className="angular-section">
                <div className="angular-content">
                    {banner.getBannerHTML()}
                    <div className="section-links-wrapper">
                        <SectionLinksHeader />
                    </div>
                </div>
            </div>
        </>
    );
};

AngularSection.propTypes = {};

export default AngularSection;