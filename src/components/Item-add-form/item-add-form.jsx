import React from "react";
import './item-add-form.css'
export default class ItemAddForm extends React.Component{
 
    state={
        label: ''
    }
    onLabelChange=(e)=>{
        this.setState({
            label: e.target.value
        })
    }
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.addItem(this.state.label);
        this.setState({
            label: ''
        })
    }
    render(){
        const {addItem} = this.props
    
        return(
            <form className="item-add-form d-flex"
            onSubmit={this.onSumbit}>
                {this.state.label}
                <input className="form-control" type="text" name="" id="" value={this.state.label} onChange={this.onLabelChange} placeholder="add text"/>
                <button className="btn btn-outline-secondary" onClick={this.onSubmit}>Add Item</button>
            </form>
        )
    }
}