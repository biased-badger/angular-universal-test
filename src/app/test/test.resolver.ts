import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TestResolver implements Resolve<any> {
  constructor(private http: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | any {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(map((res: any[]) => res.slice(0, 25)));
  }
}
