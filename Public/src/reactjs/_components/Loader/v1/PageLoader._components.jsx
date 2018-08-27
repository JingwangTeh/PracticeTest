import React from 'react';

class PageLoaderComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <p>Loading...</p>
            </div>
        )
    }
}

export { PageLoaderComponent };