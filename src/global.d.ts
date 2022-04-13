declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}
  
declare module '*.png' {
    const url: string;
    export default url;
}
  
declare module '*.jpg' {
    const url: string;
    export default url;
}

declare module '*.ttf';