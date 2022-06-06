import React from "react"
import ReactDOM from "react-dom"

function App() {
    return (
        <div className="contact">
            <div className="contact-card">
                <img src="http://placekitten.com/300/200"/>
                <h3>Mr. Whiskerson</h3>
                <p>Phone: (212) 555-1234</p>
                <p>Email: mrwhiskax@catnap.meow</p>
            </div>
            
            <div className="contact-card">
                <img src="http://placekitten.com/400/200"/>
                <h3>Fluffykins</h3>
                <p>Phone: (212) 555-2345</p>
                <p>Email: fluff@me.com</p>
            </div>
            
            <div className="contact-card">
                <img src="http://placekitten.com/500/300"/>
                <h3>Jimbo</h3>
                <p>Phone: (212) 555-3456</p>
                <p>Email: ofworlds@yahoo.com</p>
            </div>
            
            <div className="contact-card">
                <img src="http://placekitten.com/400/300"/>
                <h3>Felix</h3>
                <p>Phone: (212) 555-4567</p>
                <p>Email: thecat@hotmail.com</p>
            </div>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))