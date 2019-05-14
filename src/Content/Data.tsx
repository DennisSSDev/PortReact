interface CreatorData {
  readonly creatorName: string;
  readonly creatorMessage: Array<string>;
}

export interface CreatorCard {
  readonly cardTitle: string;
  readonly cardImage: string;
}

export interface CreatorSocial {
  readonly link: string;
  readonly icon: string;
  readonly color: string;
  readonly subtext: string;
}

export interface ProjectPage {
  readonly paragraphs: Array<string>;
  readonly images: Array<string>;
}

export interface Contact {
  readonly email: string;
  readonly phone: string;
  readonly resumeLink: string;
  readonly externLinks: Array<{ icon: string; link: string; color: string }>;
}

export enum Tag {
  Game = 0,
  Tool = 1,
  Other = 2
}

export interface Project {
  readonly title: string;
  readonly titleImage: string;
  readonly subText: string;
  readonly toolsUsed: Array<string>;
  readonly extern: string;
  readonly tag: Tag;
  readonly Pages: Array<ProjectPage>;
}

export const CreatorData: CreatorData = {
  creatorName: "Dennis Slavinsky",
  creatorMessage: [
    "Hi, I'm a Gameplay and Tools Engineer.",
    "Here to help develop large and ambitious game projects and improve the lives of teams with user-centered tools."
  ]
};

export const CreatorContact: Contact = {
  email: "dennis.slavinsky@gmail.com",
  phone: "617-800-7164",
  resumeLink: "https://slavdev.com/resume/Dennis_Resume.pdf",
  externLinks: [
    {
      icon: "twitter",
      link: "https://twitter.com/SSStudioDennis",
      color: "twitter"
    },
    {
      icon: "linkedin",
      link: "https://linkedin.com/in/dennis-slavinsky",
      color: "linkedin"
    },
    {
      icon: "github",
      link: "https://github.com/DennisSSDev",
      color: "black"
    }
  ]
};

export const CreatorCards: Array<CreatorCard> = [
  {
    cardTitle: "Highly efficient user centered tools development",
    cardImage: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
  },
  {
    cardTitle: "Gameplay programming, with a high focus on AI and Combat",
    cardImage: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
  },
  {
    cardTitle: "XR Technology integrations",
    cardImage: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
  },
  {
    cardTitle: "Networked and Multiplayer design",
    cardImage: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
  }
];

export const CreatorSocialData: Array<CreatorSocial> = [
  {
    link: "https://www.linkedin.com/in/dennis-slavinsky",
    icon: "linkedin",
    color: "blue",
    subtext: "biz"
  },
  {
    link: "https://github.com/DennisSSDev",
    icon: "github",
    color: "orange",
    subtext: "code"
  }
];

export const Projects: Array<Project> = [
  {
    title: "Hearthstone Game Engine",
    titleImage: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
    subText:
      "A WebGL graphis engine created for every adventurer to explore and loot",
    toolsUsed: ["Python", "Maya", "Javascript", "Three.js"],
    extern: "https://people.rit.edu/dxs4043/igme230/finalproject/Project/",
    tag: Tag.Tool,
    Pages: [
      {
        paragraphs: [
          "Lasjhaihohivofadv",
          "shdf;kafjvkbjskb isdai;vniodsnvuosnduvn",
          "sdfoisa;oivn;ronvor"
        ],
        images: [
          "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
          "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
          "https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
        ]
      }
    ]
  },
  {
    title: " Engine",
    titleImage: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
    subText:
      "A WebGL graphis engine created for every adventurer to explore and loot",
    toolsUsed: ["Python", "Maya", "Javascript", "Three.js"],
    extern: "https://people.rit.edu/dxs4043/igme230/finalproject/Project/",
    tag: Tag.Tool,
    Pages: [
      {
        paragraphs: [
          "Lasjhaihohivofadv",
          "shdf;kafjvkbjskb isdai;vniodsnvuosnduvn",
          "sdfoisa;oivn;ronvor"
        ],
        images: [
          "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
          "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
          "https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
        ]
      }
    ]
  },
  {
    title: "Hearthstone Game",
    titleImage: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
    subText:
      "A WebGL graphis engine created for every adventurer to explore and loot",
    toolsUsed: ["Python", "Maya", "Javascript", "Three.js"],
    extern: "https://people.rit.edu/dxs4043/igme230/finalproject/Project/",
    tag: Tag.Tool,
    Pages: [
      {
        paragraphs: [
          "Lasjhaihohivofadv",
          "shdf;kafjvkbjskb isdai;vniodsnvuosnduvn",
          "sdfoisa;oivn;ronvor"
        ],
        images: [
          "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
          "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
          "https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
        ]
      }
    ]
  },
  {
    title: "HearthsEngine",
    titleImage: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
    subText:
      "A WebGL graphis engine created for every adventurer to explore and loot",
    toolsUsed: ["Python", "Maya", "Javascript", "Three.js"],
    extern: "https://people.rit.edu/dxs4043/igme230/finalproject/Project/",
    tag: Tag.Game,
    Pages: [
      {
        paragraphs: [
          "Lasjhaihohivofadv",
          "shdf;kafjvkbjskb isdai;vniodsnvuosnduvn",
          "sdfoisa;oivn;ronvor"
        ],
        images: [
          "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
          "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
          "https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
        ]
      }
    ]
  },
  {
    title: "GGgine",
    titleImage: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
    subText:
      "A WebGL graphis engine created for every adventurer to explore and loot",
    toolsUsed: ["Python", "Maya", "Javascript", "Three.js"],
    extern: "https://people.rit.edu/dxs4043/igme230/finalproject/Project/",
    tag: Tag.Game,
    Pages: [
      {
        paragraphs: [
          "Lasjhaihohivofadv",
          "shdf;kafjvkbjskb isdai;vniodsnvuosnduvn",
          "sdfoisa;oivn;ronvor"
        ],
        images: [
          "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
          "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
          "https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
        ]
      }
    ]
  },
  {
    title: "Hear",
    titleImage: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
    subText:
      "A WebGL graphis engine created for every adventurer to explore and loot",
    toolsUsed: ["Python", "Maya", "Javascript", "Three.js"],
    extern: "https://people.rit.edu/dxs4043/igme230/finalproject/Project/",
    tag: Tag.Game,
    Pages: [
      {
        paragraphs: [
          "Lasjhaihohivofadv",
          "shdf;kafjvkbjskb isdai;vniodsnvuosnduvn",
          "sdfoisa;oivn;ronvor"
        ],
        images: [
          "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
          "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
          "https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
        ]
      }
    ]
  },
  {
    title: "HrthsEngine",
    titleImage: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
    subText:
      "A WebGL graphis engine created for every adventurer to explore and loot",
    toolsUsed: ["Python", "Maya", "Javascript", "Three.js"],
    extern: "https://people.rit.edu/dxs4043/igme230/finalproject/Project/",
    tag: Tag.Other,
    Pages: [
      {
        paragraphs: [
          "Lasjhaihohivofadv",
          "shdf;kafjvkbjskb isdai;vniodsnvuosnduvn",
          "sdfoisa;oivn;ronvor"
        ],
        images: [
          "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
          "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
          "https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
        ]
      }
    ]
  },
  {
    title: "gine",
    titleImage: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
    subText:
      "A WebGL graphis engine created for every adventurer to explore and loot",
    toolsUsed: ["Python", "Maya", "Javascript", "Three.js"],
    extern: "https://people.rit.edu/dxs4043/igme230/finalproject/Project/",
    tag: Tag.Other,
    Pages: [
      {
        paragraphs: [
          "Lasjhaihohivofadv",
          "shdf;kafjvkbjskb isdai;vniodsnvuosnduvn",
          "sdfoisa;oivn;ronvor"
        ],
        images: [
          "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
          "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
          "https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
        ]
      }
    ]
  },
  {
    title: "ear",
    titleImage: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
    subText:
      "A WebGL graphis engine created for every adventurer to explore and loot",
    toolsUsed: ["Python", "Maya", "Javascript", "Three.js"],
    extern: "https://people.rit.edu/dxs4043/igme230/finalproject/Project/",
    tag: Tag.Other,
    Pages: [
      {
        paragraphs: [
          "Lasjhaihohivofadv",
          "shdf;kafjvkbjskb isdai;vniodsnvuosnduvn",
          "sdfoisa;oivn;ronvor"
        ],
        images: [
          "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
          "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
          "https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
        ]
      }
    ]
  }
];
