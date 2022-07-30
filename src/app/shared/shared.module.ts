import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [SpinnerComponent, HomeComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule],
  exports: [SpinnerComponent, HomeComponent, HeaderComponent, FooterComponent],
})
export class SharedModule {}
