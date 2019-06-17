import React from 'react';
import history from '../history';

class SearchBar extends React.Component {

    state = { term: '' }

    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        })
    }

    onClickRisk = (event) => {
        event.preventDefault()

        history.push("/about")

    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onFormSubmit(this.state.term)
    }

    render() {
        return(
            <div className="search-div">
                <form onSubmit={this.onFormSubmit} className="form-div">
                <label> The Social Media Water Reputation Risk Tool: </label>
                <input
                    type="text"
                    onChange={this.onInputChange}
                    value={this.state.term}
                    placeholder="Enter Company or Industry"
                />
                <div className="buttons-div">
                    <button className="button-search">
                        Search
                    </button>
                    <button className="button-details" onClick={this.onClickRisk}>
                        Details
                    </button>
                </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
