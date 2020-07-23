import React from "react"
import matter from "gray-matter"
import ReactMarkdown from "react-markdown"
function PostTemplate(props) {
  return (
    <div>
      Title: {props.title}
      <ReactMarkdown source={props.content} escapeHtml={false} />
    </div>
  )
}

PostTemplate.getInitialProps = async (context) => {
  const { slug } = context.query
  const content = await import(`content/${slug}.md`)
  const data = matter(content.default)
  return {
    content: data.content,
    date: data.data.date,
    title: data.data.title,
    slug,
  }
}

export default PostTemplate
