export const SERVICE_PAGE_LOADED = 'loadPageService';
export const SERVICE_PAGE_UNLOADED = 'failLoadPageService';

export function loadPageService(serviceList) {
    return {
        type: SERVICE_PAGE_LOADED,
        payload: {
            service_list : serviceList
        }
    }
}

export function failLoadPageService(serviceList) {
    return {};
}