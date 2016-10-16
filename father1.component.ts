

import {Component} from '@angular/core';


@Component({
    selector: 'my-app',
    template: ` <div>This is the Root App Component</div>
                <child-one></child-one>
              `
})
export class AppComponent { 

    constructor() {
        
    }
}