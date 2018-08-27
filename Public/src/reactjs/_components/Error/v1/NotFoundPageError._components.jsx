import React from 'react';

import { Link } from 'react-router-dom';

class NotFoundPageErrorComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { location } = this.props;

        return(
            <div>
                <div>
                    <h4>404</h4>
                    <h3>Sorry ! <code>{location.pathname}</code> Page not found </h3>
                    <h5>We’re sorry but the page you are looking for does nor exist. You could return to <Link to="/">homepage</Link> </h5>
                    {/* <div class="widget widget-search">
                        <div class="search-block">
                            <div class="search-inner">
                                <input type="text" class="search-info" placeholder="Enter Keywords..." />
                                <a href="#" class="search-button"><i class="fa fa-search" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div> */}
                    <i className="fa fas fa-bed"></i>
                    <i className="fas fa-frown"></i>
                </div>
            </div>
        )
    }
}

export { NotFoundPageErrorComponent }