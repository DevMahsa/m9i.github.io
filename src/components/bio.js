/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter, faGithub} from "@fortawesome/free-brands-svg-icons"

// library.add(faAddressBook);

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter,
            github
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (

    <div>
      <div
        style={{
          display: `flex`,
          flexDirection: `row`,
          marginBottom: rhythm(1),
        }}
      >
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 100,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <div>
          <p>
          Written by <strong>{author}</strong> who lives and works in Tehran/Iran
          building useful things.
          </p>
          {` `}
        <ul className="social-media">
          <li> <a href={`https://twitter.com/${social.twitter}`}>
          <FontAwesomeIcon icon={faTwitter}/>
            
        </a>
          </li>
          <li>
            <a href={`https://github.com/${social.github}`}>
            <FontAwesomeIcon icon={faGithub}/>

        </a>
          </li>
        </ul>
      </div>
      </div>


    </div>
  )
}

export default Bio
