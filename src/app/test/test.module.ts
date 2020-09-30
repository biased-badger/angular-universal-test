import {NgModule} from '@angular/core';
import {TestComponent} from './test.component';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TestResolver} from './test.resolver';

export const routes: Routes = [{ path: '', component: TestComponent, resolve: { placeholder: TestResolver } }];

@NgModule({
  declarations: [TestComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class TestModule {}
