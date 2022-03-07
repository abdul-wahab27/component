import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostsCommentsComponent } from './posts-comments/posts-comments.component';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostsCommentsComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
