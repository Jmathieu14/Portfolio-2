import { action, makeAutoObservable, observable } from 'mobx';

class SectionListStore {
  sections = [];

  constructor() {
    makeAutoObservable(this, {
      sections: observable,
      addSection: action,
      getSection: observable
    });
  }

  getSection(name) {
    let angularSection = null;
    this.sections.forEach((section) => {
      if (section.name === name) {
        angularSection = section;
        return;
      }
    });
    return angularSection;
  }

  addSection(section) {
    this.sections.push(section);
  }
}

export default SectionListStore;