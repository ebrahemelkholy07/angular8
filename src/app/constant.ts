import { HttpHeaders } from '@angular/common/http';

export const BaseUrl = 'http://task.taj-it.com/api/';

/**
 * Headers for calling api
 */
export let HEADERS = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'time-zone': Intl.DateTimeFormat().resolvedOptions().timeZone,
    'locale': 'all'
});