export interface PaginatedUserRequest 
{
    filters : {
        searchText : string
    };
    rows: number;
    PageNumber: number
}