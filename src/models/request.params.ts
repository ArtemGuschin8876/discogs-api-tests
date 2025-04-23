export type RequestParams = {
    expectedStatusCode: number;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: unknown;
}