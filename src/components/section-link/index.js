import { observer } from 'mobx-react';
import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import SectionLinkStore from '../../store/page-layout/section-list/angular-section/section-link';

const SectionLink = ({
    sectionLinkStore
}) => {
    const arrowStyle = useState({ width: "0.5rem" });
    const getArrowId = () => {
        return `${sectionLinkStore?.name.replace(' ', '-')}-arrow`;
    }
    return (<>
        {
            <div className='section-link'>
                <a href={sectionLinkStore?.url}>
                    <img
                        alt={sectionLinkStore?.name}
                        src={sectionLinkStore?.logo}
                    />
                </a>
                {/* style={arrowStyle} */}
                <div id={getArrowId()} className="sl-hover-arrow">
                </div>
            </div>
        }
    </>);
};

SectionLink.propTypes = {
    sectionLinkStore: PropTypes.shape(SectionLinkStore)
};

export default observer(SectionLink);