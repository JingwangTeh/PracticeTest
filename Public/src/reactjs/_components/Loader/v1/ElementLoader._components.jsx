import React from 'react';

import '../../../../css/scss/component/shimmerLoader-loader-util.scss';



class LoadingBar_shimmer extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { width, height, ...rest } = this.props;
        let divStyle = {};
        if (height) divStyle['height'] = height;
        if (width) divStyle['width'] = width;
        
        return (
            <span {...rest}>
                <span style={divStyle} 
                    className="animated-shimmerLoader">
                </span>
            </span>
        );
    }
}

export { LoadingBar_shimmer };