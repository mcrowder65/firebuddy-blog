import React from "react"
import styled from "@emotion/styled"
import { H2, Li, P, P2, Page } from "src/components/styled"
import Link from "next/link"
import { routeNames } from "src/route-names"
const Ol = styled.ol`
  line-height: 150%;
`
function Home() {
  return (
    <Page>
      <H2>Welcome!</H2>
      <br />
      <br />
      <P>
        This is a blog where I document my progress towards achieving financial
        independence!
      </P>
      <br />
      <br />
      <P>There are a couple of things that I want to accomplish:</P>
      <Ol>
        <Li>Achieve financial independence and potentially retire early</Li>
        <Li>
          Post{" "}
          <Link href={routeNames.netWorthTracker.path}>
            <a>net worth updates</a>
          </Link>{" "}
          once every year, and at every major milestone
        </Li>
        <Li>Share my experience with the world out in the open</Li>
      </Ol>
      <br />
      <H2>What is Fire?</H2>
      <br />
      <P>Financial Independence, Retire Early</P>
      <br />
      <P2>
        Financial independence means that you have enough investments or passive
        income so that you are no longer financially dependent on your regular
        day job to support yourself
      </P2>
    </Page>
  )
}

export default Home
