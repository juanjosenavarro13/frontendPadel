import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SpinnerComponent, HomeComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [SpinnerComponent, HomeComponent, HeaderComponent, FooterComponent],
})
export class SharedModule {}
