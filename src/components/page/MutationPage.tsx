import React from 'react';
import {useTranslation} from 'react-i18next';
import {MutationFunction, MutationResult} from '@apollo/react-common';
import {useMutation, MutationHookOptions} from '@apollo/react-hooks';
import {Message, Loader} from 'semantic-ui-react';

import {translateError} from '../../util';

export type ResultFn<MutationType> = (mutationResult: MutationResult<MutationType>) => React.ReactNode;

interface IProps<MutationType> {
    mutation?: MutationHookOptions['mutation'];
    mutationVariables?: MutationHookOptions['variables'];
    mutationProps?: Partial<MutationHookOptions>;
    success?: string | ResultFn<MutationType>;
    failure?: string | ResultFn<MutationType>;
    defaultBehaviour?: boolean;
    loader?: boolean;
    children: (
        mutateFn: MutationFunction<MutationType>,
        mutationResult: MutationResult<MutationType>,
        ...args: any[]
    ) => JSX.Element | null;
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

    const [mutateFn, mutationResult] = useMutation<MutationType>(mutation, {
        variables: mutationVariables,
        ...mutationProps
    });

    if (defaultBehaviour) {
        const {loading, data, error} = mutationResult;

        return (
            <>
                {data && success && (
                    <>
                        {typeof success === 'string' && (
                            <Message success>
                                <b>{success}</b>
                            </Message>
                        )}
                        {typeof success !== 'string' && success(mutationResult)}
                    </>
                )}

                {error && failure && (
                    <>
                        {typeof failure === 'string' && (
                            <Message error>
                                <Message.Header>
                                    {failure}
                                </Message.Header>
                                {translateError(t, error)}
                            </Message>
                        )}
                        {typeof failure !== 'string' && failure(mutationResult)}
                    </>
                )}

                <Loader active={loader && loading} inline />

                {children(mutateFn, mutationResult)}
            </>
        );
    }

    return children(mutateFn, mutationResult);
};
