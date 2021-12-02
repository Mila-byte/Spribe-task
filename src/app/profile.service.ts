import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {API_PROFILES_URL} from "../constants";

export interface Profile {
  id?: number | string
  photo?: string
  name: string
  age: number | string
}


@Injectable({providedIn: 'root'})
export class ProfilesService {
  constructor(private http: HttpClient) {}

  getProfiles(): Observable<any> {
    return this.http.get(API_PROFILES_URL)
  }

  // можно использовать pipe и catchError для обработки ошибок https://angular.io/tutorial/toh-pt6#error-handling

  postProfile(data: Profile): Observable<any> {
    const headers = new HttpHeaders({"Content-Type": "application/json"});
    return this.http.post(API_PROFILES_URL, data, {headers})
  }

  putProfile(data: Profile): Observable<any> {
    const headers = new HttpHeaders({"Content-Type": "application/json"});
    return this.http.put(API_PROFILES_URL, data, {headers})
  }

  deleteProfile(id: number): Observable<any> {
    return this.http.delete(`${API_PROFILES_URL}/${id}`)
  }
}
