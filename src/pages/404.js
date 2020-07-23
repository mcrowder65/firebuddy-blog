import React from "react"
import { useRouter } from "next/router"
import { routeNames } from "src/route-names"

function FourOhFour() {
  const router = useRouter()
  React.useEffect(() => {
    router.push(routeNames.home.path)
  }, [])
  return null
}

export default FourOhFour
