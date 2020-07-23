import React from "react"

import fileList from "get-all-blog-posts"
const files = fileList.map((filename) => `content/${filename}`)
const getFiles = async () => {
  return Promise.all(
    files.map(async (file) => {
      try {
        const result = await import(file)
        return result.default
      } catch (e) {
        return e.message
      }
    })
  )
}
export const useBlogPosts = () => {
  const [posts, setPosts] = React.useState({ loading: true })
  React.useEffect(() => {
    getFiles().then((resolvedFiles) => {
      setPosts({ files: resolvedFiles, loading: false })
    })
  }, [])

  return posts
}
