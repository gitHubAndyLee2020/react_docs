import {useState} from "react"

export default function CreateDocs(props) {
    let className = ""
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [family, setFamily] = useState("")
    const [size, setSize] = useState("")
    const [color, setColor] = useState("")
    const [dark, setDark] = useState(false) 

    className += props.alterFamily 
    className += " "
    className += props.alterSize

    const uploadDoc = () => {
        props.uploadDoc({title:title,content:content})
        setTitle("")
        setContent("")
    }

    const update = () => {
        props.setFontFamily(family)
        props.setFontSize(size)
        props.setFontColor(color)
    }

    const setDarkTheme = () => {
        if (!dark) {
            props.setFontColor(color !== "" ? color : "#FFFF00")
            props.setBackgroundColor("#181818")
            setDark(true)
        } else {
            props.setFontColor(color !== "" ? color : "black")
            props.setBackgroundColor("white")
            setDark(false)
        }
    }

    const updateFamily = (e) => {
        setFamily(e.target.value)
        props.setFontFamily(e.target.value)
    }

    const updateSize = (e) => {
        setSize(e.target.value)
        props.setFontSize(e.target.value)
    }

    const updateColor = (e) => {
        setColor(e.target.value)
        props.setFontColor(e.target.value)
    }

    const style = {
        color: props.alterColor,
        background: props.alterBackgroundColor,
    }

    return (
        <div>
            <div className="styling-bar">
                <select className="btn-create drop-down" value={family} onChange={updateFamily}>
                    <option value="sans-serif">Sans-Serif</option>
                    <option value="serif">Serif</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="cursive">Cursive</option>
                    <option value="minecraft">Minecraft</option>
                </select>
                <select className="btn-create drop-down" value={size} onChange={updateSize}>
                    <option value="s12">12</option>
                    <option value="s14">14</option>
                    <option value="s16">16</option>
                    <option value="s18">18</option>
                    <option value="s24">24</option>
                </select>
                <input className="btn-create btn-color" type="color" value={color} onChange={updateColor}/>
                <button className="btn-create btn-darkTheme" onClick={() => setDarkTheme()}>Dark Theme</button>
            </div>
            <div>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} style={style} className={className + " title-field"}/>
            </div>
            <div>
                <textarea onChange={(e) => setContent(e.target.value)} value={content} style={style} className={className + " content-field"}/>
            </div>
            <div>
                <button className="btn-control btn-add" onClick={uploadDoc}>Add</button>
            </div>
            <div>
                <button className="btn-control btn-clear" onClick={() => props.clearCreateDocs()}>Clear</button>
            </div>
        </div>
    )
}

CreateDocs.defaultProps = {
    alterColor: "black",
    alterSize: 12,
    alterFamily: "sans-serif",
    alterBackgroundColor: "white",
}