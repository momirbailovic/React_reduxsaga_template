import { all } from 'redux-saga/effects'
import { ADVANCE_SEARCH_DEVICE } from './advanceSearchDevice'
import { GET_BIG_URL } from './getBigUrl'
import { GET_BRANDS } from './getBrands'
import { GET_CATEGORIES } from './getCategories'
import { GET_FILTERED_VALUES } from './getFilterValues'
import { GET_MODELS } from './getModels'
import { GET_POPULAR_CATEGORIES } from './getPopularCategories'
import { GET_SHORT_URL } from './getShortUrl'
import { GET_SMARTPHONE_DETAILS } from './getSmartPhoneDetails'
import { GET_DEVICE_BY_NAME } from './searchDeviceByName'
import { GET_DEVICE_BY_NAME_CATEGORY_WISE } from './searchDeviceByNameCategoryWise'
import { GET_TRENDING_PRODUCTS } from './getTrendingProducts'
import { RESET } from './resetSaga'

// Wrap all sagas in a container
const rootSaga = function* rootSaga() {
  yield all([
    ADVANCE_SEARCH_DEVICE(),
    GET_BIG_URL(),
    GET_BRANDS(),
    GET_CATEGORIES(),
    GET_FILTERED_VALUES(),
    GET_MODELS(),
    GET_POPULAR_CATEGORIES(),
    GET_SHORT_URL(),
    GET_SMARTPHONE_DETAILS(),
    GET_DEVICE_BY_NAME(),
    GET_DEVICE_BY_NAME_CATEGORY_WISE(),
    GET_TRENDING_PRODUCTS(),
    RESET()
  ])
}

export default rootSaga
