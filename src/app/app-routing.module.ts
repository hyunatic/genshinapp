import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenshinmapComponent } from './page/genshinmap/genshinmap.component';
import { ArtifactsComponent } from './page/artifacts/artifacts.component';
import { CharacterComponent } from './page/character/character.component';
import { ChardetailsComponent } from './page/chardetails/chardetails.component';
import { HomeComponent } from './page/home/home.component';
import { WishpageComponent } from './page/wishpage/wishpage.component';
import { CalculatorComponent } from './page/calculator/calculator.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'character', component: CharacterComponent },
  { path: 'chardetails/:name', component: ChardetailsComponent },
  { path: 'artifact', component: ArtifactsComponent },
  { path: 'wish', component: WishpageComponent },
  { path: 'map', component: GenshinmapComponent },
  { path: 'calculator', component: CalculatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
