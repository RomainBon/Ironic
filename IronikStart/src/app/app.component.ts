import {Component} from '@angular/core';

import {MenuController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    pages: any[];

    constructor(
        private router: Router,
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private menu: MenuController
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.pages = [
            {name: 'home', title: 'Accueil'},
            {name: 'grid', title: 'Grille'},
        ];
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    selectPage(name: string) {
        this.router.navigateByUrl('/' + name);
        this.menu.close();
    }
}
