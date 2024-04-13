export function fetchData(payload) {
    return {
        type: 'products/fetchData',
        payload
    }
}

export function searchText(payload) {
    return {
        type: 'filters/searchText',
        payload
    }
}

export function setSearchBrand(payload) {
    return {
        type: 'filters/searchBrand',
        payload
    }
}

export function setSearchCategory(payload) {
    return {
        type: 'filters/searchCategory',
        payload
    }
}

export function setSearchPrice(payload) {
    return {
        type: 'filters/searchPrice',
        payload
    }
}

export function setSearchStatus(payload) {
    return {
        type: 'filters/searchStatus',
        payload
    }
}