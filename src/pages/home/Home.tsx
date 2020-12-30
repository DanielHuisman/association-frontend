import React from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {Container, Grid, Header, Image, Button} from 'semantic-ui-react';

import logo from '../../../public/images/logo_white.svg';
import photo1 from '../../../public/images/photo1.jpg';
import photo2 from '../../../public/images/photo2.jpg';
import photo3 from '../../../public/images/photo3.jpg';
import photo4 from '../../../public/images/photo4.jpg';
import Text from '../../components/text/Text';

import styles from './Home.css';

const Home = () => {
    const {t} = useTranslation();

    return (
        <>
            <Helmet title={t('general:home.header', 'Home')} />

            <section className={styles.sectionBlue}>
                <Container>
                    <Image className={styles.image} src={photo1} fluid />
                    <Image className={styles.logo} src={logo} />
                </Container>
            </section>

            <section>
                <Container>
                    <Grid columns={3} stackable>
                        <Grid.Row className={styles.rowIntro}>
                            <Grid.Column textAlign="center">
                                <Header size="huge">
                                    {t('general:home.activities', 'Activities')}
                                    <div className="rainbow" />
                                </Header>
                                <Text name="home.intro.activities" />
                            </Grid.Column>
                            <Grid.Column textAlign="center">
                                <Header size="huge">
                                    {t('general:home.drinks', 'Drinks')}
                                    <div className="rainbow" />
                                </Header>
                                <Text name="home.intro.drinks" />
                            </Grid.Column>
                            <Grid.Column textAlign="center">
                                <Header size="huge">
                                    {t('general:home.join', 'Become a member')}
                                    <div className="rainbow" />
                                </Header>
                                <Text name="home.intro.join" />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </section>

            <section className={styles.sectionBlue}>
                <Container>
                    <Grid stackable>
                        <Grid.Row className={styles.row}>
                            <Grid.Column width={10}>
                                <Image src={photo2} />
                            </Grid.Column>
                            <Grid.Column width={6} verticalAlign="middle">
                                <Header size="huge" textAlign="center">
                                    {t('general:home.activities', 'Activities')}
                                    <div className="rainbow" />
                                </Header>
                                <Text name="home.activities" />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </section>

            <section>
                <Container>
                    <Grid stackable>
                        <Grid.Row className={styles.row}>
                            <Grid.Column width={6}  verticalAlign="middle">
                                <Header size="huge" textAlign="center">
                                    {t('general:home.drinks', 'Drinks')}
                                    <div className="rainbow" />
                                </Header>
                                <Text name="home.drinks" />
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Image src={photo3} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </section>

            <section className={styles.sectionBlue}>
                <Container>
                    <Grid stackable>
                        <Grid.Row className={styles.row}>
                            <Grid.Column width={10}>
                                <Image src={photo4} />
                            </Grid.Column>
                            <Grid.Column width={6} verticalAlign="middle">
                                <Header size="huge" textAlign="center">
                                    {t('general:home.join', 'Become a member')}
                                    <div className="rainbow" />
                                </Header>
                                <Text name="home.join" />

                                <div style={{textAlign: 'center'}}>
                                    <Button as={Link} to="/join" color="pink" size="large">
                                        {t('general:join.header', 'Become a member')}
                                    </Button>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </section>
        </>
    );
};

export default Home;
