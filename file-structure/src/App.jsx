import { useState } from 'react'
import './App.css'
import Explorer from './components/Explorer'
import explorer from './assets/data/FolderData'
import useDomTree from './Hooks/useDomTree'

function App() {
  const [explorerData, setExplorereData] = useState(explorer)
  const {insertNode,deleteNode,editNode} = useDomTree();
  const handleTreeNode = (folderId,obj) => {
    const newTree = insertNode(explorerData,folderId,obj);
    console.log("newTree",newTree)
    setExplorereData(newTree);
  }
  const handleTreeDeleteNode = (folderId) =>{
    const newTree = deleteNode(explorerData,folderId)
    setExplorereData(newTree);
  }

  const handleTreeEditNode = (folderId,name) =>{
    const newTree = editNode(explorerData,folderId,name)
    setExplorereData(newTree);
  }



  return (
    <>
      <Explorer handleTreeNode={handleTreeNode} handleTreeDeleteNode={handleTreeDeleteNode} handleTreeEditNode={handleTreeEditNode} explorer={explorerData}/>
    </>
  )
}

export default App
