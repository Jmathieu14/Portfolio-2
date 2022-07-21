import { fireEvent, render, screen } from '@testing-library/react';
import ExpandableContent from '.';
import store from '../../store';

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
    let cleanup = () => { };
    let rerender;

    beforeEach(() => {
        cleanup();
        expandableContentWrapper = render(
            <ExpandableContent
                expandableContentSpecs={defaultExpandableContentSpecs}
            />
        );
        container = expandableContentWrapper.container;
        cleanup = expandableContentWrapper.unmount;
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
        const buttonTestId = 'expand-content-button';
        const expandedContentStore = store.expandableContent;
        const imageSliderTestId = 'image-slider-test-id';
        let expandContentButton;
        let resetContentExpandedSpy;
        let setContentExpandedSpy;

        const clearMocks = () => {
            setContentExpandedSpy.mockRestore();
            resetContentExpandedSpy.mockRestore();
        };

        const initMocks = () => {
            setContentExpandedSpy = jest.spyOn(expandedContentStore, 'setContentExpanded');
            resetContentExpandedSpy = jest.spyOn(expandedContentStore, 'resetContentExpanded');
        }

        beforeEach(() => {
            cleanup();
            initMocks();
            expandedContentStore.contentExpanded = false;

            expandableContentWrapper = render(
                <ExpandableContent
                    buttonTestId={buttonTestId}
                    expandableContentSpecs={{
                        ...defaultExpandableContentSpecs,
                        imageSliderSpecs: imageSliderSpecs
                    }}
                />
            );

            rerender = expandableContentWrapper.rerender;
            expandContentButton = screen.getByTestId(buttonTestId);
        });

        afterEach(() => {
            clearMocks();
        });

        it('should render the expand content button', () => {
            expect(expandContentButton).toBeInTheDocument();
        });

        it('should call store.expandableContent.setContentExpanded() on click', () => {
            fireEvent.click(expandContentButton);
            expect(setContentExpandedSpy).toHaveBeenCalledTimes(1);
            expect(resetContentExpandedSpy).toHaveBeenCalledTimes(0);
        });

        it('should call store.expandableContent.resetContentExpanded() on click', async () => {
            expandedContentStore.setContentExpanded('test-ref');
            clearMocks();
            initMocks();

            await rerender(<ExpandableContent
                buttonTestId={buttonTestId}
                expandableContentSpecs={{
                    ...defaultExpandableContentSpecs,
                    show: true,
                    imageSliderSpecs: imageSliderSpecs
                }}
                imageSliderTestId={imageSliderTestId}
            />);

            fireEvent.click(expandContentButton);
            expect(setContentExpandedSpy).toHaveBeenCalledTimes(1);
            expect(resetContentExpandedSpy).toHaveBeenCalledTimes(1);
        });

        it('should not call store.expandableContent.resetContentExpanded() on click with no image slider', async () => {
            clearMocks();
            initMocks();

            await rerender(<ExpandableContent
                buttonTestId={buttonTestId}
                expandableContentSpecs={{
                    ...defaultExpandableContentSpecs,
                    show: false,
                }}
            />);

            fireEvent.click(expandContentButton);
            expect(setContentExpandedSpy).toHaveBeenCalledTimes(0);
            expect(resetContentExpandedSpy).toHaveBeenCalledTimes(0);
        });
    });
});
