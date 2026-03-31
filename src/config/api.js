const normalizeBaseUrl = (value) => {
  if (!value) return "";
  return value.endsWith("/") ? value.slice(0, -1) : value;
};

const normalizePath = (value) => {
  if (!value) return "";
  const withLeading = value.startsWith("/") ? value : `/${value}`;
  return withLeading.endsWith("/") ? withLeading.slice(0, -1) : withLeading;
};

/**
 * Base URL for the backend API.
 *
 * - Override in dev/build env with REACT_APP_API_BASE_URL
 *   Example: REACT_APP_API_BASE_URL=https://backend-api-ive8.onrender.com
 *
 * - If your backend uses a different prefix than /v1, override with
 *   REACT_APP_API_PATH (e.g. /api, /api/v1, /v1)
 */
export const API_BASE_URL = normalizeBaseUrl(
  process.env.REACT_APP_API_BASE_URL || "https://backend-api-ive8.onrender.com"
);

export const API_PATH = normalizePath(process.env.REACT_APP_API_PATH || "/v1");

export const API_PREFIXED_BASE_URL = `${API_BASE_URL}${API_PATH}`;

