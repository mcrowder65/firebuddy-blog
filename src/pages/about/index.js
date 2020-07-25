import React from "react"
import { H1, P2, Page as _Page, H2, P } from "src/components/styled"
import { differenceInYears } from "date-fns"
import styled from "@emotion/styled"
const getAge = (birthday) => {
  return differenceInYears(new Date(), birthday)
}
const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Img = styled.img`
  display: flex;
  justify-content: center;
  max-width: 300px;
  max-height: 400px;
  height: 95%;
  width: 95%;
`
const Page = styled(_Page)``
function About() {
  const mattAge = getAge(new Date(1994, 4, 16))
  const alyssaAge = getAge(new Date(1989, 6, 29))
  const charlieAge = getAge(new Date(2017, 4, 12))
  return (
    <Page>
      <H2>About me</H2>
      <br />
      <P>
        I am a {mattAge} year old male married to a {alyssaAge} year old woman
        named Alyssa
      </P>
      <br />
      <ImgContainer>
        <Img src="/alyssa-and-matt.jpg" alt="Alyssa and Matt" />
      </ImgContainer>
      <br />

      <P>
        We have a Golden Retriever named Charlie who is {charlieAge} years old
      </P>
      <br />
      <ImgContainer>
        <Img src="/charlie.jpg" alt="Charlie" />
      </ImgContainer>
      <br />
      <P>
        I am a software engineer and Alyssa is an elementary school teacher.
      </P>

      <br />
      <P>We currently live in the Northern Virginia area</P>
      <br />
      <P>
        Most days, you'll find me either in my apartment working remotely,
        running on the W&OD with Charlie, or going on hikes in Shenandoah.
      </P>
    </Page>
  )
}

export default About
