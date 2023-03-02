import { stringify } from "querystring"

export interface MovieDTO {
    title:string,
    description:string,
    durationInMinutes:number,
    yearOfRelease:number
}

export const convertSql = (id: string, input:MovieDTO) => {
    return {
        id,
        title:input.title,
        description:input.description,
        duration_in_minutes:input.durationInMinutes,
        year_of_release:input.yearOfRelease
    }
}