import React from "react";
class Touchme extends React.Component {

    handleClickButton = () => {
        alert("click me")
    }

    render() {
        return (
            <>
                <div className="Click">
                    <button onClick={ () => this.handleClickButton()}>Touch me 
                    </button>
                </div>
            </>
        )
    }
}
export default Touchme;