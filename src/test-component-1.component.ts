import { Component } from '@angular/core'

import { TestService } from './test.service'

@Component(
{
	templateUrl: './test-component-1.component.html'
})
export class TestComponent1
{
	constructor(private testService: TestService)
	{

	}
}