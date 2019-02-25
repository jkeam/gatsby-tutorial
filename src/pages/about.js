import React, { Component } from 'react'
import User from '../components/user'
import Layout from '../components/layout'
import { Link } from 'gatsby'

class About extends Component {
  render() {
    return (
      <Layout>
        <div>
          <p>
            This is about
          </p>
          <Link to="/">Index</Link>

          <User
            username="Jane Doe"
            avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
            excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
          <User
            username="Bob Smith"
            avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
            excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
        </div>
      </Layout>
    )
  }
}

export default About
