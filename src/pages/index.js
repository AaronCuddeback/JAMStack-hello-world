import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi fellow programmers!</h1>
    <p>
      My name is Aaron. I am a new developer who has decided to take up
      programming later in life. I have always been interested in computers but
      decided that after many years in another field that I wanted to puruse
      work full time within software developmenet.
    </p>
    <p>
      I hope to one day be able to build my own fully developed apps and
      possibly even land a career in software development. You can see my
      portfolio page{' '}
      <a href="https://aaroncuddeback.com/" target="_blank">
        Here
      </a>. You can also look at my GitHub profile
      <a href="https://github.com/aaroncuddeback"> Here</a>.
    </p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
