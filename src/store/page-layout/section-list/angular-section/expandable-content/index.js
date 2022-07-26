import { action, makeAutoObservable, observable } from 'mobx';

class ExpandableContentStore {
    contentExpanded = false;
    contentReference = null;

    constructor() {
        makeAutoObservable(this, {
            contentExpanded: observable,
            contentReference: observable,
            setContentExpanded: action,
            resetContentExpanded: action,
        });
    };

    setContentExpanded(contentReference) {
        this.contentReference = contentReference;
        this.contentExpanded = true;
    };

    resetContentExpanded() {
        this.contentReference = null;
        this.contentExpanded = false;
    }
};

export default ExpandableContentStore;
