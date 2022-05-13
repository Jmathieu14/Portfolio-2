import React, { useEffect } from 'react';
import { getAngularDividerClassName } from './functions';

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
        <div className='ang-div-wrapper' style={{ backgroundColor: backgroundColor }}>
            <div
                className={getAngularDividerClassName(divOrientation)}
                ref={element}
            />
        </div>
    );
};

export default AngularDivider;
