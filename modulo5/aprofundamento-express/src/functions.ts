import { toDo } from "./types";

export function getToBeDone(arr:toDo[]):toDo[] {
    const listToBeDone = arr.filter((element) => {
        return element.completed === false
    })
    return listToBeDone
}