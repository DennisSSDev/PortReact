import React, { Component, createRef } from "react";
import { ImportantTitle } from "./Misc";
import { CreatorData, CreatorCard, Tag, ProjectPage } from "../Content/Data";
import {
  Header,
  MenuItemProps,
  Tab,
  Card,
  Image,
  Button,
  List,
  Icon,
  Modal,
  Segment
} from "semantic-ui-react";

import { Menu } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import { CreatorCards, CreatorSocial, Project, Contact } from "../Content/Data";
import {
  SemanticCOLORS,
  SemanticWIDTHS
} from "semantic-ui-react/dist/commonjs/generic";

import { Link, Element, animateScroll as scroll } from "react-scroll";

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
      <Menu fixed="top" inverted secondary pointing>
        <Menu.Item name="CreatorName" active={false} position="left">
          <ImportantTitle text={CreatorData.creatorName} />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item
            as={Link}
            to="Projects"
            spy={false}
            smooth={true}
            offset={-15}
            duration={500}
            name="Projects"
            active={stateCopy.activeItem === "Projects"}
            onClick={this.handleItemClick}
          >
            <Header as="h4">Projects</Header>
          </Menu.Item>
          <Menu.Item
            as="a"
            href="https://slavdev.com/resume/Dennis_Resume.pdf"
            target="_blank"
            name="Resume"
            active={stateCopy.activeItem === "Resume"}
            onClick={this.handleItemClick}
          >
            <Header as="h4">Resume</Header>
          </Menu.Item>
          <Menu.Item
            as={Link}
            to="Contact"
            spy={true}
            smooth={true}
            duration={500}
            name="Contact"
            active={stateCopy.activeItem === "Contact"}
            onClick={this.handleItemClick}
          >
            <Header as="h4">Contact</Header>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
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
    const CreatorData: Array<CreatorCard> = items as (typeof CreatorCards);
    for (let index in items) {
      rows.push(
        <Grid key={index} centered columns={1} padded>
          <Grid.Row>
            <Grid.Column width={4} className="override black">
              <Card fluid>
                <Card.Content>
                  <Card.Header textAlign="center">
                    <p style={{ color: "white" }}>
                      {CreatorData[index].cardTitle}
                    </p>
                  </Card.Header>
                </Card.Content>
                <Image src={CreatorData[index].cardImage} wrapped ui={false} />
              </Card>
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

interface Pane {
  menuItem: string;
  render: () => JSX.Element;
}
interface TabContentProps {
  projects: Array<Project>;
}
interface TabContentState {
  sortedProjects: ProjectHash;
}
interface ProjectHash {
  [key: number]: Array<Project>;
}
interface ProjectTileHash {
  [key: number]: Array<JSX.Element>;
}

interface ModalProps {
  readonly projectPages: Array<ProjectPage>;
  readonly projectName: string;
}

class SModal extends Component<ModalProps> {
  generateModalContent(): Array<JSX.Element> {
    let modalContent: Array<JSX.Element> = [];
    let page: ProjectPage = this.props.projectPages[0]; // currently only handing one page. TODO: handle multiple
    for (let index = 0; index < page.paragraphs.length; index++) {
      if (index % 2 === 0) {
        modalContent.push(
          <Grid.Row
            key={"Module_" + this.props.projectName + index}
            columns={1}
          >
            <Grid.Column>
              <Image
                src={page.images[index]}
                size="small"
                floated="left"
                as="div"
              />
              <p>{page.paragraphs[index]}</p>
            </Grid.Column>
          </Grid.Row>
        );
      } else {
        modalContent.push(
          <Grid.Row
            key={"Module_" + this.props.projectName + index}
            columns={1}
          >
            <Grid.Column>
              <Image
                src={page.images[index]}
                size="small"
                floated="right"
                wrapped
              />
              <p>{page.paragraphs[index]}</p>
            </Grid.Column>
          </Grid.Row>
        );
      }
    }
    return modalContent;
  }
  render() {
    const genContent = this.generateModalContent();
    return (
      <Modal trigger={<Button secondary>Details</Button>} centered>
        <Modal.Header>{this.props.projectName}</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Grid>{genContent}</Grid>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button primary>
            Close <Icon name="close" />
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

class STabContent extends Component<TabContentProps, TabContentState> {
  private panes: Array<Pane> = [];

  constructor(props: TabContentProps) {
    super(props);
    this.state = {
      sortedProjects: this.sortProjects(props)
    };
    console.log(this.state.sortedProjects);

    //supply the hashtable to a subfunction to generate a grid of columns/rows for each project and assign a module for each
    const projectKeys = Object.keys(this.state.sortedProjects);
    for (let key of projectKeys) {
      let parsedKey = +key;
      let tiles: Array<JSX.Element> = this.generateProjectTiles(
        this.state.sortedProjects[parsedKey],
        3
      );
      this.panes.push({
        menuItem: Tag[parsedKey],
        render: () => <Grid>{tiles}</Grid>
      });
    }
  }

  sortProjects(props: TabContentProps): ProjectHash {
    let Hash: ProjectHash = {};
    for (let propItem of props.projects) {
      let num = propItem.tag as number;
      if (Hash[num] == undefined) {
        Hash[num] = [];
        Hash[num].push(propItem);
      } else {
        Hash[num].push(propItem);
      }
    }
    return Hash;
  }

  generateProjectTiles(
    projects: Array<Project>,
    maxColumnsPerRow: number
  ): JSX.Element[] {
    let generatedTiles: JSX.Element[] = [];
    if (projects.length < maxColumnsPerRow) return generatedTiles;
    for (
      let index: number = 0;
      index < projects.length;
      index += maxColumnsPerRow
    ) {
      let gridColumns = this.generateColumns(
        projects,
        index,
        index + maxColumnsPerRow
      );
      generatedTiles.push(
        <Grid.Row columns={maxColumnsPerRow as SemanticWIDTHS} key={index}>
          {gridColumns}
        </Grid.Row>
      );
    }
    return generatedTiles;
  }
  generateColumns(
    projects: Array<Project>,
    min: number,
    max: number
  ): JSX.Element[] {
    let resultColumns: JSX.Element[] = [];
    if (projects.length < min || projects.length + 1 < max)
      return resultColumns;
    for (let index = min; index < max; ++index) {
      resultColumns.push(
        <Grid.Column key={projects[index].title}>
          <Card>
            <Image
              src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className="date">Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button primary>Link</Button>
              <SModal
                projectPages={projects[index].Pages}
                projectName={projects[index].title}
              />
            </Card.Content>
          </Card>
        </Grid.Column>
      );
    }
    return resultColumns;
  }
  render() {
    return (
      <Element name="Projects">
        <Tab
          menu={{
            secondary: true,
            pointing: true,
            attached: false,
            fluid: true,
            style: {
              display: "flex",
              justifyContent: "center"
            }
          }}
          panes={this.panes}
        />
      </Element>
    );
  }
}
interface BioCardProps {
  readonly userData: Contact;
}
interface BioCardState {
  bShowContact: boolean;
}
class SBioCard extends Component<BioCardProps, BioCardState> {
  constructor(props: BioCardProps) {
    super(props);
    this.state = { bShowContact: false };
  }

  toggleShowContact() {
    const stateCpy = this.state;
    this.setState({ bShowContact: !stateCpy.bShowContact });
  }
  generateExternalButtons(): JSX.Element[] {
    let buttons = [];
    for (let item of this.props.userData.externLinks) {
      buttons.push(
        <Button
          key={item.icon}
          circular
          color={item.color as SemanticCOLORS}
          icon={item.icon}
          as="a"
          href={item.link}
          target="_blank"
        />
      );
    }
    return buttons;
  }
  render() {
    // add a column with renders
    const externalButtons = this.generateExternalButtons();
    return (
      <Grid padded divided centered>
        <Grid.Row columns={1}>
          <Grid.Column width={7}>
            <Element name="Contact">
              <Card fluid color="red">
                <Card.Content>
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                    floated="left"
                    circular
                    size="small"
                  />
                  <p style={{ color: "grey" }}>
                    Te eum doming eirmod, nominati pertinacia argumentum ad his.
                    Ex eam alia facete scriptorem, est autem aliquip detraxit
                    at. Usu ocurreret referrentur at, cu epicurei appellantur
                    vix. Cum ea laoreet recteque electram, eos choro alterum
                    definiebas in. Vim dolorum definiebas an. Mei ex natum rebum
                    iisque.
                  </p>
                  {this.state.bShowContact && (
                    <Grid padded="vertically">
                      <List animated size="large" relaxed>
                        <List.Item
                          icon="black users"
                          content={
                            <p style={{ color: "black" }}>Dennis Slavinsky</p>
                          }
                        />
                        <List.Item
                          icon="black marker"
                          content={
                            <p style={{ color: "black" }}>Rochester, NY</p>
                          }
                        />
                        <List.Item
                          icon="black mail"
                          content={
                            <a href={`mailto:${this.props.userData.email}`}>
                              {this.props.userData.email}
                            </a>
                          }
                        />
                        <List.Item
                          icon="black phone"
                          content={
                            <p style={{ color: "black" }}>
                              {this.props.userData.phone}
                            </p>
                          }
                        />
                      </List>
                    </Grid>
                  )}
                  <Button
                    inverted
                    color="blue"
                    as="a"
                    href={this.props.userData.resumeLink}
                    target="_blank"
                  >
                    Resume
                  </Button>
                  <Button
                    inverted
                    color="red"
                    onClick={this.toggleShowContact.bind(this)}
                  >
                    Reveal Contact Info
                  </Button>
                  {externalButtons}
                </Card.Content>
              </Card>
            </Element>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

interface SocialTabProps {
  socialItems: Array<CreatorSocial>;
}

class SocialTab extends Component<SocialTabProps> {
  generateSocialButtons(): Array<any> {
    let iconButtons = [];
    for (let socialItem of this.props.socialItems) {
      iconButtons.push(
        <Grid.Column key={socialItem.icon}>
          <Button
            inverted
            color={socialItem.color as SemanticCOLORS}
            animated="fade"
            circular
            size="huge"
            as="a"
            href={socialItem.link}
            target="_blank"
          >
            <Button.Content visible>
              <i className={`${socialItem.icon} icon`} />
            </Button.Content>
            <Button.Content hidden>{socialItem.subtext}</Button.Content>
          </Button>
        </Grid.Column>
      );
    }
    return iconButtons;
  }
  render() {
    const iconButtons = this.generateSocialButtons();
    return (
      <Grid>
        <Grid.Row columns={iconButtons.length as SemanticWIDTHS}>
          {iconButtons}
        </Grid.Row>
      </Grid>
    );
  }
}

const Footer = () => {
  return (
    <Segment inverted vertical textAlign="center" size="small">
      <p style={{ padding: 0, margin: 0 }}>
        Created exclusively with Typescript+React
      </p>
      <p style={{ padding: 0, margin: 0 }}>(c) Dennis Slavinsky</p>
    </Segment>
  );
};

export default SHeader;
export { SCarousel, STabContent, SBioCard, SocialTab, Footer };
