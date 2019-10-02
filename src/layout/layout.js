/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Styled from 'styled-components';

import Header from "./Header"
import "./layout.css"
import Main from './main';
import { FooterRow } from './Footer';

import Colors from '../constants/Colors';

export const Container = Styled.div`
  display: flex;
  margin: 0;
  flex-direction: column;
  background: ${Colors.background};
  /* max-width: 960px; */
  color: white;
  min-height: 100vh;
  margin: 0 auto;
  font-family: 'Fira Sans', sans-serif;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Container>
        <Header>NS</Header>
        <Main>{children}</Main>
        <FooterRow />
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
