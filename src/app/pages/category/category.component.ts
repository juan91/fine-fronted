import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/services/product/product.service";
import { NotifiService } from "src/app/services/notifi.service";
import { AuthService } from "src/app/services/services.index";
import { filter } from "rxjs/operators";
import Swal from 'sweetalert2';

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"]
})
export class CategoryComponent implements OnInit {
  
  category: any = {};
  categories: any = [];
  filters: any = {};
  status: boolean;
  term: string = "";
  items: any = {};
  pages: any = {};

  constructor(
    private productoservices: ProductService,
    public noti: NotifiService,
    private auth: AuthService
  ) {
    this.status = false;
    this.getAllCategory();
  }

  ngOnInit() {}

  createCategory() {
    if (!this.category.name) {
      return;
    }
    this.status = true;

    this.productoservices.createCategory(this.category).then(
      (result: any) => {
        if (result.success) {
          this.getAllCategory();
          this.category = {};
          this.noti.onSuccess("Categoria registrada con éxito");
        } else {
          if (result.errors) {
            this.noti.onWarning(result.errors[0]);
          }
        }
        this.status = false;
      },
      err => {
        this.status = false;
        if (err.status == 401) {
          this.noti.onError("Algo salió mal");

          this.auth.logout();
        }
      }
    );
  }

  getAllCategory() {
    this.status = true;
    this.productoservices.getAllCaterory(this.filters).then(
      (result: any) => {
        if (result.success) {
          this.fillData(result.result);
        } else {
          if (result.errors) {
            this.noti.onWarning(
              "No se puede acceder a las categorias: " + result.errors[0]
            );
          }
        }
        this.status = false;
      },
      err => {
        this.status = false;
        console.log("error lista de categorias");
      }
    );
  }

  search() {
    if (this.term === "") {
      this.filters.search = "";
      this.getAllCategory();
      return;
    }

    if (this.term.length > 2) {
      this.filters.search = this.term;
      this.getAllCategory();
    }

  }

  canceledit(){    
    this.getAllCategory();
  }

  edit(data:any){
     
    this.productoservices.EditCategory(data).then((res:any) => {
      console.log(res);
      if(res.success){
      this.noti.onSuccess("Categoría editada con éxito");
      }else{
        if (res.errors) {
          this.noti.onWarning(res.errors[0]);
        }
      }
    }, err => {
       console.log(err);
  
    })
    
  }

  delete(data:any){
    
    this.productoservices.deleteCategory(data).then((res:any) => {
      
      if(res.success){
        this.noti.onSuccess("Categoría eliminada con éxito!");
        this.getAllCategory();
      }else{
        if (res.errors) {
          this.noti.onWarning(res.errors[0]);
        }
      }

    }, err => {
    
      console.log(err);
      

    });
    
  }

  fillData(category) {
    this.categories = category.data;
    this.filters = category.filters;
    this.items = category.items;
    this.pages = category.pages;
  }

  prev() {
    this.filters.page = this.pages.prev;
    this.getAllCategory();
  }

  next() {
    this.filters.page = this.pages.next;
    this.getAllCategory();
  }

}
