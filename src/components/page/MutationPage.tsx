import React from 'react';
import {Mutation, MutationProps, MutationFn, MutationResult} from 'react-apollo';
import {useTranslation} from 'react-i18next';
import {Message, Loader} from 'semantic-ui-react';

import {translateError} from '../../util';

export type ResultFn<MutationType> = (mutationResult: MutationResult<MutationType>) => React.ReactNode;

interface IProps<MutationType> {
    mutation?: MutationProps['mutation'];
    mutationVariables?: MutationProps['variables'];
    mutationProps?: Partial<MutationProps>;
    success?: string | ResultFn<MutationType>;
    failure?: string | ResultFn<MutationType>;
    defaultBehaviour?: boolean;
    loader?: boolean;
    children: (
        mutateFn: MutationFn<MutationType>,
        mutationResult: MutationResult<MutationType>,
        ...args: any[]
    ) => React.ReactNode;
}

export {
    IProps as IMutationPageProps
};

// NOTE: The X generic variable is only there so TypeScript doesn't confuse it with JSX
export const MutationPage = <MutationType, X = any>({
    mutation,
    mutationVariables,
    mutationProps,
    success,
    failure,
    children,
    defaultBehaviour = true,
    loader = true
}: IProps<MutationType>) => {
    const {t} = useTranslation();

    return (
        // TODO: remove annotation and unnecessary mutation typing once react-apollo? is fixed
        // @ts-ignore
        <Mutation<MutationType> mutation={mutation} variables={mutationVariables} {...mutationProps}>
            {(mutateFn: MutationFn<MutationType>, mutationResult: MutationResult<MutationType>) => {
                if (defaultBehaviour) {
                    const {loading, data, error} = mutationResult;

                    return (
                        <>
                            {data && success && <>
                                {typeof success === 'string' && <Message success>
                                    <b>{success}</b>
                                </Message>}
                                {typeof success !== 'string' && success(mutationResult)}
                            </>}

                            {error && failure && <>
                                {typeof failure === 'string' && <Message error>
                                    <Message.Header>
                                        {failure}
                                    </Message.Header>
                                    {translateError(t, error)}
                                </Message>}
                                {typeof failure !== 'string' && failure(mutationResult)}
                            </>}

                            <Loader active={loader && loading} inline />

                            {children(mutateFn, mutationResult)}
                        </>
                    );
                }

                return children(mutateFn, mutationResult);
            }}
        </Mutation>
    );
};
