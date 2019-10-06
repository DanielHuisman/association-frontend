import {TranslatableFragment} from '../types/generatedTypes';

export const formatGroupName = (translate: (translatable: TranslatableFragment) => string, group: any) => {
    if (group.parent) {
        return `${formatGroupName(translate, group.parent)} - ${translate(group.name)}`;
    }
    return translate(group.name);
};
