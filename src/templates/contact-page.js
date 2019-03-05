import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import * as Icon from 'react-feather';

export const ContactPageTemplate = ({ name, address1, address2, city_state_zip, phone, fax, email }) => {
  return (
    <div>
      <div className="container container-main grid-md">
        <div className="card">
          <div className="card-header">
            Address
          </div>
          <div className="card-body">
            {name}<br />
            {address1}<br />
            {address2}<br />
            {city_state_zip}
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            Phone
          </div>
          <div className="card-body">
            T: {phone}<br />
            F: {fax}<br />
            E: {email}
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="d-inline-block float-right">
          <a className="btn btn-sm btn-link tooltip tooltip-left" data-tooltip="Settings" rel="noopener noreferrer" href="https://ceawater.geosync.cloud/admin" target="_blank">
            <Icon.Settings size={16}/>
          </a>
        </div>
      </div>
    </div>
  )
}

ContactPageTemplate.propTypes = {
  address: PropTypes.string,
  phone: PropTypes.string,
}

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ContactPageTemplate
        name={frontmatter.name} 
        address1={frontmatter.address1}
        address2={frontmatter.address2}
        city_state_zip={frontmatter.city_state_zip}
        phone={frontmatter.phone}
        fax={frontmatter.fax}
        email={frontmatter.email}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        name,
        address1,
        address2
        city_state_zip,
        phone,
        fax,
        email
      }
    }
  }
`