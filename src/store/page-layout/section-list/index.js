import { action, makeAutoObservable, observable } from 'mobx';

class SectionListStore {
  sections = [];

  constructor() {
    makeAutoObservable(this, {
      sections: observable,
      addSection: action,
    });
  }

  addSection(section) {
    this.sections.push(section);
  }
}

export default SectionListStore;