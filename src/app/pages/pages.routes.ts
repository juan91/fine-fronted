import { RouterModule, Routes } from "@angular/router";

import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { LoginGuardGuard } from "../services/services.index";
import { ProfileComponent } from "./profile/profile.component";
import { ProductsComponent } from "./products/products.component";
import { CategoryComponent } from "./category/category.component";

const pagesRoutes: Routes = [
  {
    path: "",
    component: PagesComponent,
    canActivate: [LoginGuardGuard],
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
        data: { titulo: "Dashboard" }
      },
      {
        path: "products",
        component: ProductsComponent,
        data: { titulo: "Productos" }
      },
      {
        path: "category",
        component: CategoryComponent,
        data: { titulo: "Categorias" }
      },
      {
        path: "progress",
        component: ProgressComponent,
        data: { titulo: "Progress" }
      },
      {
        path: "grafica1",
        component: Graficas1Component,
        data: { titulo: "Gráficas" }
      },
      {
        path: "profile",
        component: ProfileComponent,
        data: { titulo: "Perfil de usuario" }
      },
      { path: "", pathMatch: "full", redirectTo: "/dashboard" }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
