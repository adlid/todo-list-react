import React from "react"

export default class SearchPanel extends React.Component{

    state={
        term:''
    }
    onSearchChange=(e)=>{
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    }
    render(){
        return(
            <input placeholder="search" placeholder="type to search" onChange={this.onSearchChange}/>
        )
    }
}

const SearhPanel2 =()=>{
    return(
        <input placeholder="search" placeholder="type to search"/>
    )
  }
  