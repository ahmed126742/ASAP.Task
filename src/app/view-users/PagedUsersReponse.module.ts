
import { User } from '../User.module'

export interface PagedUsersReponse 
{
    items : User [];
    pageNumber: number;
    totalItems: number
    pageSize: number
    totalPages: number
}