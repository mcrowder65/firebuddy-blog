import React from "react"
import fileList from "get-all-blog-posts"
import matter from "gray-matter"
import styled from "@emotion/styled"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const PostPreview = styled.div`
  background-color: lightgray;
  width: 240px;
  height: 240px;
  font-family: sans-serif;
  padding: 10px;
`

function Post(props) {
  return (
    <Container>
      {props.posts.map((post, index) => {
        const { title } = post
        return <PostPreview key={index}>{title}</PostPreview>
      })}
    </Container>
  )
}

Post.getInitialProps = async () => {
  const posts = await Promise.all(
    fileList.map(async (file) => {
      try {
        const content = await import(`content/${file}`)
        const result = matter(content.default)
        return {
          content: result.content,
          title: result.data.title,
          date: result.data.date,
        }
      } catch (e) {
        return e.message
      }
    })
  )

  return {
    posts,
  }
}
export default Post
