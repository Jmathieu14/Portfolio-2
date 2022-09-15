import SectionLinkStore from '.';

describe('Section Link', () => {
    let sectionLinkStore;
    const name = 'sectionLinkStore';
    beforeEach(() => {
        sectionLinkStore = new SectionLinkStore(name);
    });

    it('should default to "_blank" target', () => {
        expect(sectionLinkStore.target).toBe('_blank');
    });

    it('should construct with expected name', () => {
        expect(sectionLinkStore.name).toBe(name);
    });
});