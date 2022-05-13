import { render } from '@testing-library/react';
import AngularDivider from '.';
import { ANGULAR_DIVIDER_BASE_CLASS_NAME } from './constants';
import { getAngularDividerClassName } from './functions';

jest.mock('./functions', () => ({
    ...jest.requireActual('./functions'),
    getAngularDividerClassName: jest.fn(),
}));

const defaultProps = {
    backgroundColor: 'red'
};

describe('AngularDivider', () => {
    let angularDivider;

    beforeEach(() => {
        getAngularDividerClassName.mockReturnValue(ANGULAR_DIVIDER_BASE_CLASS_NAME);
        angularDivider = render(<AngularDivider {...defaultProps} />);
    });

    afterEach(() => {
        getAngularDividerClassName.mockRestore();
    });

    it('should render as expected', () => {
        expect(angularDivider).toMatchSnapshot();
    });

    it('should call getAngularDividerClassName()', () => {
        expect(getAngularDividerClassName).toHaveBeenCalledTimes(1);
        expect(getAngularDividerClassName).toHaveBeenCalledWith(undefined);
    });

    it('should call getAngularDividerClassName() with the given \'divOrientation\'', () => {
        const dividerOrientation = 'rev';
        angularDivider = render(
            <AngularDivider
                {...defaultProps}
                divOrientation={dividerOrientation}
            />
        )
        expect(getAngularDividerClassName).toHaveBeenCalled();
        expect(getAngularDividerClassName).toHaveBeenLastCalledWith(dividerOrientation);
    });
});
