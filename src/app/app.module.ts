import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector, APP_INITIALIZER } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { JwtModule } from "@auth0/angular-jwt";
import { NgxPermissionsModule } from "ngx-permissions";

import { ThemeModule } from "@app/theme";
import { SharedModule } from "@app/shared/shared.module";
import { AUTH_SCHEME, ACCESS_TOKEN_KEY } from "@app/shared/constants";
import { AppLoadService } from "@app/modules/core/services";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

export function initializeApp(injector: Injector) {
    return (): Promise<any> => {
        const appInitService = injector.get(AppLoadService);
        return appInitService.initApp();
    };
}

export function accessTokenGetter() {
    return localStorage.getItem(ACCESS_TOKEN_KEY)
        ? decodeURIComponent(atob(localStorage.getItem(ACCESS_TOKEN_KEY)))
        : null;
}

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        //
        NgxPermissionsModule.forRoot(),
        JwtModule.forRoot({
            config: {
                tokenGetter: accessTokenGetter,
                authScheme: AUTH_SCHEME,
                blacklistedRoutes: [new RegExp("/assets/.*")],
            },
        }),
        //
        SharedModule.forRoot(),
        AppRoutingModule,
        AngularFireModule.initializeApp({
            apiKey: "AIzaSyA119QFb1tvabBIzAJGhdcG5DQ27vOofBg",
            authDomain: "task-management-12a98.firebaseapp.com",
            projectId: "task-management-12a98",
            storageBucket: "task-management-12a98.appspot.com",
            messagingSenderId: "746716276552",
            appId: "1:746716276552:web:3a3214b2242543d51d757d",
            measurementId: "G-3ERFTN6025",
        }),
        AngularFirestoreModule,
    ],
    declarations: [AppComponent],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: initializeApp,
            deps: [Injector],
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
