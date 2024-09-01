import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User.module';
import { PaginatedUserRequest } from './view-users/PaginatedUserRequest.module';
import {PagedUsersReponse } from './view-users/PagedUsersReponse.module';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiUrl = 'https://localhost:7287/api/Users/';

    constructor(private http: HttpClient) {}

    createUser(user: User): Observable<User> {
        return this.http.post<User>(this.apiUrl + 'CreateUser', user);
    }
    updateUser(user: User): Observable<User> {
        return this.http.post<User>(this.apiUrl + 'UpdateUser', user);
    }
    deleteUser(user: User): Observable<User> {
        return this.http.post<User>(this.apiUrl, user);
    }
    getUser(user: User): Observable<User> {
        return this.http.post<User>(this.apiUrl + "GetUser", user);
    }
    getPagintedFilteredUsers(request: PaginatedUserRequest): Observable<PagedUsersReponse> {
        return this.http.post<any>(this.apiUrl + 'GetPagedFilteredUsers', request);
    }
}