import React from "react"
import styled from "@emotion/styled"
import Link from "next/link"
import Providers from "src/client/providers"
import { useRouter } from "next/router"
const A = styled.a`
  margin-right: 20px;
  cursor: pointer;
  color: ${(props) => {
    if (
      (props.children.toLowerCase() === "home" && props.pathname === "/") ||
      props.children.toLowerCase() === props.pathname.replace("/", "")
    ) {
      return props.theme.palette.accent
    }
  }};
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
    <Providers>
      <Container>
        <Content>
          <Title>
            <H>Firebuddy</H>
            <div>
              <Link href="/">
                <A pathname={router.pathname}>Home</A>
              </Link>
              <Link href="/about">
                <A pathname={router.pathname}>About</A>
              </Link>
              <Link href="/blog">
                <A pathname={router.pathname}>Blog</A>
              </Link>
              <Link href="/contact">
                <A pathname={router.pathname}>Contact</A>
              </Link>
            </div>
          </Title>
          <Component {...pageProps} />
        </Content>
      </Container>
    </Providers>
  )
}

export default App
