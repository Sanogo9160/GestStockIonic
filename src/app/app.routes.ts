import { Routes } from '@angular/router';

export const routes: Routes = [
  
    {
      path: 'produit',
      loadComponent: () => import('./produit/produit.page').then(m => m.ProduitPage)
    },
    {
      path: 'fournisseur',
      loadComponent: () => import('./fournisseur/fournisseur.page').then(m => m.FournisseurPage)
    },
    {
      path: 'motif',
      loadComponent: () => import('./motif/motif.page').then(m => m.MotifPage)
    },
    {
      path: 'bon-entree',
      loadComponent: () => import('./bon-entree/bon-entree.page').then(m => m.BonEntreePage)
    },
    {
      path: '',
      redirectTo: 'produit',
      pathMatch: 'full'
    }
  ];
  
  //export const AppRoutingModule = RouterModule.forRoot(routes);
