import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { State } from '@redux';

export function useAuth() {
  const auth = useSelector((state: State) => state.auth);

  if (auth) {
    return Object.getOwnPropertyNames(auth).length ? auth : null;
  }

  return false;
}
