import {createContext} from 'react';

import {MemberFragment} from '../../generated/graphql';

export const UserContext = createContext<MemberFragment>(null);
export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;
