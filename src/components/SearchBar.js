import React from 'react';

//Controlled components save input data on itself
//Uncontrolled saves on DOM , in this case on state


//When typying on input you call onInputChange and sets the state
//event.preventDefault(); << Was looking for that for other reasons...

class SearchBar extends React.Component {
    state = { term: ''};

    onInputChange = (event) =>{
        this.setState({ term : event.target.value});
    }


    //When you submit the form
    onFormSubmit = event =>{
        event.preventDefault();

        //this function comes via props from App
        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label >Digite algo para buscar vídeos no YouTube</label>
                        <input type="text" value={this.state.term} 
                        onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;

