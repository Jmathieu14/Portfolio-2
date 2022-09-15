import React, { useState } from 'react';
import PropTypes from 'prop-types';
import store from '../../store';
import { SectionLinksHeader } from '../SectionLink';
import SectionLink from '../section-link';
import { genKey } from '../Utility';
import BannerStore from '../../store/page-layout/section-list/angular-section/banner';

const AngularSection = ({
    name,
    hoverBackgroundColor,
    banner,
    expandableContentSpecs,
    dividerOrientation,
    state,
    prevSectionLinkPriority,
}) => {
    const childSetParentSectBGAndHoverText = () => { };
    const expandableContentExpanded = useState(store.expandableContent.contentExpanded);

    const handleHoverState = () => {

    }

    const getSectionLinkList = () => {
        return name ? store.pageLayout.sectionList.getSection(name)?.sectionLinkList : [];
    }

    const sectionLinks = getSectionLinkList().map((sectionLinkStore) =>
        <SectionLink key={genKey(sectionLinkStore?.name)} sectionLinkStore={sectionLinkStore} />);
    return (
        <>
            <div id={name} className="angular-section">
                <div className="angular-content">
                    {banner.getBannerHTML()}
                    <div className="section-links-wrapper">
                        <SectionLinksHeader />
                        {sectionLinks}
                    </div>
                </div>
            </div>
        </>
    );
};

AngularSection.propTypes = {
    name: PropTypes.string,
    banner: PropTypes.shape(BannerStore)
};

export default AngularSection;