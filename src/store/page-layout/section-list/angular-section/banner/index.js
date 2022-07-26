import { action, makeAutoObservable, observable } from "mobx";
import { resolveStaticPath } from '../../../../../utility/StaticPathResolver';

class BannerStore {
    alt;
    bannerImage;
    bannerText;

    constructor() {
        makeAutoObservable(this, {
            alt: observable,
            bannerImage: observable,
            bannerText: observable,
            setAltText: action,
            setBannerImage: action,
            setBannerText: action,
            getBannerHTML: action,
        });
    }

    setAltText(altText) {
        this.alt = altText;
    }

    setBannerImage(bannerImage) {
        this.bannerImage = bannerImage;
    }

    setBannerText(bannerText) {
        this.bannerText = bannerText;
    }

    getBannerHTML() {
        if (this.bannerText) {
            return (
                <div className="banner-title-text">
                    {this.bannerText}
                </div>
            );
        } else {
            return (
                <div className="banner-title-img">
                    <img src={resolveStaticPath(this.bannerImage)} alt={this.alt} />
                </div>
            );
        }
    }
}

export default BannerStore;