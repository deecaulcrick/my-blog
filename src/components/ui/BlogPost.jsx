import React from 'react'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Choose a style (e.g., 'docco')


function BlogPost({ content }) {
    return (
        <div className="blog-post">
            <ReactMarkdown remarkPlugins={[remarkGfm]}
                children={content}
                components={{
                    code(props) {
                        const { children, className, node, ...rest } = props
                        const match = /language-(\w+)/.exec(className || '')
                        return match ? (
                            <SyntaxHighlighter
                                {...rest}
                                children={String(children).replace(/\n$/, '')}
                                style={nord}
                                language={match[1]}
                                PreTag="div"
                            />
                        ) : (
                            <code {...rest} className={className}>
                                {children}
                            </code>
                        )
                    }
                }}
            />
        </div>
    )
}

export default BlogPost