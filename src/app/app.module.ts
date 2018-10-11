import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FooterCtaComponent } from './footer-cta/footer-cta.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProcessComponent } from './process/process.component';
import { BlogComponent } from './blog/blog.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { ContactComponent } from './contact/contact.component';
import { EngagementFormComponent } from './home/engagement-form/engagement-form.component';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { StepFourComponent } from './step-four/step-four.component';
import { SummaryComponent } from './summary/summary.component';

import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FinalStepComponent } from './final-step/final-step.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { TechnologiesComponent } from './technologies/technologies.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { UiComponent } from './technologies/ui/ui.component';
import { FrontendComponent } from './technologies/frontend/frontend.component';
import { BackendComponent } from './technologies/backend/backend.component';
import { DatabaseComponent } from './technologies/database/database.component';
import { MobileappComponent } from './technologies/mobileapp/mobileapp.component';
import { BlockchainComponent } from './technologies/blockchain/blockchain.component';


const AppRoutes:Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'process',component:ProcessComponent},
  {path:'blog',component:BlogComponent},
  {path:'get-started',component:GetStartedComponent},
  {path:'contact',component:ContactComponent},
  {path:'step-one',component:StepOneComponent},
  {path:'step-two',component:StepTwoComponent},
  {path:'step-three',component:StepThreeComponent},
  {path:'step-four',component:StepFourComponent},
  {path:'summary',component:SummaryComponent},
  {path:'thank-you',component:ThankyouComponent},
  {path:'technologies',component:TechnologiesComponent},
  {path:'technologies/ui',component:UiComponent},
  {path:'technologies/frontend',component:FrontendComponent},
  {path:'technologies/backend',component:BackendComponent},
  {path:'technologies/database',component:DatabaseComponent},
  {path:'technologies/mobileapp',component:MobileappComponent},
  {path:'technologies/blockchain',component:BlockchainComponent}






]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FooterCtaComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ProcessComponent,
    BlogComponent,
    GetStartedComponent,
    ContactComponent,
    EngagementFormComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent,
    SummaryComponent,
    FinalStepComponent,
    ThankyouComponent,
    TechnologiesComponent,
    UiComponent,
    FrontendComponent,
    BackendComponent,
    DatabaseComponent,
    MobileappComponent,
    BlockchainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes,{useHash: true}),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
