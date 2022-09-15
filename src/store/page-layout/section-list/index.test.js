import SectionListStore from '.';
import AngularSectionStore from './angular-section';

describe('SectionListStore', () => {
  let sectionListStore;
  let angularSectionStoreOne;
  let angularSectionStoreOneName = "store1";
  beforeEach(() => {
    sectionListStore = new SectionListStore();
    angularSectionStoreOne = new AngularSectionStore(angularSectionStoreOneName);
    sectionListStore.addSection(angularSectionStoreOne);
  });

  it('should get correct Angular Section store', () => {
    expect(sectionListStore.getSection(angularSectionStoreOneName)).toBe(angularSectionStoreOne);
  });

  it('should return null for non-existent Angular Section store name', () => {
    expect(sectionListStore.getSection('not-a-real-section')).toBeNull();
  });
});