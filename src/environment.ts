import {
  Environment,
  Network,
  RecordSource,
  Store
} from 'relay-runtime';

import Constants from './lib/Constants';
import LocalStorage from './lib/LocalStorage';

async function fetchQuery(operation: any, variables: any, cacheConfig: any, uploadable: any) {
  const headers = new Headers({
    'content-type': 'application/json'
  });

  const csrfToken = LocalStorage.getItem(Constants.CSRF_HEADER);
  if (csrfToken) {
    headers.append(Constants.CSRF_HEADER, csrfToken);
  }

  const token = LocalStorage.getItem(Constants.TOKEN_HEADER);
  if (token) {
    headers.append(Constants.TOKEN_HEADER, token);
  }

  const res = await fetch('/graphql', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  })

  if (res.headers.has(Constants.CSRF_HEADER)) {
    LocalStorage.setItem(Constants.CSRF_HEADER, (res.headers.get(Constants.CSRF_HEADER)!));
  }

  if (res.headers.has(Constants.TOKEN_HEADER)) {
    LocalStorage.setItem(Constants.TOKEN_HEADER, (res.headers.get(Constants.TOKEN_HEADER)!));
  }

  return res.json();
}

const source = new RecordSource();
const store = new Store(source);
const network = Network.create(fetchQuery);

const environment = new Environment({
  network,
  store
});

export default environment;
