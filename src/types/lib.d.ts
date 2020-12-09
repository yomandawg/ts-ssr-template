import { Store } from 'redux';
import { RouteConfig } from 'react-router-config';
import { LoadData } from 'types/client/redux';

declare module 'react-router-config' {
  interface AsyncRouteConfig extends RouteConfig {
    loadData?: LoadData;
    routes?: AsyncRouteConfig[];
  }
}
