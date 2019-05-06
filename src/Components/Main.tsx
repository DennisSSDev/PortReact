import React, { Component } from "react";
import SHeader, { SCarousel } from "./Helper";
import { CreatorData } from "../Content/Data";
import { Grid, Header } from "semantic-ui-react";
// Hold the front facing data that the user will view upon opening the website
export default class Main extends Component {
  render() {
    return (
      <div>
        <SHeader />
        <div>
          <Grid centered columns={2}>
            <Grid.Column>
              <Header as="h4">{CreatorData.creatorMessage}</Header>
            </Grid.Column>
          </Grid>
        </div>
        <SCarousel />
      </div>
    );
  }
}

// hold the main content section of the website like the grid of projects and their modules
export class ProjectGrid extends Component {
  render() {
    return (
      <div>
        <p>Place holder for the grid of projects</p>
      </div>
    );
  }
}

// hold the data for resume and contact
export class Extern extends Component {
  render() {
    return (
      <div>
        <p>Place holder for the grid of projects</p>
      </div>
    );
  }
}
