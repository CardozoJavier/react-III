import React from "react";
import FilterInput from "../components/FilterInput";
import Artists from "../components/Artists";

export default class FilterableArtistsContainer extends React.Component {
    constructor(){
      super();
      this.state = {
       inputValue: "",
       
        };
    this.handleChange = this.handleChange.bind(this);
    }

    handleChange (evt) {
    const value = evt.target.value;
    this.setState({
        inputValue: value
    });
    }

    render() {
        const artistFiltrado = this.props.artists.filter((artist) => artist.name.includes(this.state.inputValue))

        return (
            <div>
                <FilterInput handleChange={this.handleChange}/>
                <Artists artists={artistFiltrado}/>
            </div>
        )
    }
};