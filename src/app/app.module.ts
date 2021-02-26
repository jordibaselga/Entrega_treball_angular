import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CatalogeComponent } from './components/cataloge/cataloge.component';

//Rutes
import { AppRoutingModule } from './app-routing.module';

// Servicis
import { ProductsService } from './services/products.service';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { MostrarMesDirective } from './directives/mostrar-mes.directive';
import { MinPriceDirective } from './directives/validators/min-price.directive';
import { NuevoUsuarioComponent } from './product/nuevo-usuario/nuevo-usuario.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { DataService } from '././services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CatalogeComponent,
    ProductDetailComponent,
    ProductItemComponent,
    ProductFilterPipe,
    LoginComponent,
    ResaltadoDirective,
    MostrarMesDirective,
    MinPriceDirective,
    NuevoUsuarioComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductsService, MinPriceDirective,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
