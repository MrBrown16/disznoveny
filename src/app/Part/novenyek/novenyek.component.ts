import { Component } from '@angular/core';
import { BaseService } from 'src/app/Services/base.service';
import { map } from 'rxjs';
import { Noveny } from 'src/app/Model/noveny';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novenyek',
  templateUrl: './novenyek.component.html',
  styleUrls: ['./novenyek.component.css']
})
export class NovenyekComponent {
  szo:string=""
  novenyek:any

  constructor(private base:BaseService, private router:Router){

    this.base.getPlants().snapshotChanges().pipe(
      map((changes)=>changes.map(
        (c)=>({key:c.payload.key, ...c.payload.val()})
      ))
    ).subscribe({
      next:(adatok)=>this.novenyek=adatok,
      error:(hiba)=>console.log(hiba)      
    })

  }
  torol(noveny:Noveny){
    this.base.deletePlant(noveny)
  }
  modosit(noveny:Noveny){
    this.router.navigate(['/ujnoveny', noveny])
  }
}
