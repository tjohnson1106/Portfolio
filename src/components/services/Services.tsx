import React from "react";

import "./Services.css";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ion-icon": Icons;
    }
  }
}

interface Icons
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  name: string;
}

export const Services: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = () => {
  return (
    <div className="services">
      <h3>services</h3>
      <h2>what we offer</h2>

      <div className="row">
        <div>
          <span>
            <ion-icon name="phone-portrait" />
          </span>
          <h4>Web</h4>
          <p>Freshly designed</p>
        </div>
        <div>
          <span>
            <ion-icon name="brush" />
          </span>
          <h4>mobile</h4>
          <p>React Native, Swift, Objective-C</p>
        </div>
        <div>
          <span>
            <ion-icon name="thumbs-up" />
          </span>
          <h4>Favorites</h4>
          <p>
            Millions of users <ion-icon name="heart" />
          </p>
        </div>
        <div>
          <span>
            <ion-icon name="help" />
          </span>
          <h4>Question</h4>
          <p>Ask a question</p>
        </div>
      </div>
    </div>
  );
};
