import {PhoneNumberUtil} from 'google-libphonenumber';

export const isPhoneNumber = (value: string): boolean => {
    const phoneUtil = PhoneNumberUtil.getInstance();
    try {
        const phoneNumber = phoneUtil.parseAndKeepRawInput(value);
        return phoneUtil.isValidNumber(phoneNumber);
    } catch (error) {
        return false;
    }
};
