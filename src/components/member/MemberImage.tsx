import React from 'react';
import {Image, StrictImageProps, Icon, StrictIconProps} from 'semantic-ui-react';

import {MemberFragment} from '../../generated/graphql';

interface IMemberProps {
    member: MemberFragment;
    size?: number;
    style?: any;
}

type IProps = (Omit<StrictImageProps, 'size'> & IMemberProps) | (Omit<StrictIconProps, 'size'> & IMemberProps);

const MemberImage = ({member, size = 256, style, ...props}: IProps) => member.image ? (
    <Image
        src={member.image.url}
        alt={member.image.name}
        style={{
            width: `${size}px`,
            height: `${size}px`,
            ...style
        }}
        {...props}
    />
) : (
    <Icon
        name="user"
        style={{
            width: `${size}px`,
            height: `${size}px`,
            fontSize: `${size}px`,
            lineHeight: `${size}px`,
            marginLeft: '0px',
            ...style
        }}
        {...props}
    />
);

export default MemberImage;
