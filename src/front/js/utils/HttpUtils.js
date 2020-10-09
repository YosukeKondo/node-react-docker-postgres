import _ from "lodash";

const HEADERS_CONTENT_TYPE_JSON = {
  headers: {
    "Content-Type": "application/json"
  }
};

export function get(path, options) {
  const opts = {
    ...options
  };
  return fetch(path, opts);
}

const isNullish = v => _.isNull(v) || _.isUndefined(v);

export function parseQueryString(searchParams) {
  if (!searchParams) return {};
  if (_.isString(searchParams)) {
    searchParams = new URLSearchParams(searchParams);
  }
  if (searchParams instanceof URL) {
    searchParams = searchParams.searchParams;
  }
  let obj = {};
  for (let [key, value] of searchParams.entries()) {
    if (isNullish(obj[key])) {
      obj[key] = value;
    } else if (_.isArray(obj[key])) {
      obj[key].push(value);
    } else {
      obj[key] = [obj[key], value];
    }
  }
  return obj;
}

export function toQueryString(params) {
  return params ? "?" + new URLSearchParams(params) : "";
}

export function getJSON(path, params, options) {
  const opts = {
    ...HEADERS_CONTENT_TYPE_JSON,
    ...options
  };
  const query = toQueryString(params);
  return get(`${path}${query}`, opts).then(resp => resp.json());
}

export function post(path, body, options) {
  const opts = {
    method: "POST",
    body,
    ...options
  };
  return fetch(path, opts).then(resp => resp.json());
}

export function postJSON(path, data, options) {
  const opts = {
    ...HEADERS_CONTENT_TYPE_JSON,
    ...options
  };
  return post(path, JSON.stringify(data), opts);
}

export function del(path, body, options) {
  const opts = {
    method: "DELETE",
    body,
    ...options
  };
  return fetch(path, opts).then(resp => resp.json());
}

export function deleteJSON(path, data, options) {
  const opts = {
    ...HEADERS_CONTENT_TYPE_JSON,
    ...options
  };
  return del(path, JSON.stringify(data), opts);
}
