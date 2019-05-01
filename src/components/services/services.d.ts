declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ion-icon": Icons;
    }
  }
}

export interface Icons
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  name: string;
}
