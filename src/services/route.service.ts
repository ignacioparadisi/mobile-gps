import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthGuard } from 'src/resources/auth-guard';
import { Route } from 'src/classes/route';
import { Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RouteService {

    constructor(private http: HttpClient) { }

    public createRoute(route) {
        const localUser = AuthGuard.getUser();
        return this.http.post<any>(`https://community-service-ucab.herokuapp.com/api/users/${localUser.id}/routes`, route);
    }

    public getRoutesForUser() {
        const localUser = AuthGuard.getUser();
        if (localUser !== null) {
            return this.http.get<Route[]>(`https://community-service-ucab.herokuapp.com/api/users/${localUser.id}/routes`);
        }
    }

    public getRouteById(id: number): Observable<Route> {
        const localUser = AuthGuard.getUser();
        if (localUser !== null) {
            return this.http.get<Route>(`https://community-service-ucab.herokuapp.com/api/users/${localUser.id}/routes/${id}`);
        }
        return throwError('User is not authenticated');
    }
}
