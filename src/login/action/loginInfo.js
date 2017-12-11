import {
    INPUT_USERNAME,
    INPUT_PASSWORD,
    SUCCESS_LOGIN,
    SELECT_FABRICITEM,
    EXPAND_NODE,
    EXPAND_ALL,
    COLLAPSE_ALL,
    RECEIVE_TREEDATA,
} from '../../actionTypes'

export const inputUserName = userName => ({
    type: INPUT_USERNAME,
    payload: userName,
})

export const inputPassword = password => ({
    type: INPUT_PASSWORD,
    payload: password,
})

export const loginIn = () => ({
    type: SUCCESS_LOGIN,
})

export const getTreeData = () => ({
    type: RECEIVE_TREEDATA,
})

export const onSelectFabricItem = fabricItem => ({
    type: SELECT_FABRICITEM,
    payload: fabricItem,
})

export const onChangeNodeExpanded = fabricItem => ({
    type: EXPAND_NODE,
    payload: fabricItem,
})

export const expandAll = () => ({
    type: EXPAND_ALL,
})

export const collapseAll = () => ({
    type: COLLAPSE_ALL,
})

export const expandOrCollapseNode = name => ({
    type: EXPAND_NODE,
    payload: name,
})
