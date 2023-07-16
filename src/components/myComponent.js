import React from "react";
class MyComponent extends React.Component {

    state = {
        FirstName: "",
        LastName: ""

    }
    OnChangeFirstName = (event) => {
        this.setState({
            FirstName: event.target.value
        })
    }
    OnChangeLastName = (event) => {
        this.setState({
            LastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log("final-render", this.state)
    }

    render() {
        // console.log("re-render: " , this.state)
        return (
            <>
            <form>
                <label htmlFor="fname">First name:</label><br/>
                <input 
                type="text" 
                value={this.state.FirstName}
                onChange = {(event) => this.OnChangeFirstName(event)}
                /><br/>
                
                <label htmlFor="lname"> Last name:</label><br/>
                <input 
                type="text" 
                value={this.state.LastName}
                onChange={(event) => this.OnChangeLastName(event)}
                /><br/><br/>
            <input type="submit"
                onClick={(event) => this.handleSubmit(event)}
            />
        </form> 
            </>
        )
    }
}
export default MyComponent;