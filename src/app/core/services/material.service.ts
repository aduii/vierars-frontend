import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class MaterialService {
  private subjectList = new Subject<any>();
  private subjectForm = new Subject<any>();

  constructor(
    private apiService: ApiService
  ) { }

  createMaterial(request: any) {
    var type = request.tipo;
    var userId = 1;
    delete request.tipo;
    delete request.id;
    console.log('request', request);
    return this.apiService.post(`materialreciclado/${userId}/${type}/insertar`, request);
  }

  geMaterials() {
    return this.apiService.get('materialreciclado/listar');
  }

  updateMaterial(request: any) {
    return this.apiService.put('materialreciclado/user', request);
  }

  getMaterialById(userId: number) {
    return this.apiService.get(`materialreciclado/user/byId/${userId}`);
  }

  refreshList(status:boolean){
    this.subjectList.next({status});
  }

  listenerRefreshList(): Observable<any>{
    return this.subjectList.asObservable();
  }

  resetForm(){
    this.subjectForm.next(true);
  }

  listenerResetForm(): Observable<any>{
    return this.subjectForm.asObservable();
  }
}
