import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CategorieService } from './../../service/categorie.service';
 
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

// CommonJS
 @Component({
  selector: 'app-liste-categorie',
  templateUrl: './liste-categorie.component.html',
  styleUrls: ['./liste-categorie.component.css']
})
export class ListeCategorieComponent implements OnInit {
categories:any=[]
  constructor(private categorieService:CategorieService,private toastr: ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.allCategorie()
  }
  allCategorie(){
    this.categorieService.getAllCatgorie().subscribe((res:any)=>{
      this.categories=res.result
    })
  }
  delete(id:any){
    Swal.fire({
      title: 'Êtes-vous sûr?',
       icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimez-le !'
    }).then((result) => {
      if (result.isConfirmed) {
    this.categorieService.deleteCategorie(id).subscribe(res=>{
      this.toastr.success('Categorie Supprime avec succe!', 'Notification!');
      this.allCategorie()
    })
      }
    })
  }

}
