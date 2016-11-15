import { NgModule, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { SubModule } from './submodule.module'

import { EmptyComponent } from './empty.component'
import { RootComponent } from './root.component'

@NgModule(
{
	declarations:
	[
		RootComponent,
		EmptyComponent,
	],
	imports:
	[
		BrowserModule,
		RouterModule.forRoot([
			{ path: '', component: EmptyComponent },
			{ path: 'module', loadChildren: () => SubModule },
		])
	],
	exports:
	[
		RouterModule
	],
	providers:
	[

	],
	bootstrap:
	[
		RootComponent
	],
})
export class RootModule {}