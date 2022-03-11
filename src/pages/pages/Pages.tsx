import React from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {useQuery} from '@apollo/react-hooks';
import {Container, Header, Loader, Table} from 'semantic-ui-react';

import {TableSelectableRow} from '../../components/table/TableSelectableRow';
import {GetPagesQuery, GetPagesQueryVariables} from '../../generated/graphql';
import GetPages from '../../queries/GetPages.graphql';

export const Pages: React.FC = () => {
    const {t} = useTranslation();
    const {loading, data, error} = useQuery<GetPagesQuery, GetPagesQueryVariables>(GetPages);

    if (error) {
        throw error;
    }

    return (
        <Container>
            <Helmet title={t('pages:pages.header', 'Pages')} />
            <Header size="huge">{t('pages:pages.header', 'Pages')}</Header>

            {loading && <Loader active />}

            {data && (
                <Table selectable stackable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>{t('pages:page.id', 'Identifier')}</Table.HeaderCell>
                            <Table.HeaderCell>{t('pages:page.titleEn', 'Title - English')}</Table.HeaderCell>
                            <Table.HeaderCell>{t('pages:page.titleNl', 'Title - Dutch')}</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {data.pages.values.map((page) => (
                            <TableSelectableRow key={page.id} to={`/pages/${page.id}`}>
                                <Table.Cell>{page.id}</Table.Cell>
                                <Table.Cell>{page.title.en}</Table.Cell>
                                <Table.Cell>{page.title.nl}</Table.Cell>
                            </TableSelectableRow>
                        ))}
                    </Table.Body>
                </Table>
            )}
        </Container>
    );
};
