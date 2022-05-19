import React, { useEffect } from 'react';
import { ANGULAR_DIVIDER_WRAPPER_CLASS_NAME } from './constants';
import { getAngularDividerClassName, resizeAngularDivider } from './functions';
import './index.sass';

const AngularDivider = ({
    divOrientation,
    backgroundColor
}) => {
    const element = React.createRef();

    useEffect(() => {
        resizeAngularDivider(element.current, divOrientation);
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
