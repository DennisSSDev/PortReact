import React, { Component, createRef } from "react";
import { ImportantTitle } from "./Misc";
import { CreatorData } from "../Content/Data";
import {
  Header,
  MenuItemProps,
  Sticky,
  Ref,
  Tab,
  Card,
  Image,
  Button
} from "semantic-ui-react";
import { Menu } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Pagination from "react-swipeable-views-utils";

interface HeaderState {
  activeItem?: string;
}

class SHeader extends Component<HeaderState> {
  static defaultProps: HeaderState = {
    activeItem: ""
  };
  contextRef = createRef();
  constructor(props: HeaderState) {
    super(props);
    this.state = {
      activeItem: props.activeItem
    };
  }
  handleItemClick = (e: any, data: MenuItemProps) =>
    this.setState({ activeItem: data.name });
  handleScroll = (e: Event) => console.log(window.scrollY);
  componentDidMount = () =>
    window.addEventListener("scroll", this.handleScroll);
  render() {
    // Make sure to include the social links
    const stateCopy: HeaderState = this.state;
    return (
      <div>
        <Menu secondary>
          <Menu.Item name="CreatorName" active={false}>
            <ImportantTitle text={CreatorData.creatorName} />
          </Menu.Item>
          <Menu.Menu position="right">
            <i className="blue huge linkedin alternate icon" />
            <i className="purple huge github square icon" />
            <Menu.Item
              name="Projects"
              active={stateCopy.activeItem === "Projects"}
              onClick={this.handleItemClick}
            >
              <Header as="h4">Projects</Header>
            </Menu.Item>
            <Menu.Item
              name="Resume"
              active={stateCopy.activeItem === "Resume"}
              onClick={this.handleItemClick}
            >
              <Header as="h4">Resume</Header>
            </Menu.Item>
            <Menu.Item
              name="Contact"
              active={stateCopy.activeItem === "Contact"}
              onClick={this.handleItemClick}
            >
              <Header as="h4">Contact</Header>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface CarouselProps {
  Items: Array<object>;
}

interface CarouselState {
  index: number;
  Items: Array<object>;
}

class SCarousel extends Component<CarouselProps, CarouselState> {
  static defaultProps: CarouselProps = {
    Items: []
  };
  constructor(props: CarouselProps) {
    super(props);
    this.state = {
      index: 0,
      Items: props.Items
    };
  }

  handleChangeIndex = (index: number) => {
    this.setState({
      index
    });
  };
  generateRowItems = (items: Array<object>): Array<any> => {
    let rows: Array<any> = [];
    for (let index in items) {
      rows.push(
        <Grid key={index} centered columns={1} padded>
          <Grid.Row>
            <Grid.Column width={3}>
              <p>I'm here and I am at index {index}</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    }
    return rows;
  };
  render() {
    const stateCpy = this.state;
    const rows = this.generateRowItems(stateCpy.Items);
    return (
      <div>
        <AutoPlaySwipeableViews
          index={stateCpy.index}
          onChangeIndex={this.handleChangeIndex}
        >
          {rows}
        </AutoPlaySwipeableViews>
      </div>
    );
  }
}

const panes = [
  {
    menuItem: "Games",
    render: () => <div>Games Projects</div>
  },
  {
    menuItem: "Tools",
    render: () => <div>Tools Projects</div>
  },
  {
    menuItem: "Other",
    render: () => <div>Other content</div>
  }
];

class STabContent extends Component {
  render() {
    return <Tab menu={{ secondary: true, pointing: true }} panes={panes} />;
  }
}

class SBioCard extends Component {
  render() {
    // add a column with renders
    return (
      <Card>
        <Card.Content>
          <Image
            floated="left"
            size="medium"
            src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
          />
          <Card.Header>Steve Sanders</Card.Header>
          <Card.Meta>Friends of Elliot</Card.Meta>
          <Card.Description>
            Steve wants to add you to the group <strong>best friends</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="blue">
              Get Resume
            </Button>
            <Button basic color="blue">
              Get Other stuff
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}

export default SHeader;
export { SCarousel, STabContent, SBioCard };
