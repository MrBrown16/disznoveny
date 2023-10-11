import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Noveny } from '../Model/noveny';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  refNovenyek : AngularFireList<Noveny>; 
  constructor(private db:AngularFireDatabase) {
    this.refNovenyek=db.list('/novenyek');
   }

   getPlants(){
    return this.refNovenyek;
   }

   newPlant(noveny:Noveny){
    if (noveny.key) return this.refNovenyek.update(noveny.key,noveny)
    return this.refNovenyek.push(noveny)
   }

   deletePlant(noveny:Noveny){
    return this.refNovenyek.remove(noveny.key)
   }
   

}
