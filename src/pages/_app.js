import React from "react"
import styled from "@emotion/styled"
import Link from "next/link"
import Providers from "src/providers"
import { useRouter } from "next/router"
import { routeNames } from "src/route-names"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

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
  height: auto;
  ${(props) => props.theme.mq("xs")} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
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

const DesktopLinks = styled.div`
  ${(props) => props.theme.mq("xs")} {
    display: none;
  }
  height: auto;
  margin-top: 15px;
`
const Icon = styled(FontAwesomeIcon)`
  :active {
    opacity: 0.5;
  }
  ${(props) => props.theme.minq("xs")} {
    display: none;
  }
`
const Menu = styled.div`
  width: 100%;
  transition: max-height 0.5s, padding 0.5s, height 0.5s, visibility 0.5s;
  padding: ${(props) => props.open && "5px 0px 5px 0px"};
  max-height: ${(props) => (props.open ? "200px" : 0)};
  height: ${(props) => (props.open ? "200px" : 0)};
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  ${(props) => props.theme.minq("xs")} {
    visibility: hidden;
  }
`
const MobileLinks = styled.div`
  transition: visibility 0ms;
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`
function App({ Component, pageProps }) {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const links = (
    <>
      <Link href={routeNames.home.path}>
        <A
          pathname={router.pathname}
          route={routeNames.home}
          onClick={() => setOpen(false)}
        >
          {routeNames.home.children}
        </A>
      </Link>
      <Link href={routeNames.about.path}>
        <A
          pathname={router.pathname}
          route={routeNames.about}
          onClick={() => setOpen(false)}
        >
          {routeNames.about.children}
        </A>
      </Link>
      <Link href={routeNames.blog.path}>
        <A
          pathname={router.pathname}
          route={routeNames.blog}
          onClick={() => setOpen(false)}
        >
          {routeNames.blog.children}
        </A>
      </Link>
      <Link href={routeNames.netWorthTracker.path}>
        <A
          pathname={router.pathname}
          route={routeNames.netWorthTracker}
          onClick={() => setOpen(false)}
        >
          {routeNames.netWorthTracker.children}
        </A>
      </Link>
      <Link href={routeNames.contact.path}>
        <A
          pathname={router.pathname}
          route={routeNames.contact}
          onClick={() => setOpen(false)}
        >
          {routeNames.contact.children}
        </A>
      </Link>
    </>
  )
  return (
    <>
      <Providers>
        <Container>
          <Content>
            <Title open={open}>
              <H>Firebuddy</H>
              <Icon size="lg" icon={faBars} onClick={() => setOpen(!open)} />
              <DesktopLinks>{links}</DesktopLinks>
            </Title>
            <Menu open={open}>
              <MobileLinks open={open}>{links}</MobileLinks>
            </Menu>
            <Component {...pageProps} />
          </Content>
        </Container>
      </Providers>
    </>
  )
}

export default App
