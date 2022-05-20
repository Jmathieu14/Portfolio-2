import { render, screen } from '@testing-library/react';
import ExpandableContent from '.';

const defaultExpandableContentSpecs = {
    show: false,
    icon: 'src/legit/icon',
    alt: 'This is the best expandable icon!'
}

const imageSliderSpecs = {
    images: [
        { path: 'real/path', text: 'This Image has a Description!' }
    ]
};

describe('ExpandableContent', () => {
    let expandableContentWrapper;
    let container;
    let rerender;

    beforeEach(() => {
        expandableContentWrapper = render(
            <ExpandableContent
                expandableContentSpecs={defaultExpandableContentSpecs}
            />
        )
        container = expandableContentWrapper.container;
        rerender = expandableContentWrapper.rerender;
    });

    describe('show image slider', () => {
        it('should not render an image slider if show is set to false', () => {
            const expandableContent = container.querySelector('.expandable-content');
            expect(expandableContent.children.length).toBe(0);
        });

        it('should not render an image slider if show is set to false and there are imageSliderSpecs', async () => {
            await rerender(<ExpandableContent
                expandableContentSpecs={{
                    ...defaultExpandableContentSpecs,
                    show: false,
                    imageSliderSpecs: imageSliderSpecs
                }}
            />);
            const expandableContent = container.querySelector('.expandable-content');
            expect(expandableContent.children.length).toBe(0);
        });

        it('should not render an image slider if show is set to true and there are no imageSliderSpecs', async () => {
            await rerender(<ExpandableContent
                expandableContentSpecs={{
                    ...defaultExpandableContentSpecs,
                    show: true,
                }}
            />);
            const expandableContent = container.querySelector('.expandable-content');
            expect(expandableContent.children.length).toBe(0);
        });

        it('should render an image slider if show is set to true and there are imageSliderSpecs', async () => {
            await rerender(<ExpandableContent
                expandableContentSpecs={{
                    ...defaultExpandableContentSpecs,
                    show: true,
                    imageSliderSpecs: imageSliderSpecs
                }}
            />);
            const expandableContent = container.querySelector('.expandable-content');
            expect(expandableContent.children.length).toBe(1);
        });
    });

    describe('expand content button', () => {
        it('should call store.expandableContent.setContentExpanded() on click', () => {
            expect(1).toBe(4);
        });
    });
});
