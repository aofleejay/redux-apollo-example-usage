import React, { Component } from 'react'
import { gql } from 'apollo-boost'
import { connect } from 'react-redux'
import client from '../client'

const fetchRates = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`

class App extends Component {
  componentDidMount() {
    this.fetchRates()
  }

  fetchRates = () => {
    client.query({ query: fetchRates }) // Maybe use "async action" instead.
      .then((response) => {
        this.props.dispatch({ // Maybe use "action creator" instead.
          type: 'FETCH_RATES_SUCCESS',
          rates: response.data.rates,
        })
      })
  }
  
  render() {
    return (
      <div>
        <h1>Props</h1>
        <ul>
          {this.props.rates.map(rate => (
            <li key={rate.currency}>
              currency: {rate.currency} rate: {rate.rate}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  rates: state.rates,
})

export default connect(mapStateToProps)(App)
