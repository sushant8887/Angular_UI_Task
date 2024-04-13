import { Routes } from '@angular/router';
import { HomepageComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserInfoComponent } from './user-info/user-info.component';

export const routes: Routes = [
    { path: 'home', component: HomepageComponent },
    { path: 'userProfile', component: UserInfoComponent},
    { path: 'regModal', component: RegisterComponent },
];
