import React from 'react';
import {useTranslation} from 'react-i18next';
import {Modal, ModalProps} from 'semantic-ui-react';

export interface ConfirmModaProps extends ModalProps {
    onConfirm: () => void;
}

export const ConfirmModal: React.FC<ConfirmModaProps> = ({onConfirm, ...props}) => {
    const {t} = useTranslation();

    return (
        <Modal
            size="tiny"
            actions={[
                {key: 'yes', content: t('general:yes', 'Yes'), positive: true, onClick: onConfirm},
                {key: 'no', content: t('general:no', 'No'), negative: true}
            ]}
            {...props}
        />
    );
};
