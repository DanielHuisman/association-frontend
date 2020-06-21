import React from 'react';
import {useTranslation} from 'react-i18next';
import {Modal, ModalProps} from 'semantic-ui-react';

interface IProps extends ModalProps {
    onConfirm: () => void;
}

const ConfirmModal = ({onConfirm, ...props}: IProps) => {
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

export default ConfirmModal;
