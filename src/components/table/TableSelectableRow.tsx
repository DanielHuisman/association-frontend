import React, {MouseEvent, ReactNode} from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {Table} from 'semantic-ui-react';

import styles from './Table.css';

interface IProps extends RouteComponentProps {
    to: string;
    children: ReactNode[];
}

const TableSelectableRow = ({history, to, children}: IProps) => {
    const onMouseDown = (event: MouseEvent<HTMLTableRowElement>) => {
        // If the target was an icon, check the parent node (e.g. button)
        let target: any = event.target;
        if (target && target.tagName.toLowerCase() === 'i' && target.className.includes('icon')) {
            target = target.parentNode;
        }

        // Don't trigger if the target was a nested link or button
        if (target && ['a', 'button'].includes(target.tagName.toLowerCase())) {
            return;
        }

        if (event.button === 0) {
            history.push(to);
        } else if (event.button === 1) {
            window.open(to, 'channel');
        }
    };

    return (
        <Table.Row className={styles.selectableRow} onMouseDown={onMouseDown}>
            {children}
        </Table.Row>
    );
};

export default withRouter(TableSelectableRow);
