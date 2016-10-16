

import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<input [value]="'helo'+name">`
})
export class AppComponent { 

   name :string;

    constructor() {
       this.name = 'shaj';
    }
   
}