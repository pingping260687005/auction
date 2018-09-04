import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './product/product.component';
import { CasouralComponent } from './casoural/casoural.component';
import { StarsComponent } from './stars/stars.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductService } from './services/product.service';
import { CommentService } from './services/comment.service';
import { FilterValuePipe } from './pipes/filter-value.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserCommentComponent } from './user-comment/user-comment.component';
import { StateEmitService } from './shared/state-emit.service';
import { StateUpdateSubjectService } from './shared/state-update-subject.service';
import { HttpModule } from '@angular/http';
import { 快速建一个组件Component } from './mycontrol/快速建一个组件/快速建一个组件.component';


const routes: Routes=[
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'detail/:id', component: ProductDetailComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    ProductComponent,
    CasouralComponent,
    StarsComponent,
    ProductDetailComponent,
    HomeComponent,
    FilterValuePipe,
    UserCommentComponent,
    快速建一个组件Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ProductService, CommentService, StateEmitService,StateUpdateSubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
