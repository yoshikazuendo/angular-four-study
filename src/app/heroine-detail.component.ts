import { Component, Input } from '@angular/core';

import { Heroine } from './-share/services/heroine';

@Component({
    selector: 'heroine-detail',
    templateUrl: 'heroine-detail.component.html'
})

// @Inputデコレーターを付与することで、他コンポーネントから受け取れる（binding）ようになる。
export class HeroineDetailComponent {
    @Input()
    heroine: Heroine;
}