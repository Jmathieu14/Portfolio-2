import { action, makeAutoObservable, observable } from 'mobx';

class PageLayoutStore {
  sectionList = null;
  active = false;

  constructor() {
    makeAutoObservable(this, {
      active: observable,
      sectionList: observable,
      setSectionList: action,
      toggleActiveState: action,
      setActiveState: action,
    });
  }

  setSectionList(sectionList) {
    this.sectionList = sectionList;
  }

  setActiveState(isActive) {
    this.active = isActive;
  }

  toggleActiveState() {
    this.active = !this.active;
  }
}

export default PageLayoutStore;