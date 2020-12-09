import { useSelector } from 'react-redux';
import { State } from 'types/client/redux';

// FIXME: refactor to useMemo
export function useAuth() {
  const auth = useSelector((state: State) => {
    return state.auth;
  });

  if (auth) {
    return Object.getOwnPropertyNames(auth).length ? auth : false;
  }
  return null;
}
