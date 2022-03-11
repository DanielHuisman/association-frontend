import React from 'react';
import {Container, Grid} from 'semantic-ui-react';

export const SmallContainer: React.FC = ({children}) => (
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
