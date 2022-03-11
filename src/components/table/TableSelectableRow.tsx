import React, {MouseEvent, ReactNode} from 'react';
import {useNavigate} from 'react-router-dom';
import {Table} from 'semantic-ui-react';

import styles from './Table.css';

export interface TableSelectableRowProps {
    to: string;
    children: ReactNode | ReactNode[];
}

export const TableSelectableRow: React.FC<TableSelectableRowProps> = ({to, children}) => {
    const navigate = useNavigate();

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
            navigate(to);
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
