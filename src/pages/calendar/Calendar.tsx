import React from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {Container, Header, Grid} from 'semantic-ui-react';

import {CALENDARS} from '../../constants';
import {Text} from '../../components/text/Text';

export const Calendar: React.FC = () => {
    const {t} = useTranslation();

    return (
        <Container>
            <Helmet title={t('events:calendar.header', 'Calendar')} />
            <Header size="huge">{t('events:calendar.header', 'Calendar')}</Header>

            <Text name="calendar" />

            <Grid columns={2} stackable>
                <Grid.Row>
                    <Grid.Column>
                        <Header>{t('events:calendar.facebook.header', 'Facebook Calendar')}</Header>
                        <iframe
                            src={CALENDARS.facebook}
                            style={{width: '100%', height: '500px'}}
                            frameBorder="0"
                            scrolling="no"
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <Header>{t('events:calendar.google.header', 'Google Calendar')}</Header>
                        <iframe
                            src={CALENDARS.google}
                            style={{width: '100%', height: '500px'}}
                            frameBorder="0"
                            scrolling="no"
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};
