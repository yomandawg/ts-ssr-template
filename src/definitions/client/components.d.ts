import { Store } from 'redux';

declare module '@components' {
  type LoadData = (store: Store) => Promise<any>;
}
