import { render } from '@testing-library/react';
import AngularDivider from '.';
import { ANGULAR_DIVIDER_BASE_CLASS_NAME } from './constants';
import { getAngularDividerClassName, resizeAngularDivider } from './functions';

jest.mock('./functions');

const defaultProps = {
    backgroundColor: 'red'
};

describe('AngularDivider', () => {
    let angularDivider;

    beforeEach(() => {
        getAngularDividerClassName.mockReturnValue(ANGULAR_DIVIDER_BASE_CLASS_NAME);
        resizeAngularDivider.mockImplementation((divider) => {
            divider.style.width = '100px';
        });
        angularDivider = render(<AngularDivider {...defaultProps} />);
    });

    afterEach(() => {
        getAngularDividerClassName.mockRestore();
        resizeAngularDivider.mockRestore();
    });

    it('should render as expected', () => {
        expect(angularDivider).toMatchSnapshot();
    });

    it('should call getAngularDividerClassName()', () => {
        expect(getAngularDividerClassName).toHaveBeenCalledTimes(1);
        expect(getAngularDividerClassName).toHaveBeenCalledWith(undefined);
    });

    it('should call getAngularDividerClassName() with the given \'dividerOrientation\'', () => {
        const dividerOrientation = 'rev';
        angularDivider = render(
            <AngularDivider
                {...defaultProps}
                dividerOrientation={dividerOrientation}
            />
        );
        expect(getAngularDividerClassName).toHaveBeenCalled();
        expect(getAngularDividerClassName).toHaveBeenLastCalledWith(dividerOrientation);
    });

    it('should call resizeAngularDivider() with the correct dividerOrientation', () => {
        let expectedDividerElement = angularDivider.container.querySelector(`.${ANGULAR_DIVIDER_BASE_CLASS_NAME}`);
        expect(resizeAngularDivider).toHaveBeenCalledTimes(1);
        expect(resizeAngularDivider).toHaveBeenCalledWith(expectedDividerElement, undefined);
        resizeAngularDivider.mockRestore();
        const dividerOrientation = 'rev';
        angularDivider = render(
            <AngularDivider
                {...defaultProps}
                dividerOrientation={dividerOrientation}
            />
        );
        expectedDividerElement = angularDivider.container.querySelector(`.${ANGULAR_DIVIDER_BASE_CLASS_NAME}`);
        expect(resizeAngularDivider).toHaveBeenCalledTimes(1);
        expect(resizeAngularDivider).toHaveBeenCalledWith(expectedDividerElement, dividerOrientation);
    });
});
