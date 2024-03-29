import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthGuard } from 'src/resources/auth-guard';
import { User } from 'src/classes/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public createUser(user) {
    return this.http.post<User>('https://community-service-ucab.herokuapp.com/api/users', user);
  }

  public login(authInfo) {
    return this.http.post<User>('https://community-service-ucab.herokuapp.com/api/login', authInfo);
  }

  public getSignedInUser() {
    const localUser = AuthGuard.getUser();
    const params = { email: localUser.email };
    if (localUser !== null) {
      return this.http.get<User>('https://community-service-ucab.herokuapp.com/api/user', { params });
    }
  }

  public getUserByEmail(email) {
    const params = { email };
    return this.http.get<User>('https://community-service-ucab.herokuapp.com/api/user', { params });
  }
}
