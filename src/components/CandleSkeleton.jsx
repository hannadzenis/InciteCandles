import React from "react";
import ContentLoader from "react-content-loader";

export const Skeleton = (props) => (
        <ContentLoader 
        className="candle-block"
        speed={2}
        width={260}
        height={526}
        viewBox="0 0 260 526"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="-2" rx="20" ry="20" width="260" height="300" /> 
        <rect x="0" y="351" rx="20" ry="20" width="260" height="85" /> 
        <rect x="0" y="313" rx="18" ry="18" width="260" height="27" /> 
        <rect x="0" y="448" rx="19" ry="19" width="115" height="45" /> 
        <rect x="145" y="448" rx="19" ry="19" width="115" height="45" />
    </ContentLoader>
)

