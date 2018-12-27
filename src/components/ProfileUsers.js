import React, { Component } from 'react';
import axios from 'axios';
import numeral from 'numeral';

export default class ProfileUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ip: '',
      offers: []
    }
  }
  componentDidMount() {
    axios.get('https://ipapi.co/json')
      .then((res) => {
        return axios.get(`https://mobverify.com/api/v1/?affiliateid=21509&ip=${res.data.ip}&ctype=3&aff_sub3=1001&aff_sub4=1001`)
          .then((res) => {
            console.log(res.data)
            this.setState({ offers: res.data.offers })
          })
      })

  }
  render() {
    return (
      <div className="mb-3 container">
        <h3 style={{ width: '100%', fontWeight: '400' }} className="font-family-change text-center">Austin Ross</h3>
        <div className="row mt-3">
          <div className="col-md-6 col-12">
            <div className="mb-3 card">
              <h5 className="details mt-3">Your Details</h5>
              <hr className="hr" />
              <div className="card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-12">
            <div className="card">
              <h5 className="details mt-3">Donate to this streamer</h5>
              <hr className="hr" />
              <div className="card-body">
                <div className="row">
                  {
                    this.state.offers.length === 0 ? (
                      <div>
                        No offers at the time
                    </div>
                    ) : (
                        this.state.offers.map(offer => {
                          return (
                            <div className="col-6">
                              <a className="no_underline" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', backgroundColor: '#009688', marginBottom: '0.6rem', justifyContent: 'space-between' }} key={offer.offerid} href={offer.link}>
                                <div>
                                  <img height="96" width="96" className="img-offers" alt="Offers" src={offer.picture}></img>
                                </div>
                                <div style={{ padding: '0.2rem' }}>
                                  <p className="ddd" style={{
                                    fontSize: '0.9rem',
                                    marginBottom: '0.5rem', fontWeight: '500'
                                  }}>{offer.name_short}</p>
                                  <p className="ddd" style={{
                                    fontSize: '0.9rem',
                                    marginBottom: '0.5rem'
                                  }}>{offer.adcopy}</p>
                                </div>
                                <div className="pay-point">
                                  <p style={{ marginBottom: '0.5rem', marginTop: '0.3rem' }} className="h-font ddd">{numeral(offer.payout * 0.80).format('$0,0.00')}</p>
                                </div>
                              </a>
                            </div>
                          )
                        })
                      )
                  }
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
