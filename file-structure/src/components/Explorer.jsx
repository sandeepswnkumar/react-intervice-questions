import React, { useEffect, useRef, useState } from 'react'
import assets from '../assets/assets'

const Explorer = ({ handleTreeNode, handleTreeDeleteNode, handleTreeEditNode,explorer }) => {

    const [expended, setExpended] = useState(false)
    const [editableDisable, setEditableDisable] = useState(true);
    const [editableName, setEditableName] = useState(explorer.name);
    const [addNew, setAddNew] = useState({
        visible: false,
        isFolder: null,
    })

    const handleShowInput = (e, isFolder) => {
        e.stopPropagation()
        setExpended(true)
        setAddNew({
            visible: true,
            isFolder: isFolder
        })
    }

    const handleAddFile = (e) => {
        if (e.key == "Enter" && e.target.value) {
            let obj = {
                id: crypto.randomUUID(),
                name: e.target.value,
                isFolder: addNew.isFolder,
                items: []
            }
            console.log("obj", obj)
            handleTreeNode(explorer.id, obj)
            setAddNew({ ...addNew, visible: false })
        }
    }

    const handleEdit = (e) => {
        e.stopPropagation()
        setEditableDisable(false)
    }
    const handleDelete = (e,id) => {
        e.stopPropagation()
        console.log('node id',id);
        handleTreeDeleteNode(id)
    }

    const updateFolderNmae = (e, id) => {
        console.log(e.target.value);
        if (e.key == "Enter" && e.target.value) {
            handleTreeEditNode(explorer.id, e.target.value)
            setEditableDisable(true)
        }
    }

    if (explorer.isFolder) {
        return (
            <div>
                <div className='folder' onClick={() => setExpended(!expended)}>
                    <span> {expended ? "📂" : "📁"} <input className='folder-edit' onKeyUp={(e) => updateFolderNmae(e,explorer.id)} onChange={(e) => setEditableName(e.target.value)}  type="text" value={editableName} readOnly={editableDisable} style={{border : !editableDisable ? "1px solid black" : "none",backgroundColor : !editableDisable ? "white" : "transparent"}} /></span>
                    <div className='foler-action'>
                        <button onClick={(e) => handleShowInput(e, false)}><img src={assets.addFile} alt="" width="10" height="10" /></button>
                        <button onClick={(e) => handleShowInput(e, true)}><img src={assets.addFolder} alt="" width="10" height="10" /></button>
                        <button onClick={(e) => handleDelete(e,explorer.id)}><img src={assets.deleteIcon} alt="" width="10" height="10" /></button>
                        <button onClick={(e) => handleEdit(e)}><img src={assets.editIcon} alt="" width="10" height="10" /></button>
                    </div>
                </div>
                <div className='folder_items' style={{ display: expended ? "block" : "none" }}>
                    {
                        addNew.visible ?
                            <div>
                                <span>{addNew.isFolder ? "📁" : "📃"}</span>
                                <input type="text" autoFocus onKeyUp={(e) => handleAddFile(e)} onBlur={() => setAddNew({ ...addNew, visible: false })} />
                            </div>
                            : null
                    }

                    {
                        explorer.items.length > 0 ?
                            explorer.items.map((it, i) => {
                                return <Explorer key={i} handleTreeDeleteNode={handleTreeDeleteNode} handleTreeNode={handleTreeNode} handleTreeEditNode={handleTreeEditNode} explorer={it} />
                            })
                            : null
                    }
                </div>

            </div>
        )
    } else {
        return (
            <div className='file'>
                <span> 📃 <input className='folder-edit' type="text" value={explorer.name} disabled={editableDisable} style={{border : !editableDisable ? "1px solid black" : "none",backgroundColor : !editableDisable ? "white" : "transparent"}} /></span>
                <div className='foler-action'>
                    <button onClick={(e) => handleDelete(e,explorer.id)}><img src={assets.deleteIcon} alt="" width="10" height="10" /></button>
                    <button onClick={(e) => handleEdit(e,explorer.id)}><img src={assets.editIcon} alt="" width="10" height="10" /></button>
                </div>
            </div>
        )
    }
}

export default Explorer