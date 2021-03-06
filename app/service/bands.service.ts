import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BandsService {
    constructor(private http: Http) { }
    
    _url: string = 'https://api.jamendo.com/v3.0/'

    getBands(params: string) {
        return this.http.get(this._url+'artists/musicinfo/?client_id=56d30c95&format=json'+params)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }
    getBand(id: number) {
        return this.http.get(this._url+'artists/albums/?client_id=56d30c95&format=json&limit=1&id='+id)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }
    getAlbum(id: number) {
        return this.http.get(this._url+'albums/tracks/?client_id=56d30c95&format=json&limit=1&imagesize=500&id='+id)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
