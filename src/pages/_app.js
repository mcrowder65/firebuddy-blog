import React from "react"
import styled from "@emotion/styled"
import Link from "next/link"
import Providers from "src/providers"
import { useRouter } from "next/router"
import { routeNames } from "src/route-names"
import Head from "next/head"
const A = styled.a`
  margin-right: 20px;
  cursor: pointer;
  color: ${(props) => {
    if (props.pathname === props.route.path) {
      return props.theme.palette.accent
    }
  }};
  :hover {
    color: ${(props) => props.theme.palette.accent};
  }
`
const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
`
const Container = styled.div`
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`
const H = styled.div`
  font-size: 36px;
  margin-bottom: 15px;
`
const Content = styled.div`
  margin-top: 42px;
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  max-width: 1000px;
  flex-direction: column;
`
function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <Head>
        <meta property="og:image" content="/IMG_1735.jpg" />
      </Head>
      <Providers>
        <Container>
          <Content>
            <Title>
              <H>Firebuddy</H>
              <div>
                <Link href={routeNames.home.path}>
                  <A pathname={router.pathname} route={routeNames.home}>
                    {routeNames.home.children}
                  </A>
                </Link>
                <Link href={routeNames.about.path}>
                  <A pathname={router.pathname} route={routeNames.about}>
                    {routeNames.about.children}
                  </A>
                </Link>
                <Link href={routeNames.blog.path}>
                  <A pathname={router.pathname} route={routeNames.blog}>
                    {routeNames.blog.children}
                  </A>
                </Link>
                <Link href={routeNames.netWorthTracker.path}>
                  <A
                    pathname={router.pathname}
                    route={routeNames.netWorthTracker}
                  >
                    {routeNames.netWorthTracker.children}
                  </A>
                </Link>
                <Link href={routeNames.contact.path}>
                  <A pathname={router.pathname} route={routeNames.contact}>
                    {routeNames.contact.children}
                  </A>
                </Link>
              </div>
            </Title>
            <Component {...pageProps} />
          </Content>
        </Container>
      </Providers>
    </>
  )
}

export default App
