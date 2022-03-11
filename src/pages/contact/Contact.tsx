import React from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {Container, Grid, Header, List, Button, Icon} from 'semantic-ui-react';

import {FORMS} from '../../constants';
import {Text} from '../../components/text/Text';

export const Contact: React.FC = () => {
    const {t, i18n} = useTranslation();

    return (
        <Container>
            <Grid stackable>
                <Grid.Row>
                    <Grid.Column width={6}>
                        <Helmet title={t('general:contact.header', 'Contact')} />
                        <Header size="huge">{t('general:contact.header', 'Contact')}</Header>

                        <Text name="contact" />

                        <List size="large" style={{margin: '0em 0em 2em 0em'}}>
                            <List.Item>
                                <List.Header>{t('general:contact.address.postal', 'Postal address')}</List.Header>
                            </List.Item>
                            <List.Item>J&SV Exaltio (S2.53A)</List.Item>
                            <List.Item>Postbus 70000</List.Item>
                            <List.Item>7500KB Enschede</List.Item>
                        </List>
                        {/* <List size="large" style={{margin: '2em 0em'}}>
                            <List.Item>
                                <List.Header>{t('general:contact.address.visitors', 'Visitors address')}</List.Header>
                            </List.Item>
                            <List.Item>J&SV Exaltio</List.Item>
                            <List.Item>Somestreet 1</List.Item>
                            <List.Item>Room 123</List.Item>
                            <List.Item>7500ZZ Enschede</List.Item>
                        </List> */}
                        <List size="large" style={{margin: '2em 0em'}}>
                            <List.Item>
                                <List.Header>{t('general:contact.address.email', 'Email address')}</List.Header>
                            </List.Item>
                            <List.Item>
                                {i18n.language.startsWith('en') && <a href="mailto:board@exaltio.nl">board@exaltio.nl</a>}
                                {i18n.language.startsWith('nl') && <a href="mailto:bestuur@exaltio.nl">bestuur@exaltio.nl</a>}
                            </List.Item>
                        </List>
                        <List size="large" style={{margin: '2em 0em'}}>
                            <List.Item>
                                <List.Header>{t('general:contact.other', 'Other details')}</List.Header>
                            </List.Item>
                            <List.Item>{t('general:contact.kvk', 'Chamber of Commerce')}: 65777212</List.Item>
                            <List.Item>{t('general:contact.iban', 'IBAN')}: NL06INGB0007273360</List.Item>
                            <List.Item>{t('general:contact.bic', 'BIC')}: INGBNL2A</List.Item>
                        </List>
                        <List size="large" style={{margin: '2em 0em'}}>
                            <List.Item>
                                <List.Header>{t('general:contact.social', 'Social media')}</List.Header>
                            </List.Item>
                            <List.Item>
                                <Button color="facebook" href="https://facebook.com/jsvexaltio" target="social">
                                    <Icon name="facebook" />
                                    Facebook
                                </Button>
                            </List.Item>
                            <List.Item>
                                <Button color="pink" href="https://instagram.com/jsvexaltio" target="social">
                                    <Icon name="instagram" />
                                    Instagram
                                </Button>
                            </List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <iframe
                            src={FORMS.contact[i18n.language.substring(0, 2)]}
                            style={{width: '100%', height: '1000px'}}
                            frameBorder="0"
                            scrolling="no"
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};
