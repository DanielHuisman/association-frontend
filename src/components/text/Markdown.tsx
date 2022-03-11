import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkSubSuper from 'remark-sub-super';

const plugins = [
    [remarkSubSuper]
];

const renderers = {
    sup: 'sup',
    sub: 'sub'
};

export interface MarkdownProps {
    source: string;
}

export const Markdown = ({source}) => (
    <ReactMarkdown
        source={source}
        plugins={plugins}
        // @ts-ignore
        renderers={renderers}
    />
);
