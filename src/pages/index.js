import * as React from "react"
import "@fontsource/open-sans";
import './index.css';

// markup
const IndexPage = () => {
  return (

    <main class="mainPage">

      <header class="mainPage-header">
        <img class="header-avatar" src="http://1.gravatar.com/avatar/cabe66413108f0e16e9e2edbf1cb0b2a" alt=""/>

        <h1 class="header-name">Alban Lorillard</h1>
        <p class="header-description">Ingénieur logiciel @ SNCF Connect</p>

        <ul class="header-contact">
          <li><a href="https://www.linkedin.com/in/albanlorillard/">LinkedIn</a></li>
          <li><a href="https://twitter.com/alban_lorillard">Twitter</a></li>
          <li><a href="https://github.com/albanlorillard">Github</a></li>
          <li><a href="https://medium.com/@albanlorillard">Medium</a></li>
        </ul>
      </header>

    </main>
  )
}

export default IndexPage
