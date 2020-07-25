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
        <Li>
          Share income progression, and tips/tricks for other software
          developers
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
      <br />
      <H2>How did I get into Fire?</H2>
      <br />
      <P2>
        An intern that was on my team in June of 2019 mentioned the concept to
        me when I mentioned that I was maxing out my Roth IRA and 401k, to which
        he asked, have you heard of Fire? I wasn't really aware of the concept
      </P2>
      <br />
      <P2>
        That summer was filled with us joking around about things being "Fire"
      </P2>
      <br />
      <P2>
        Whenever there was a good deal on something, or when we would drink our
        free Fresca or eat our free M&Ms, we would joke, "that's so fire!"
      </P2>
      <br />
      <P2>
        During June, July, and August of 2019, I just continued maxing out my
        retirement accounts, but I wasn't keeping a close eye on my budget like
        I should have. Come September of 2019, I made the goal with my wife to
        save $4200 per month for September, October, November, and December, and
        we were successful!
      </P2>
      <br />
      <P2>
        Checkout the{" "}
        <Link href={routeNames.blog.path}>
          <a>the blog</a>
        </Link>{" "}
        to see more about my journey!
      </P2>
    </Page>
  )
}

export default Home
