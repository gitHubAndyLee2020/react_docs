import {useState} from "react"

export default function ListDocs(props) {
    const showDoc = (doc) => {

        return (
            <div className="container">
                <div className="list">
                    <div>
                        <p className="doc-title">{doc.title}</p>
                    </div>
                    <div>
                        <button className="btn btn-showDoc" onClick={() => props.showDoc(doc)}>View</button>
                    </div>
                    <div>
                        <button className="btn btn-deleteDoc" onClick={() => props.deleteDoc(doc)}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container-list">
            {props.docs.map(showDoc)}
        </div>
    )
}