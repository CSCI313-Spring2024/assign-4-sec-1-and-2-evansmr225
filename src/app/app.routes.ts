import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ContactUpdateComponent } from './contact-update/contact-update.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'contacts'
    },
    {
        path: 'update-component/:id',
        component: ContactUpdateComponent,
        title: 'update-component'
    }
];
