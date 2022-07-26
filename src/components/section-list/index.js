import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import AngularSection from '../angular-section/index';
import store from '../../store';
import { observer } from 'mobx-react';
const { genKey, redirectToGitHubPages, SECT_LIST_CLASS } = require('../Utility');

function SectionList() {
    const [sections] = useState(store.pageLayout.sectionList.sections);

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
