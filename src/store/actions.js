import ApiClient from '../api/client';

// TODO: Get server url from configuration.
const apiClient = new ApiClient(typeof window !== 'object' ? 'http://localhost:3000/api' : null);

export const SET_ROUTE_NAME = 'SET_ROUTE_NAME';
export const FETCH_SITE_META = 'FETCH_SITE_META';
export const FETCH_SITE_META_SUCCESS = 'FETCH_SITE_META_SUCCESS';

export const setRouteName = routeName => ({
  type: SET_ROUTE_NAME,
  routeName,
});

export const fetchSiteMetaSuccess = (siteTitle, tagline) => ({
  type: FETCH_SITE_META_SUCCESS,
  siteTitle,
  tagline,
});

export const fetchSiteMeta = () => dispatch => apiClient.metaGet()
  .then(({ siteTitle, tagline }) => {
    dispatch(fetchSiteMetaSuccess(siteTitle, tagline));
  });
  // TODO: Add error handling
