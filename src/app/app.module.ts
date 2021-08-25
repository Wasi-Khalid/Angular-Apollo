import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import {APOLLO_NAMED_OPTIONS, NamedOptions} from "apollo-angular";
import { HttpLink } from "apollo-angular/http";
import { InMemoryCache } from "@apollo/client/core";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import {DefaultModule} from "./default/default.module";
import {ComponentsModule} from "./components/components.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    DefaultModule,
    ComponentsModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: APOLLO_NAMED_OPTIONS, // <-- Different from standard initialization
      useFactory(httpLink: HttpLink): NamedOptions {
        return {
          newClientName: {
            // <-- this settings will be saved by name: newClientName
            cache: new InMemoryCache(),
            link: httpLink.create({
              uri: 'https://o5x5jzoo7z.sse.codesandbox.io/graphql',
            }),
          },
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
