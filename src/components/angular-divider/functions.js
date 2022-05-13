import { ANGULAR_DIVIDER_BASE_CLASS_NAME } from './constants';

const getAngularDividerClassName = (dividerOrientation) => {
    if (dividerOrientation && dividerOrientation !== "") {
        return `${ANGULAR_DIVIDER_BASE_CLASS_NAME}-${dividerOrientation}`;
    } else {
        return ANGULAR_DIVIDER_BASE_CLASS_NAME;
    }
}

const resizeAngularDivider = (divider, dividerOrientation) => {
    if (divider != null) {
        divider.style.width = "0px";
        const wrapper = divider.parentElement;
        const dividerBorderHeight = wrapper.clientHeight - divider.clientHeight;
        const borderLeftRightText = wrapper.clientWidth + 'px solid black';
        divider.style.borderTop = dividerBorderHeight + 'px solid transparent';
        if (divider.className.indexOf(`-${dividerOrientation}`) > 0) {
            divider.style.borderLeft = borderLeftRightText;
        } else {
            divider.style.borderRight = borderLeftRightText;
        }
    }
}

export { resizeAngularDivider, getAngularDividerClassName };
