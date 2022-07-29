import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [SpinnerComponent, HomeComponent],
  imports: [CommonModule],
})
export class SharedModule {}
