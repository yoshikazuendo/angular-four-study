import { Injectable } from '@angular/core';
import { Heroine } from './heroine';
import { HEROINES } from './mock-heroines';

// @Injectable()デコレーター：他のコンポーネントが最新のデータのインスタンスを受け取れるようにする。
@Injectable()
export class HeroineService {
    // getHeroines() : Heroine[] {
    getHeroines() : Promise<Heroine[]> {
        // これだと同期処理。
        // return HEROINES;

        // HTTPから取得するなら非同期が必須。
        return Promise.resolve(HEROINES);
    }
    getHeroine(id: number): Promise<Heroine> {
        return this.getHeroines()
        .then((heroines: Heroine[]) => heroines
        .find((heroine: Heroine) => heroine.id === id));
    }
}