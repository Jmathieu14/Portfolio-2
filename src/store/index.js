import { action, makeAutoObservable, observable } from 'mobx';
import ExpandableContentStore from './page-layout/section-list/angular-section/expandable-content';
import PageLayoutStore from './page-layout';
import homePageLayout from './page-layout/home-layout';

export class Store {
    expandableContent = new ExpandableContentStore();
    pageLayout = new PageLayoutStore();

    constructor() {
        makeAutoObservable(this, {
            expandableContent: observable,
            pageLayout: observable,
            setPageLayout: action,
        });
    }

    setPageLayout(pageLayout) {
        this.pageLayout = pageLayout;
    }
}

const store = new Store();

store.setPageLayout(homePageLayout);

if (process.env.NODE_ENV === 'development') {
    import(/* webpackChunkName: "MobXDevTools" */ '@mobx-devtools/tools').then(({ injectStores }) => {
        injectStores(store);
    });
}

export default store;
