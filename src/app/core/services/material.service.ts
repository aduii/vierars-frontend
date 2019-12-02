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

  getTypes(){
    return this.apiService.get('tipo/listar');
  }

  createMaterial(request: any) {
    var type = request.tipo;
    var user = JSON.parse(localStorage.getItem('userLogged'));
    delete request.tipo;
    delete request.id;
    return this.apiService.post(`materialreciclado/${user.idUsuario}/${type}/insertar`, request);
  }

  geMaterialsByRecycler() {
    return this.apiService.get('materialreciclado/sinvender');
  }

  geMaterialsByUser() {
    var user = JSON.parse(localStorage.getItem('userLogged'));
    return this.apiService.get(`materialreciclado/${user.idUsuario}/listar`);
  }

  updateMaterial(request: any) {
    return this.apiService.put('materialreciclado', request);
  }

  getMaterialById(id: number) {
    return this.apiService.get(`materialreciclado/${id}`);
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

  createPurchase(request: any, data: any){
    var recyclerId = (JSON.parse(localStorage.getItem('userLogged'))).idUsuario;
    return this.apiService.post(`compra/${recyclerId}/${data.materialId}/insertar`, request);
  }

  getSales(){
    return this.apiService.get('compra/listar');
  }

  getPurchases(){
    var recyclerId = (JSON.parse(localStorage.getItem('userLogged'))).idUsuario;
    return this.apiService.get(`compra/${recyclerId}/listar`);
  }
}
