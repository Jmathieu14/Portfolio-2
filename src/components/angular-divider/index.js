import React, { useEffect } from 'react';
import { ANGULAR_DIVIDER_WRAPPER_CLASS_NAME } from './constants';
import { getAngularDividerClassName, resizeAngularDivider } from './functions';
import './index.sass';

const AngularDivider = ({
    dividerOrientation,
    backgroundColor
}) => {
    const element = React.createRef();

    useEffect(() => {
        resizeAngularDivider(element.current, dividerOrientation);
    });

    return (
        <div
            className={ANGULAR_DIVIDER_WRAPPER_CLASS_NAME}
            style={{ backgroundColor: backgroundColor }}
        >
            <div
                className={getAngularDividerClassName(dividerOrientation)}
                ref={element}
            />
        </div>
    );
};

export default AngularDivider;
