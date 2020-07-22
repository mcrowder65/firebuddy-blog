import React from "react"
import styled from "@emotion/styled"
import { useBlogPost } from "hooks/use-blog-post"
const NoBlog = styled.div``
function Blog() {
  const post = useBlogPost()

  return (
    <div>
      {post?.attributes?.title}
      {post.react && <post.react />}
    </div>
  )
}

export default Blog
