import { Component } from '@angular/core'

import { TestService } from './test.service'

@Component(
{
	templateUrl: './test-component-2.component.html'
})
export class TestComponent2
{
	constructor(private testService: TestService)
	{

	}
}