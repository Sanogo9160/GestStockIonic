import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { 
  IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, 
  IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, 
  IonHeader, IonTitle, IonToggle, IonButtons, IonButton, IonToolbar 
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, moonOutline, cubeOutline, alertCircleOutline, receiptOutline, businessOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    IonButton, IonButtons, IonHeader, IonToggle, IonTitle, IonToolbar, 
    RouterLink, RouterLinkActive, CommonModule, 
    IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, 
    IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet
    ],

})
export class AppComponent {


  public appPages = [
    { title: 'Produit', url: '/produit', icon: 'cube-outline' },
    { title: 'Bon d\'entrée', url: '/bon-entree', icon: 'receipt-outline' },
    { title: 'Motif', url: '/motif', icon: 'alert-circle-outline' },
    { title: 'Fournisseur', url: '/fournisseur', icon: 'business-outline' },
  ];

 constructor() {
    addIcons({ 
      moonOutline, 
      cubeOutline, 
      receiptOutline, 
      alertCircleOutline, 
      businessOutline 
    });
  }

  toggleDarkMode() {
    document.body.classList.toggle('dark', !document.body.classList.contains('dark'));
  }

  
}
