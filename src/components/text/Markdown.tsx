import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkSubSuper from 'remark-sub-super';

interface IProps {
    source: string;
}

const plugins = [
    [remarkSubSuper]
];

const renderers = {
    sup: 'sup',
    sub: 'sub'
};

const Markdown = ({source}: IProps) => (
    <ReactMarkdown
        source={source}
        plugins={plugins}
        // @ts-ignore
        renderers={renderers}
    />
);

export default Markdown;
