import type { paths } from '../../schema';
import createFetchClient from 'openapi-fetch';
import createClient from "openapi-fetch";
export const api = createClient<paths>({ baseUrl: "https://bimonet.com/" });
