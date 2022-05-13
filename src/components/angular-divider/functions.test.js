import { ANGULAR_DIVIDER_BASE_CLASS_NAME } from './constants';
import { getAngularDividerClassName } from './functions';

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
});
