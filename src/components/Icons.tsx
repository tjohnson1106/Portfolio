import React, { Component } from "react";

export const iconObj = [
  {
    icon: <ion-icon name="phone-portrait" />,
    title: "Responsive",
    description: "Freshly designed"
  },
  {
    icon: <ion-icon name="brush" />,
    title: "Mobile",
    description: "React Native, Swift, Objective-C"
  },
  {
    icon: <ion-icon name="thumbs-up" />,
    title: "Favorites",
    description: "Millions of users" + <ion-icon name="heart" />
  },
  {
    icon: <ion-icon name="help" />,
    title: "Question",
    description: "Ask a question"
  }
];

interface Props {
  extendIcon: any;
  extendTitle: string | number[];
  extendDescription: string | number[];
}

class Icons extends Component<Props> {
  render() {
    return (
      <div>
        <span>{this.props.extendIcon}</span>
        <h4>{this.props.extendTitle}</h4>
        <p>{this.props.extendDescription}</p>
      </div>
    );
  }
}

export default Icons as any;
