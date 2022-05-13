import React, { useEffect } from 'react';
import { ANGULAR_DIVIDER_WRAPPER_CLASS_NAME } from './constants';
import { getAngularDividerClassName } from './functions';
import './index.sass';

const AngularDivider = ({
    divOrientation,
    backgroundColor
}) => {
    const element = React.createRef();

    const resizeDivider = () => {
        let divider = element.current;
        if (divider != null) {
            divider.style.width = "0px";
            const wrapper = divider.parentElement;
            const dividerBorderHeight = wrapper.clientHeight - divider.clientHeight;
            const borderLeftRightText = wrapper.clientWidth + 'px solid black';
            divider.style.borderTop = dividerBorderHeight + 'px solid transparent';
            if (divider.className.indexOf("-rev") > 0) {
                divider.style.borderLeft = borderLeftRightText;
            } else {
                divider.style.borderRight = borderLeftRightText;
            }
        }
    }

    useEffect(() => {
        resizeDivider();
    });

    return (
        <div
            className={ANGULAR_DIVIDER_WRAPPER_CLASS_NAME}
            style={{ backgroundColor: backgroundColor }}
        >
            <div
                className={getAngularDividerClassName(divOrientation)}
                ref={element}
            />
        </div>
    );
};

export default AngularDivider;
