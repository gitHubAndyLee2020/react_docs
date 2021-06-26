import './App.css'
import ListDocs from './Components/ListDocs'
import DisplayDocs from './Components/DisplayDocs'
import CreateDocs from './Components/CreateDocs'
import AddCreateDocs from './Components/AddCreateDocs'
import {useState,useEffect} from "react"

function App() {
  let defaultFamily = "sans-serif"
  let defaultSize = "12"
  const [listDocs, setListDocs] = useState({documents: []})
  const [title, setTitle] = useState("")  
  const [content, setContent] = useState("")  
  const [display, setDisplay] = useState(true)
  const [displayCreate, setDisplayCreate] = useState(false)
  const [fontSize, setFontSize] = useState(defaultSize)
  const [fontColor, setFontColor] = useState("")
  const [fontFamily, setFontFamily] = useState(defaultFamily)
  const [backgroundColor, setBackgroundColor] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/docs").then((response) => response.json()).then((data) => setListDocs({documents:data}))
  }, [])

  const uploadDoc = (doc) => {
    let tempListDocs = listDocs.documents
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(doc)
    }
    fetch("http://localhost:3000/docs", requestOptions).then((response) => response.json()).then((data) => {
      tempListDocs.push(data)
      setListDocs({documents:tempListDocs})
    })
  }

  const showDoc = (doc) => {
    setDisplay(true)
    setTitle(doc.title)
    setContent(doc.content)
  }

  const deleteDoc = (doc) => {
    let docs = listDocs.documents 
    const requestOptions = {
      method: "DELETE"
    }
    fetch(`http://localhost:3000/docs/${doc.id}`, requestOptions).then((response) => {
      if (response.ok) {
        const docIndex = docs.indexOf(doc)
        docs.splice(docIndex,1)
        setListDocs({documents:docs})
      }
    })
  }

  const clearDisplay = () => {
    setDisplay(false)
  }

  const addCreateDocs = () => {
    setDisplayCreate(true)
  }

  const clearCreateDocs = () => {
    setDisplayCreate(false)
    setFontSize(defaultSize)
    setFontFamily(defaultFamily)
    setFontColor("")
    setBackgroundColor("")
  }

  return (
    <div>
      {displayCreate ? null : <AddCreateDocs addCreateDocs={addCreateDocs} />}
      {displayCreate ? null : <ListDocs docs={listDocs.documents} showDoc={showDoc} deleteDoc={deleteDoc}/>}
      {display && !displayCreate ? <DisplayDocs title={title} content={content} clearDisplay={clearDisplay}/> : null}
      {displayCreate ? <CreateDocs uploadDoc={uploadDoc} clearCreateDocs={clearCreateDocs} setFontSize={setFontSize} setFontFamily={setFontFamily} setFontColor={setFontColor} setBackgroundColor={setBackgroundColor} alterSize={fontSize} alterFamily={fontFamily} alterColor={fontColor} alterBackgroundColor={backgroundColor} /> : null}
    </div>
  )
}

export default App;
