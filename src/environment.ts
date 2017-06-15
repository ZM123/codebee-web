import {
  Environment,
  Network,
  RecordSource,
  Store,
  ViewerHandler
} from 'relay-runtime';

function fetchQuery(operation: any, variables: any, cacheConfig: any, uploadable: any) {
  return fetch('/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(res => res.json());
}

const w: any = window;
w['ViewerHandler'] = ViewerHandler;
const update = ViewerHandler.update;
ViewerHandler.update = (...args: any[]) => {
  console.log(args);
  return update.apply(null, args);
}

const source = new RecordSource();
const store = new Store(source);
const network = Network.create(fetchQuery);

const environment = new Environment({
  network,
  store
});

export default environment;
