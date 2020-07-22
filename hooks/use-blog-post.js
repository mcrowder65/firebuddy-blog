import React from "react"
import { useRouter } from "next/router"

export const useBlogPost = () => {
  const router = useRouter()
  const [post, setPost] = React.useState({ loading: true })
  React.useEffect(() => {
    import(`content/${router.query.id}.md`)
      .then((result) => {
        setPost({ ...result.default, loading: false })
      })
      .catch((error) => {
        setPost({ message: error.message, loading: false })
      })
  }, [router.query.id])

  return post
}
