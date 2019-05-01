import * as React from "react";

import Icons, { iconObj } from "../Icons";
import "./Services.css";

// declare global {
//   namespace JSX {

//     interface IntrinsicElements {
//       "ion-icon": Icons;
//     }
//   }
// }

// interface Icons
//   extends React.DetailedHTMLProps<
//     React.HTMLAttributes<HTMLElement>,
//     HTMLElement
//   > {
//   name: string;
// }

export const Services: React.FC = () => {
  return (
    <div className="services">
      <h3>services</h3>
      <h2>what we offer</h2>

      <div className="row">
        <Icons
          extendIcon={iconObj[0].icon}
          extendTitle={iconObj[0].title}
          extendDescription={iconObj[0].description}
        />
        <Icons
          extendIcon={iconObj[1].icon}
          extendTitle={iconObj[1].title}
          extendDescription={iconObj[1].description}
        />
        <Icons
          extendIcon={iconObj[2].icon}
          extendTitle={iconObj[2].title}
          extendDescription={iconObj[2].description}
        />
        <Icons
          extendIcon={iconObj[3].icon}
          extendTitle={iconObj[3].title}
          extendDescription={iconObj[3].description}
        />
        {/* <div>
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
        </div> */}
      </div>
    </div>
  );
};

// const iconObj = [
//   {
//     icon: <ion-icon name="phone-portrait" />,
//     title: "Responsive",
//     description: "Freshly designed"
//   },
//   {
//     icon: <ion-icon name="brush" />,
//     title: "Mobile",
//     description: "React Native, Swift, Objective-C"
//   },
//   {
//     icon: <ion-icon name="thumbs-up" />,
//     title: "Favorites",
//     description: "Millions of users" + <ion-icon name="heart" />
//   },
//   {
//     icon: <ion-icon name="help" />,
//     title: "Question",
//     description: "Ask a question"
//   }
// ];

// interface Props {
//   extendIcon: string;
//   extendTitle: string;
//   extendDescription: string;
// }

// class Icons extends React.Component<Props> {
//   render() {
//     return (
//       <div>
//         <span>{this.props.extendIcon}</span>
//         <h4>{this.props.extendTitle}</h4>
//         <p>{this.props.extendDescription}</p>
//       </div>
//     );
//   }
// }
