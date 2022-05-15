import * as React from "react"
import "@fontsource/open-sans";
import './index.css';
import HeaderComponent from '../components/header/header'
import { graphql, useStaticQuery } from "gatsby";

// markup
const IndexPage = () => {

  const { strapiHome } = useStaticQuery(graphql`
    query {
      strapiHome {
        headerName
        headerDescription
        headerAvatar {
          localFile {
            childImageSharp {
              gatsbyImageData(aspectRatio: 1)
            }
          }
          alternativeText
        }
        socialNetworkLinks {
          linkName
          linkUrl
        }
      }
    }
  `);

  

  return (

    
        <main class="mainPage">

        <HeaderComponent 
          class="mainPage-header"
          headerAvatar={strapiHome.headerAvatar[0]}
          headerName={strapiHome.headerName}
          headerDescription={strapiHome.headerDescription}
          headerContact={strapiHome.socialNetworkLinks}
          ></HeaderComponent>

      </main>
    )}

export default IndexPage
