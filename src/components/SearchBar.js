import React from 'react';

//Input controlado salva os dados no componente e não no DOM 
//No caso no State do componente

//Ao preencher o input setState
//Ao enviar o form disparar uma função de FLAG
//event.preventDefault(); << estava atrás disso

class SearchBar extends React.Component {
    state = { term: ''};

    onInputChange = (event) =>{
        this.setState({ term : event.target.value});
    }

    onFormSubmit = event =>{
        event.preventDefault();

        //Chamando a função que foi passada nos props com o term que foi passado aqui
        this.props.onFormSubmit(this.state.term);
    }

    //Make sure que você chamará o callback do parent 

    render() {
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label >Video Search</label>
                        <input type="text" value={this.state.term} 
                        onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;

