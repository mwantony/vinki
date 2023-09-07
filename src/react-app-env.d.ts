/// <reference types="react-scripts" />
declare module 'formit';

declare module '*.mp4' {
    const src: string;
    export default src;
  }

  declare module 'react-image-magnify' {
    const ReactImageMagnify: any; // You may need to replace 'any' with appropriate types
    export default ReactImageMagnify;
  }