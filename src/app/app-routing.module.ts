import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DraftComponent } from './components/draft/draft.component';
import { InboxComponent } from './components/inbox/inbox.component';

const routes: Routes = [
  { path: '', component: InboxComponent },
  { path: 'draft', component: DraftComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
