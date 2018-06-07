import React from "react";
import NewPlaylist from "../components/NewPlaylist";
// import Artists from "../components/Artists";

export default class NewPlaylistContainer extends React.Component {
    constructor(){
      super();
      this.state = {
       inputValue: "",
       
        };
    this.handleChangePl = this.handleChangePl.bind(this);
    this.consolSubmit = this.consolSubmit.bind(this);
    }

    handleChangePl (evt) {
    const value = evt.target.value;
    this.setState({
        inputValue: value
    });
    }

    consolSubmit(e) {
        e.preventDefault()
        console.log(this.state.inputValue)
        this.setState({
            inputValue: ""
        })
    }

    

    render() {  
    const check = this.state.inputValue.length < 17 ? false : true;

        return (
            <div>
                <NewPlaylist check={check} inputValue={this.state.inputValue} handleChangePl={this.handleChangePl} consolSubmit={this.consolSubmit}/>
            </div>
        )
    }
};