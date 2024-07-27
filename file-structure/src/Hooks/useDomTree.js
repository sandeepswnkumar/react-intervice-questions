function useDomTree(){

    function insertNode(tree, folderId, item){
        if(tree.id == folderId && tree.isFolder){
            tree.items.unshift(item)
            return tree;
        }
        let newNode = tree.items.map((val) =>{
            return insertNode(val,folderId,item)
        })
        return {...tree, items : newNode}

    }
    function deleteNode(tree, folderId){
        
        if(tree.id == folderId){
            console.log("tree",tree)
        console.log("folderId",folderId)
            return tree;
        }
        
        let newNode = tree.items.map((val) =>{
            return deleteNode(val,folderId)
        })

        console.log("new node",newNode)
        console.log("new node",tree)
        
        return newNode
    }
    function editNode(tree,folderId,name){
        if(tree.id == folderId){
            tree.name = name
            return tree;
        }
        let newNode = tree.items.map((val) =>{
            return insertNode(val,folderId,name)
        })
        console.log("newNode",newNode);
        return {...tree, items : newNode}
    }

    return {insertNode,deleteNode,editNode}
}

export default useDomTree;