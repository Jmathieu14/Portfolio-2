import { action, makeAutoObservable, observable } from 'mobx';

class AngularSectionStore {
    banner;
    expandableContent;
    hoverBackgroundColor;
    hoverBackgroundName;
    name;
    opacityAsTab = 1;
    sectionHovered = false;
    sectionLinkList = [];

    constructor(name) {
        this.name = name;
        makeAutoObservable(this, {
            banner: observable,
            expandableContent: observable,
            hoverBackgroundColor: observable,
            hoverBackgroundName: observable,
            name: observable,
            opacityAsTab: observable,
            sectionHovered: observable,
            sectionLinkList: observable,
            setBanner: action,
            hasExpandableContent: action,
            setExpandableContent: action,
            setHoverBackgroundColor: action,
            setHoverBackgroundName: action,
            setOpacityAsTab: action,
            setSectionLinkList: action,
            resetSectionHovered: action,
            setSectionHovered: action,
        });
    };

    setBanner(banner) {
        this.banner = banner;
    }

    hasExpandableContent() {
        return this.expandableContent !== null && this.expandableContent !== undefined;
    }

    setExpandableContent(expandableContent) {
        this.expandableContent = expandableContent;
    }

    setHoverBackgroundColor(color) {
        this.hoverBackgroundColor = color;
    }

    setHoverBackgroundName(name) {
        this.hoverBackgroundName = name;
    }

    setOpacityAsTab(opacity) {
        this.opacityAsTab = opacity;
    }

    setSectionLinkList(sectionLinkList) {
        this.sectionLinkList = sectionLinkList;
    }

    setSectionHovered() {
        this.sectionHovered = true;
    };

    resetSectionHovered() {
        this.sectionHovered = false;
    }
};

export default AngularSectionStore;
