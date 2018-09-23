import React from 'react';

import '../../../../css/scss/component/dotLogo-loader.scss';



class PageLoaderComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="main-content shop-page loading-page 
                            d-flex align-items-center justify-content-center">
                <div className="container">
                    {/* Dot Loader */}
                    <div className="loading-dotLoader-wrapper">
                        <div className="loading-dotLoader-logo">
                            <img src="" alt="loading logo"/>
                        </div>
                        <div className="loading-dotLoader-container">
                            <div className="loading-dotLoader-5dotsContainer">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { PageLoaderComponent };