import { ANGULAR_DIVIDER_BASE_CLASS_NAME } from './constants';

const getAngularDividerClassName = (dividerOrientation) => {
    if (dividerOrientation && dividerOrientation !== "") {
        return `${ANGULAR_DIVIDER_BASE_CLASS_NAME}-${dividerOrientation}`;
    } else {
        return ANGULAR_DIVIDER_BASE_CLASS_NAME;
    }
}

export { getAngularDividerClassName };
