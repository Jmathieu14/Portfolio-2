import { makeAutoObservable, observable } from 'mobx';
import ExpandableContentStore from './expandable-content';

export class Store {
    expandableContent = new ExpandableContentStore();

    constructor() {
        makeAutoObservable(this, {
            expandableContent: observable
        });
    }
}

const store = new Store();

if (process.env.NODE_ENV === 'development') {
    import(/* webpackChunkName: "MobXDevTools" */ '@mobx-devtools/tools').then(({ injectStores }) => {
        injectStores(store);
    });
}

export default store;
