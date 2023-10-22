import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ResponseDto } from '../model/response-dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  basePath = "https://api-cibernet.azurewebsites.net/api/user"
  currentUser: User = {}

  constructor(private httpClient: HttpClient) { }
  getUsers(): Observable<User[]> {
    let url = "/findAll"
    return this.httpClient.get<User[]>(this.basePath+url)
  }
  getUserById(id: number): Observable<User> {
    let url = "/findById"    
    const params = new HttpParams().set('id', id)
    return this.httpClient.get<User>(this.basePath+url,{params})
  }
  createUser(user: User): Observable<ResponseDto> {
    let url= "/create"
    return this.httpClient.post<ResponseDto>(this.basePath+url, user).pipe()
  }
  login(userName: string, password: string){
    let url= "/login"
    // const params = new HttpParams().set('username', userName).set('password', password)
    // return this.httpClient.post<ResponseDto>(this.basePath+url, null, {params}).pipe()
    const user = new User()
    user.username = userName
    user.password = password
    return this.httpClient.post<ResponseDto>(this.basePath+url, user).pipe()
  }
  updateUser(user: User): Observable<ResponseDto> {
    let url= "/update"
    return this.httpClient.put<ResponseDto>(this.basePath+url, user).pipe()
  }
  deleteUser(userId: number): Observable<ResponseDto> {
    let url= "/delete"
    const params = new HttpParams().set('id', userId)
    return this.httpClient.delete<ResponseDto>(this.basePath+url, {params}).pipe()
  }
}
