import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { NvarComponent } from './nvar/nvar.component';
import { AdminComponent } from './admin/admin.component';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
{path: '', component: IndexComponent, pathMatch: 'full'},
{path: 'app-nvar', component: NvarComponent},
{path: 'app-admin', component: AdminComponent},
{path: 'app-cocktails', component: CocktailsComponent},
{path: 'app-footer', component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
