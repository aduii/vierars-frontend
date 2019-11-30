import { Injectable } from "@angular/core";
import { ApiService } from './api.service';

@Injectable()
export class AuthService {

	constructor(public api: ApiService){}

	login(request: any){
		return this.api.post('auth/login', request);
	}

	getDistricts(){
		return this.api.get('distrito/listar');
	}

	signup(request: any){
		request.puntos = 0;
		request.direccion = '';
		var districtId = request.districtId;
		delete request.districtId;
		return this.api.post(`usuarios/${districtId}/insertar`, request);
	}
}