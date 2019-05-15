import React, { Component } from "react";
import SHeader, { SCarousel, STabContent, SBioCard, SocialTab } from "./Helper";
import {
  CreatorData,
  CreatorCards,
  CreatorSocialData,
  Projects,
  CreatorContact
} from "../Content/Data";
import { Grid, Segment } from "semantic-ui-react";
// Hold the front facing data that the user will view upon opening the website
export default class Main extends Component {
  render() {
    return (
      <div className="ui override black">
        <SHeader />
        <div>
          <Grid centered padded columns={2}>
            <Grid.Row>
              <Grid.Column>
                <div style={{ marginTop: 75 }}>
                  <Segment raised padded inverted>
                    <p>{CreatorData.creatorMessage}</p>
                  </Segment>
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <SocialTab socialItems={CreatorSocialData} />
            </Grid.Row>
          </Grid>
        </div>
        <SCarousel Items={CreatorCards} />
      </div>
    );
  }
}

// hold the main content section of the website like the grid of projects and their modules
export class ProjectGrid extends Component {
  render() {
    return (
      <Grid centered padded columns={1}>
        <Grid.Row>
          <STabContent projects={Projects} />
        </Grid.Row>
      </Grid>
    );
  }
}

// hold the data for resume and contact
export class Extern extends Component {
  render() {
    return <SBioCard userData={CreatorContact} />;
  }
}
