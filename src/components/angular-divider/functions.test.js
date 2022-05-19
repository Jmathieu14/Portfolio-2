import React from 'react';
import { ANGULAR_DIVIDER_BASE_CLASS_NAME } from './constants';
import { getAngularDividerClassName, resizeAngularDivider } from './functions';
import { render } from '@testing-library/react';

const TestAngularDivider = ({
    dividerOrientation
}) => {
    return (
        <div
            className={
                dividerOrientation
                    ? `test-angular-divider-${dividerOrientation}`
                    : 'test-angular-divider'}
            data-testid="divider"
        />
    )
};

const TestAngularDividerWrapper = ({
    dividerOrientation,
    styles
}) => {
    return (
        <div
            className="test-angular-divider-wrapper"
            data-testid="divider-wrapper"
            style={styles}
        >
            <TestAngularDivider
                dividerOrientation={dividerOrientation}
            />
        </div>
    )
};

describe('Angular Divider Functions', () => {
    describe('getAngularDividerClassName()', () => {
        it('should return the Angular Divider class name unmodified', () => {
            expect(getAngularDividerClassName('')).toBe(ANGULAR_DIVIDER_BASE_CLASS_NAME);
            expect(getAngularDividerClassName()).toBe(ANGULAR_DIVIDER_BASE_CLASS_NAME);
            expect(getAngularDividerClassName(null)).toBe(ANGULAR_DIVIDER_BASE_CLASS_NAME);
        });
        it('should return the Angular Divider class name with the \'dividerOrientation\' as a postfix', () => {
            expect(getAngularDividerClassName('postfix')).toBe(`${ANGULAR_DIVIDER_BASE_CLASS_NAME}-postfix`);
        });
    });

    describe('resizeAngularDivider()', () => {
        let dividerWrapper;
        let divider;
        let dividerClientHeightSpy;
        let dividerParentClientHeightSpy;
        let dividerParentClientWidthSpy;
        const dividerHeight = 100;
        const dividerWrapperHeight = 250;
        const dividerWrapperWidth = 500;
        const dividerWrapperStyles = {
            height: dividerWrapperHeight,
            width: dividerWrapperWidth
        };

        beforeEach(async () => {
            dividerWrapper = render(
                <TestAngularDividerWrapper
                    styles={dividerWrapperStyles}
                />
            );
            divider = await dividerWrapper.findByTestId('divider');
            dividerClientHeightSpy = jest.spyOn(divider, 'clientHeight', 'get')
                .mockReturnValue(dividerHeight);
            dividerParentClientHeightSpy = jest.spyOn(divider.parentElement, 'clientHeight', 'get')
                .mockReturnValue(dividerWrapperHeight);
            dividerParentClientWidthSpy = jest.spyOn(divider.parentElement, 'clientWidth', 'get')
                .mockReturnValue(dividerWrapperWidth);
        });

        afterEach(() => {
            dividerClientHeightSpy.mockRestore();
            dividerParentClientWidthSpy.mockRestore();
            dividerParentClientHeightSpy.mockRestore();
        });

        it('should change border-right and border-top styles of divider element only', () => {
            resizeAngularDivider(divider);
            expect(divider.style.borderLeft).toBe('');
            expect(divider.style.borderRight).toBe(`${dividerWrapperWidth}px solid black`);

            const expectedHeight = dividerWrapperHeight - dividerHeight;
            expect(divider.style.borderTop).toBe(`${expectedHeight}px solid transparent`);
        });

        it('should change border-left and border-top styles of divider element only', async () => {
            const { rerender } = dividerWrapper;
            rerender(
                <TestAngularDividerWrapper
                    styles={dividerWrapperStyles}
                    dividerOrientation="rev"
                />
            );
            divider = await dividerWrapper.findByTestId('divider');
            resizeAngularDivider(divider, 'rev');
            expect(divider.style.borderRight).toBe('');
            expect(divider.style.borderLeft).toBe(`${dividerWrapperWidth}px solid black`);

            const expectedHeight = dividerWrapperHeight - dividerHeight;
            expect(divider.style.borderTop).toBe(`${expectedHeight}px solid transparent`);
        });

        it('should throw expected exception', () => {
            expect(() => resizeAngularDivider(null)).toThrowErrorMatchingSnapshot();
        });
    });
});
