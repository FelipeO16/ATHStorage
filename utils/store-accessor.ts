import { Store } from "vuex";
import { getModule } from "vuex-module-decorators";

import Test from "@/store/test";

/* eslint-disable import/no-mutable-exports */
let test: Test;

const initializeStores = (store: Store<any>): void => {
  test = getModule(Test, store);
};

export { initializeStores, test };
