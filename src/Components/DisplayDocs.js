import {useState} from "react"

export default function DisplayDocs(props) {
    if (props.title !== "") {
        return (
            <div classNamer="container">
                <div className="display">
                    <div>
                        <p className="doc-title">{props.title}</p>
                    </div>
                    <div>
                        <p className="doc-content">{props.content}</p>
                    </div>
                    <div>
                        <button className="btn btn-clearDocs" onClick={() => props.clearDisplay()}>Clear</button>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
}