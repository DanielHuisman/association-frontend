import React from 'react';
import {useTranslation} from 'react-i18next';
import {Menu, Image} from 'semantic-ui-react';

import gb from '../../../public/images/gb.svg';
import nl from '../../../public/images/nl.svg';
import {client} from '../../graphql';

export const LanguageMenuItem: React.FC = () => {
    const {i18n} = useTranslation();

    const handleClick = async () => {
        // Change language
        const language = i18n.language.substring(0, 2) === 'nl' ? 'en' : 'nl';
        localStorage.setItem('language', language);
        await i18n.changeLanguage(language);
        await client.resetStore();
    };

    return (
        <Menu.Item fitted="vertically" link onClick={handleClick} style={{textAlign: 'center'}}>
            <Image src={i18n.language.substring(0, 2) === 'nl' ? gb : nl} circular style={{width: '2em', height: '2em'}} />
        </Menu.Item>
    );
};
