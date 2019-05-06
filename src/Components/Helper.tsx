import React, { Component, createRef } from "react";
import { ImportantTitle } from "./Misc";
import { CreatorData } from "../Content/Data";
import { Header, MenuItemProps, Sticky } from "semantic-ui-react";
import { Menu } from "semantic-ui-react";

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
        <Sticky context={this.contextRef}>
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
        </Sticky>
      </div>
    );
  }
}

class SCarousel extends Component {
  render() {
    return (
      <div>
        <p>Placeholder for carousel</p>
      </div>
    );
  }
}

export default SHeader;
export { SCarousel };
