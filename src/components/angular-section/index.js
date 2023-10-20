import React, { useState } from 'react';
import PropTypes from 'prop-types';
import store from '../../store';
import { SectionLinksHeader } from '../SectionLink';
import SectionLink from '../section-link';
import { genKey } from '../Utility';
import BannerStore from '../../store/page-layout/section-list/angular-section/banner';
import { MouseEventEnum } from '../../model/mouseEvent';
import AngularDivider from '../angular-divider';

const getSectionLinkList = (name) => {
    return name ? store.pageLayout.sectionList.getSection(name)?.sectionLinkList : [];
}

const AngularSection = ({
    name,
    hoverBackgroundColor,
    banner,
    dividerOrientation
}) => {
    const [backgroundColor, setBackgroundColor] = useState(null);
    const [sectionLinkList] = useState(getSectionLinkList(name));
    const handleHoverState = (mouseEvent) => {
        setBackgroundColor(mouseEvent === MouseEventEnum.Enter ? hoverBackgroundColor : null);
    }

    const sectionLinks = sectionLinkList.map((sectionLinkStore) => {
        const key = genKey(sectionLinkStore?.name);
        return React.createElement(SectionLink, { key: key, sectionLinkStore: sectionLinkStore })
    });

    return (
        <>
            <div id={name}
                className="angular-section"
                onMouseEnter={() => handleHoverState(MouseEventEnum.Enter)}
                onMouseLeave={() => handleHoverState(MouseEventEnum.Leave)}
                style={backgroundColor ? { backgroundColor: backgroundColor } : null}
            >
                <div className="angular-content">
                    {banner.getBannerHTML()}
                    <div className="section-links-wrapper">
                        <SectionLinksHeader />
                        {sectionLinks}
                    </div>
                </div>
            </div>
            <AngularDivider backgroundColor={backgroundColor} dividerOrientation={dividerOrientation} />
        </>
    );
};

AngularSection.propTypes = {
    name: PropTypes.string,
    banner: PropTypes.shape(BannerStore)
};

export default AngularSection;