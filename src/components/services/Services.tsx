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
        </div>
        <div>
          <span>
            <ion-icon name="brush" />
          </span>
        </div>
        <div>
          <span>
            <ion-icon name="thumbs-up" />
          </span>
        </div>
        <div>
          <span>
            <ion-icon name="help" />
          </span>
        </div>
      </div>
    </div>
  );
};
