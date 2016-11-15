import { NgModule, NgZone } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { TestComponent1 } from './test-component-1.component'
import { TestComponent2 } from './test-component-2.component'

import { TestService } from './test.service'

@NgModule(
{
	declarations:
	[
		TestComponent1,
		TestComponent2,
	],
	imports:
	[
		RouterModule.forChild([
			{ path: 'test1', component: TestComponent1 },
			{ path: 'test2', component: TestComponent2 },
		])
	],
	providers:
	[
		TestService
	],
})
export class SubModule {}