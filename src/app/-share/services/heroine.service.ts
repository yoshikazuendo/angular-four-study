import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Heroine } from './heroine';
// import { HEROINES } from './mock-heroines';
// HTTP通信をするためにインポートする。（Headersは後で使う）
import { Headers, Http, Response } from '@angular/http';

// @Injectable()デコレーター：他のコンポーネントが最新のデータのインスタンスを受け取れるようにする。
@Injectable()
export class HeroineService {
    private heroinesUrl: string = 'api/heroines';
    private headers: Headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }
    // getHeroines() : Heroine[] {
    getHeroines(): Promise<Heroine[]> {
        // これだと同期処理。
        // return HEROINES;

        // HTTPから取得するなら非同期が必須。
        // return Promise.resolve(HEROINES);

        // HTTP通信で取得する。
        return this.http.get(this.heroinesUrl)
            // 戻り値はObservableなので、Observable.toPromise()メソッドでPromiseに置き換える。（このメソッドは、rxjsからimportした）
            .toPromise()
            .then((response: Response) => {
                console.log('jsonは:' + response.json());
                // return response.json().data as Heroine[];
                return response.json() as Heroine[];
            })
            // Promise.catch()メソッドでエラーが起きた時に扱う関数を定義する。
            .catch(this.handleError);
    }
    getHeroine(id: number): Promise<Heroine> {
        // 文字列内挿入機能（${}）を使っているので、バックティック（`）によるテンプレート文字列を用いる。
        const url: string = `${this.heroinesUrl}/${id}`;
        // return this.getHeroines()
        // .then((heroines: Heroine[]) => heroines
        // .find((heroine: Heroine) => heroine.id === id));

        // webAPIを使うと、'api/heroines'+/引数のIDとなり、求める単一のデータだけもらうことができる。
        return this.http.get(url)
            .toPromise()
            .then((response: Response) => {
                console.log(response.json() as Heroine);
                return response.json() as Heroine;
            })
            .catch(this.handleError);
    }

    update(heroine: Heroine): Promise<Heroine> {
        const url: string = `${this.heroinesUrl}/${heroine.id}`;
        // putメソッドで保存する。
        // JSON.stringifyで、JSONの文字列に変換する。
        // リクエストヘッダーとして与えたheadersオブジェクトに、Content-Type = application/jsonを指定する。
        return this.http.put(url, JSON.stringify(heroine), { headers: this.headers })
            .toPromise()
            .then(() => heroine)
            .catch(this.handleError);
    }

    create(name: string): Promise<Heroine> {
        // nameをJSON文字列に変換して、postメソッドにリクエストとして渡す。
        return this.http.post(this.heroinesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then((response: Response) => response.json())
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.heroinesUrl}/${id}`;
        // deleteメソッドにidを渡す。これで、HTTPサービスによりリモートのデータが削除される。
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }
}