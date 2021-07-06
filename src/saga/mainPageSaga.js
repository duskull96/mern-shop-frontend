import { put, takeEvery, call } from 'redux-saga/effects'
import { FETCH_MAIN, setMainPageCreator } from '../store/reducers/mainPageReducer'
import { Api } from './fetchData/fetchData'


function* fetchMainPageWorker() {
    const data = yield call(Api.fetch, '/main')
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(setMainPageCreator(json))
}

export function* MainPageWatcher() {
    yield takeEvery(FETCH_MAIN, fetchMainPageWorker)
}   