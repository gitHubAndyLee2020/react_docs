import {useState} from "react"

export default function AddCreateDocs(props) {
    return (
        <div>
            <button className="btn btn-addCreateDocs" onClick={() => props.addCreateDocs()}>Create Documentation</button>
        </div>
    )
}