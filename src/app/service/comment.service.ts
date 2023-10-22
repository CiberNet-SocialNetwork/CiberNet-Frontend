import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ResponseDto } from '../model/response-dto';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  
  basePath = "https://localhost:7272"

  constructor(private httpClient: HttpClient) { }
  getCommentsByPostId(postId: number): Observable<any> {
    let url = `/findCommentsByPostId?postId=${postId}`
    return this.httpClient.get<ResponseDto>(this.basePath+url).pipe(map(res=>res.data))
  }

  getCommentsByUserId(userId: number): Observable<any> {
    let url = `/findCommentsByUserId?userId=${userId}`
    return this.httpClient.get<ResponseDto>(this.basePath+url).pipe(map(res=>res.data))
  }

  createComment(comment: Comment): Observable<Comment>{
    let url = "/create"
    return this.httpClient.post<Comment>(this.basePath+url,comment)
  }
}
