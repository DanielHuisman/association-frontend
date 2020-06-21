import {createContext} from 'react';

import {UserFragment} from '../../generated/graphql';

export const UserContext = createContext<UserFragment>(null);
export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;
