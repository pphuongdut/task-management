import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ThemeModule, RouterOutletComponent} from '@app/theme';
import {SharedModule} from '@app/shared/shared.module';
import {BookingService, PartnerService} from '@app/modules/admin/services';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {BookingsComponent} from './components/bookings/bookings.component';
import {AdminComponent} from './components/admin/admin.component';
import {UsersComponent} from './components/users/users.component';
import {PartnersComponent} from './components/partners/partners.component';
import {BoatsComponent} from './components/boats/boats.component';
import {ScheduleComponent} from './components/schedule/schedule.component';
import {RevenueComponent} from './components/revenue/revenue.component';
import {BookingDetailComponent} from '@app/modules/admin/components/bookings/booking-detail/booking-detail.component';
import {PartnersDetailComponent} from '@app/modules/admin/components/partners/partners-detail/partners-detail.component';
import {SearchFormComponent} from '@app/modules/admin/components/shared/search-form/search-form.component';
import {BoatService} from '@app/modules/admin/services/boat.services';

const PROVIDERS = [
    BookingService,
    PartnerService,
    BoatService
];

@NgModule({
    imports: [
        ThemeModule,
        SharedModule,
        //
        RouterModule.forChild([
            {
                path: '',
                component: AdminComponent,
                children: [
                    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
                    {
                        path: 'dashboard',
                        component: DashboardComponent
                    },
                    {
                        path: 'bookings',
                        component: BookingsComponent
                    },
                    {
                        path: 'users',
                        component: UsersComponent
                    },
                    {
                        // To fix the top menu issue
                        path: 'boats',
                        component: RouterOutletComponent,
                        children: [
                            {path: '', redirectTo: 'partners', pathMatch: 'full'},
                            {
                                path: 'partners',
                                component: PartnersComponent
                            },
                            {
                                path: 'list',
                                component: BoatsComponent
                            },
                            {
                                path: 'schedule',
                                component: ScheduleComponent
                            }
                        ]
                    },
                    {
                        path: 'revenue',
                        component: RevenueComponent
                    }
                ]
            }
        ]),
    ],
    declarations: [
        DashboardComponent,
        BookingsComponent,
        AdminComponent,
        UsersComponent,
        PartnersComponent,
        BoatsComponent,
        ScheduleComponent,
        RevenueComponent,
        BookingDetailComponent,
        PartnersDetailComponent,
        SearchFormComponent
    ],
    providers: [
        ...PROVIDERS
    ]
})
export class AdminModule {
}
