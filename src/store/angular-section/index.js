import { action, makeAutoObservable, observable } from 'mobx';

class AngularSectionStore {
    sectionHovered = false;
    sectionReference = null;

    constructor() {
        makeAutoObservable(this, {
            sectionHovered: observable,
            sectionReference: observable,
            setSectionHovered: action,
            resetSectionHovered: action,
        });
    };

    setSectionHovered(contentReference) {
        this.contentReference = contentReference;
        this.contentExpanded = true;
    };

    resetSectionHovered() {
        this.contentReference = null;
        this.contentExpanded = false;
    }
};

export default AngularSectionStore;
