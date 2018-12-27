import React, { Component } from 'react'

export default class StreamJarDes extends Component {
  render() {
    return (
      <div>
        <h3 className="h-font h33 ddd">Welcome to StreamJar</h3>
        <p className="s-font p ddd">A tip jar for streamers aimed at helping streamers increase their revenue and keep fans more engaged</p>
        <h6 className="h-font ddd">How it Works</h6>
        <p className="s-font p ddd">StreamJar is a service that allows viewers to tip streamers for free (aka. the viewer doesn't have to spend their hard earned money). While some viewers do donate their own money, the vast majority of a streamer's audience do not. StreamJar aims to help streamers monetize this vast majority by helping get the non-paying viewers more involved. Our platform lets streamers create a profile which will generate a donations page. Instead of your typical donation page which asks viewers for PayPal or credit card info, StreamJar lists out available apps, surveys, and other actions viewers can complete. Each time a viewer completes an action such as downloading a free app, the streamer gets paid. You can view a demo page here (link to demo profile page).</p>
        <h6 className="h-font ddd">Sign Up Now</h6>
        <p className="s-font p ddd">As a way to say thank you to our early adopters, we are offering a 5% bonus to all streamers who create a profile during the Beta phase. For every donation you receive, you will earn a 5% bonus on top of the original donation. This bonus will last for the lifetime of your time with us at StreamJar. The bonus phase won't last long, so sign up now!</p>
        <h6 className="h-font ddd">Coming Soon</h6>
        <p className="s-font p ddd">StreamJar is currently in Beta testing. Not all features have been implemented. Here is what is in the pipeline.</p>
        <ul className="p ul">
          <li className="s-font ddd">Viewers can leave messages for streamer</li>
          <li className="s-font ddd">On stream alerts</li>
          <li className="s-font ddd">User suggestions</li>
        </ul>
        <p className="s-font p ddd">The StreamJar platform is designed for you, the streamer. We want to hear your suggestions on what you like and dislike. What could make this platform better? Is there something you need that is missing? We would love to hear your suggestions at <a href="http://feedback@streamjar.co/" target="_blank" rel="noopener noreferrer">feedback@streamjar.co</a>. The StreamJar team will try to add many features based on your feedback!</p>
      </div>
    )
  }
}
