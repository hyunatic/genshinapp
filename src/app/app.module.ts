import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './page/home/home.component';
import { CharacterComponent } from './page/character/character.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VideobackgroundComponent } from './components/videobackground/videobackground.component';
import { ChardetailsComponent } from './page/chardetails/chardetails.component';
import { CharinfoComponent } from './components/charinfo/charinfo.component';
import { TalentComponent } from './components/talent/talent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChardescComponent } from './components/chardesc/chardesc.component';
import { ArtifactsComponent } from './page/artifacts/artifacts.component';
import { WishComponent } from './components/wish/wish.component';
import { DetailsComponent } from './components/details/details.component';
import { WishpageComponent } from './page/wishpage/wishpage.component';
import { HistoryComponent } from './components/history/history.component';
import { GenshinmapComponent } from './page/genshinmap/genshinmap.component';
import { BannerchangeComponent } from './components/bannerchange/bannerchange.component';
import { MaterialsComponent } from './components/materials/materials.component';
import { ArtselectorComponent } from './components/artselector/artselector.component';
import { CalculatorComponent } from './page/calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterComponent,
    NavbarComponent,
    VideobackgroundComponent,
    ChardetailsComponent,
    CharinfoComponent,
    TalentComponent,
    ChardescComponent,
    ArtifactsComponent,
    WishComponent,
    DetailsComponent,
    WishpageComponent,
    HistoryComponent,
    GenshinmapComponent,
    BannerchangeComponent,
    MaterialsComponent,
    ArtselectorComponent,
    CalculatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
