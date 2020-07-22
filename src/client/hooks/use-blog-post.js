import React from "react"
import { useRouter } from "next/router"

export const useBlogPost = (filename) => {
  const router = useRouter()
  const [post, setPost] = React.useState({ loading: true })
  const file = filename || `${router.query.id}.md`
  React.useEffect(() => {
    import(`content/${file}`)
      .then((result) => {
        setPost({ ...result.default, loading: false })
      })
      .catch((error) => {
        setPost({ message: error.message, loading: false })
      })
  }, [router.query.id])

  return post
}
