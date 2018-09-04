import { CommentService } from './shared/comment.service';
import { ProductService } from './shared/product.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './product/product.component';
import { CasourelComponent } from './casourel/casourel.component';
import { StarComponent } from './star/star.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { MyPipePipe } from './pipe/my-pipe.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { MyfilterPipe } from './pipe/myfilter.pipe';

const routes:Routes=[
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent },
  {path:'productDetail/:productId', component:ProductDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    ProductComponent,
    CasourelComponent,
    StarComponent,
    ProductDetailComponent,
    HomeComponent,
    TestComponent,
    MyPipePipe,
    MyfilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [ProductService,CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
