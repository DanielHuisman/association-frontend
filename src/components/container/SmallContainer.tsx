import React from 'react';
import {Container, Grid} from 'semantic-ui-react';

interface IProps {
    children: React.ReactNode;
}

const SmallContainer = ({children}: IProps) => (
    <Container>
        <Grid centered>
            <Grid.Row>
                <Grid.Column mobile={12} computer={8}>
                    {children}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
);

export default SmallContainer;
