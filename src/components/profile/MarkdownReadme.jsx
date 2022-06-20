import React from 'react'
import Markdown from 'react-markdown'


export default function MarkdownReadme({
    loading,
    readmeData
}) {
    return (
        <div className="md">
            <h1> 📖 README.md</h1>
            {
                loading ?
                    <pre>Loading...</pre>
                    :
                    <Markdown>
                        {readmeData || 'README.md unavailable 🕵️‍♂️'}
                    </Markdown>
            }
        </div>
    )
}
