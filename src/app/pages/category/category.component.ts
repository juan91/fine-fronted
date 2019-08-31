import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/services/product/product.service";
import { NotifiService } from "src/app/services/notifi.service";
import { AuthService } from "src/app/services/services.index";
import { filter } from "rxjs/operators";

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
          this.categories.unshift(result.category);
          this.category = {};
          this.noti.onSuccess("Muy bien!", "Categoria registrada con éxito");
        } else {
          if (result.errors) {
            this.noti.onWarning("Algo salió mal!", result.errors[0]);
          }
        }
        this.status = false;
      },
      err => {
        this.status = false;
        if (err.status == 401) {
          this.noti.onError("ERROR!", "Algo salió mal");

          this.auth.logout();
        }
      }
    );
  }

  getAllCategory() {
    this.status = true;
    this.productoservices.getAllCaterory(this.filters).then(
      (result: any) => {
        console.log(result);
        if (result.success) {
          this.fillData(result.result);
         
        } else {
          if (result.errors) {
            this.noti.onWarning(
              "Algo salio mal!",
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
    console.log("ok");
    
    console.log(data);
    
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
