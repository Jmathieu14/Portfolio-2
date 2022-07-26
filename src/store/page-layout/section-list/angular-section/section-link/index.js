import { action, makeAutoObservable, observable } from 'mobx';

class SectionLinkStore {
    name;
    target = "_blank";
    url;
    logo;
    hoverBackgroundColor;
    hoverBackgroundName;
    isRouterLink = false;

    constructor(name) {
        this.name = name;
        makeAutoObservable(this, {
            name: observable,
            url: observable,
            logo: observable,
            hoverBackgroundColor: observable,
            hoverBackgroundName: observable,
            target: observable,
            isRouterLink: observable,
            setUrl: action,
            setHoverBackgroundColor: action,
            setHoverBackgroundName: action,
            setLogo: action,
            setTarget: action,
            setIsRouterLink: action,
        })
    }

    setUrl(url) {
        this.url = url;
    }

    setHoverBackgroundColor(color) {
        this.hoverBackgroundColor = color;
    }

    setHoverBackgroundName(name) {
        this.hoverBackgroundName = name;
    }

    setLogo(logo) {
        this.logo = logo;
    }

    setTarget(target) {
        this.target = target;
    }

    setIsRouterLink(isRouterLink) {
        this.isRouterLink = isRouterLink;
    }
}

export default SectionLinkStore;