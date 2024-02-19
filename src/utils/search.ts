import {SearchNodeType} from "../types/search.ts";
import {isArray, isUndefined} from "./guards.ts";

const depthFirstTraversal = <T extends SearchNodeType<T>>(
    currentPath: Array<T>,
    root: T,
    callback: (root: T, currentPath: Array<T>) => void,
) => {
    currentPath.push(root)

    if (root.children) {
        for (const element of root.children) {
            depthFirstTraversal(currentPath, element, callback)
        }
    }

    callback(root, currentPath)

    currentPath.pop()
}

const getLowerCaseFilterValue = (filterValue: string | Array<string>): Array<string> => {
    return isArray(filterValue)
        ? filterValue.map(value => value.toLowerCase())
        : [(filterValue as string).toLowerCase()]
}

const copyNode = <T>(node: T) => ({
    ...node,
    children: [],
})

const lookAtKeyedValues = <T>(
    filterValue: Array<string>,
    keys: Array<keyof T>,
    condition: (filterValue: Array<string>, searchValue: string) => boolean,
    node: T,
    callback: () => void,
) => {
    for (const key of keys) {
        if (node[key] || node[key] === 0) {
            if (condition(filterValue, String(node[key]).toLowerCase())) {
                callback()
            }
        }
    }
}

const filterTree = <T extends SearchNodeType<T>>(
    root: T,
    filterValue: Array<string>,
    keys: Array<keyof T>,
    condition: (filterValue: Array<string>, searchValue: string) => boolean,
) => {
    const currentPath: Array<T> = []

    root.copied = copyNode(root)
    const filteredResult = root.copied

    depthFirstTraversal(currentPath, root, (node, branch) => {
        lookAtKeyedValues(filterValue, keys, condition, node, () => {
            for (let i = 0; i < branch.length; i += 1) {
                if (!branch[i].copied) {
                    branch[i].copied = copyNode(branch[i])
                    branch[i - 1].copied.children.push(branch[i].copied)
                }
            }
        })
    })

    // depthFirstTraversal(currentPath, root, node => {
    //     delete node.copied
    // })

    if (isUndefined(filteredResult.children) || !filteredResult.children.length) {
        let result = null

        lookAtKeyedValues(filterValue, keys, condition, filteredResult, () => {
            result = filteredResult
        })

        return result
    }

    return filteredResult
}

export const dfsSearch = <T>(
    items: Array<T> = [],
    filterValue: string | Array<string> = '',
    keys: Array<keyof T> = [],
    condition: (filterValue: Array<string>, searchValue: string) => boolean = (
        filterValue: Array<string>,
        searchValue: string,
    ) => filterValue.some(value => searchValue.includes(value)),
) => {
    if (!filterValue.length) return items

    const lowerCaseFilterValue = getLowerCaseFilterValue(filterValue)

    const filteredList = []

    for (const item of items) {
        const filteredTree = filterTree(item, lowerCaseFilterValue, keys, condition)

        if (filteredTree) {
            filteredList.push(filteredTree)
        }
    }

    return filteredList
}
