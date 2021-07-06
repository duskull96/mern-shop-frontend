import { put, takeEvery, call } from 'redux-saga/effects'
import { FETCH_CATALOG, setCatalogPageCreator } from '../store/reducers/catalogPageReducer'
import { Api } from './fetchData/fetchData'


function* fetchCatalogPageWorker() {
    const data = yield call(Api.fetch, '/catalog')
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(setCatalogPageCreator(json))
}

export function* CatalogPageWatcher() {
    yield takeEvery(FETCH_CATALOG, fetchCatalogPageWorker)
}