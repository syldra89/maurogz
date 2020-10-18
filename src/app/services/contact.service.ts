import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Contact} from '../models/contact';
import { global} from './global';

@Injectable()
export class ContactService {

	public url: string;

	constructor(public _http: HttpClient){
		this.url = global.url;
	}

	test(){
		return "working";
	}

	sendMessage(contact): Observable<any>{
		let json = JSON.stringify(contact);
		let params = 'json='+json;

		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

		return this._http.post(this.url + 'mgz-api/contact' , params, {headers: headers});
	}

}
