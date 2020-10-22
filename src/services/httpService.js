import axios from 'axios';

let stateSet;
let set;

function setLoading(object) {
  try {
    if (object.isReactComponent) {
      const { isLoading } = object.state;
      if (isLoading === true) return;
      stateSet = object;
    } else {
      const [isLoading, setLoading] = object;
      if (isLoading === true) return;
      set = setLoading;
    }
  } catch (ex) {
    return null;
  }
}

axios.interceptors.request.use(
  (config) => {
    stateSet.setState({ isLoading: true });
    if (set instanceof Function) set(true);
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  (config) => {
    stateSet.setState({ isLoading: false });
    if (set instanceof Function) set(false);
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  setLoading: setLoading,
};
