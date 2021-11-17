import qs from 'qs';

export const CALENDARS = {
    google: `https://calendar.google.com/calendar/embed?${qs.stringify({
        src: 'exaltio.nl_coti4rpii68mt9sji8gg3n1ci8@group.calendar.google.com',
        ctz: 'Europe/Amsterdam',
        mode: 'MONTH',
        wkst: 2,
        showPrint: 0,
        showCalendars: 0,
        showTz: 0
    })}`,
    facebook: `https://www.facebook.com/v3.1/plugins/page.php?${qs.stringify({
        href: 'https://www.facebook.com/jsv.exaltio',
        app_id: '467043157146221',
        width: 1000,
        heigth: 1000,
        adapt_container_width: true,
        hide_cover: true,
        locale: 'en_GB',
        sdk: 'joey',
        show_facepile: false,
        small_header: true,
        tabs: 'events'
    })}`
};

export const FORMS = {
    contact: {
        en: 'https://docs.google.com/forms/d/e/1FAIpQLSeaC5HG5MfVugiTBoWaU85mYucLTBYmVmpk4TNLe9CAuoz1Lw/viewform?embedded=true',
        nl: 'https://docs.google.com/forms/d/e/1FAIpQLSerE62bM9TR73t99_6gA5QP30TVPMFBiheMH8he4IS4hphZdg/viewform?embedded=true'
    },
    join: {
        en: 'https://docs.google.com/forms/d/e/1FAIpQLSfjLcyym2o2KmDY5lQGsVxyiLlteARP84k87u-o29ikbqPH7g/viewform?embedded=true',
        nl: 'https://docs.google.com/forms/d/e/1FAIpQLScgCWUKLX_ITb-1_fwEg-uqKXwnh0pGXvY9zAWKpLZi7zvtOg/viewform?embedded=true'
    }
};

export const DOCUMENTS = {
    articlesOfAssociation: {
        en: '/media/articles_of_association.pdf',
        nl: '/media/statuten.pdf'
    },
    houseRegulations: {
        en: '/media/house_regulations.pdf',
        nl: '/media/huishoudelijk_reglement.pdf'
    },
    membershipFeeRegulations: {
        en: '/media/membership_fee_regulations.pdf',
        nl: '/media/contributiereglement.pdf'
    },
    privacyPolicy: {
        en: '/media/privacy_policy.pdf',
        nl: '/media/privacybeleid.pdf'
    }
};
