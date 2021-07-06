import { all } from "@redux-saga/core/effects";
import { CatalogPageWatcher } from "./catalogPageSaga";
import { MainPageWatcher } from "./mainPageSaga";

export function* rootWatcher() {
    yield all([CatalogPageWatcher(), MainPageWatcher()])
}