import { ADD_USER, DELETE_USER, EDIT_USER } from "../types";

export const UserAdd = (payload) => ({
    type: ADD_USER,
    payload
})
export const UserDelete = (payload) => ({
    type: DELETE_USER,
    payload
})
export const UserEdit = (payload) => ({
    type: EDIT_USER,
    payload
})


