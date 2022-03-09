import React from 'react';

export interface SpoilerProps {
    open: boolean;
}

export const Spoiler: React.FC<SpoilerProps> = ({open, children, ...props}) => (
    <div style={{display: open ? 'block' : 'none'}} {...props}>
        {children}
    </div>
);
