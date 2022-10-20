import './src/styles/global.css';
import React from "react";
import type { GatsbyBrowser } from "gatsby";
import {Layout} from './src/templates/Layout'

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return (
    <Layout>{element}</Layout>
  )
}