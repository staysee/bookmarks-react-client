import React from 'react'
import './fab.css'

class Fab extends React.Component{
    render() {
        return(
            <div className="fab" onClick={e => this.props.showForm(true)}>
                &#43;
            </div>
        )
    }
}

export default Fab