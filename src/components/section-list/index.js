import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import AngularSection from '../angular-section/index';
import store from '../../store';
import { observer } from 'mobx-react';
const { genKey, redirectToGitHubPages, SECT_LIST_CLASS } = require('../Utility');

let counter = 0;

function SectionList() {
    const [sections] = useState(store.pageLayout.sectionList.sections);
    const dividerOrientation = () => {
        if (counter % 2 === 0) {
            return "rev";
        }
        counter++;
        return "";
    }
    return (
        <>
            <section>
                {
                    sections.map(section =>
                        <AngularSection
                            key={genKey(section.name)}
                            name={section.name}
                            hoverBackgroundColor={section.hoverBackgroundColor}
                            banner={section.banner}
                            dividerOrientation={dividerOrientation()}
                        />
                    )
                }
            </section>
        </>
    )
}

SectionList.propTypes = {
}

export default observer(SectionList);
