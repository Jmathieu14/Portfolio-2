import PageLayoutStore from '.';
import SectionListStore from './section-list';

describe('PageLayoutStore', () => {
  let pageLayoutStore;

  beforeEach(() => {
    pageLayoutStore = new PageLayoutStore();
  });

  it('should set section list to the given section list', () => {
    const expectedSectionList = new SectionListStore();
    pageLayoutStore.setSectionList(expectedSectionList);

    expect(pageLayoutStore.sectionList).toEqual(expectedSectionList);
  });

  it('should default to inactive', () => {
    expect(pageLayoutStore.active).toBeFalsy();
  });

  it('should set active state to true', () => {
    pageLayoutStore.setActiveState(true);
    expect(pageLayoutStore.active).toBeTruthy();
  });

  it('should set active state to false', () => {
    pageLayoutStore.setActiveState(true);
    pageLayoutStore.setActiveState(false);
    expect(pageLayoutStore.active).toBeFalsy();
  });

  it('should toggle active state from false to true', () => {
    pageLayoutStore.setActiveState(false);
    pageLayoutStore.toggleActiveState();
    expect(pageLayoutStore.active).toBeTruthy();
  });

  it('should toggle active state from true to false', () => {
    pageLayoutStore.setActiveState(true);
    pageLayoutStore.toggleActiveState();
    expect(pageLayoutStore.active).toBeFalsy();
  });
});