import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Heroine} from './heroine';
export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		let heroines: Heroine[] = [
			{id: 11, name: 'シータ'},
			{id: 12, name: 'ナウシカ'},
			{id: 13, name: 'キキ'},
			{id: 14, name: '千尋'},
			{id: 15, name: 'さつき'},
			{id: 16, name: 'ソフィー'},
			{id: 17, name: 'マーニー'},
			{id: 18, name: '菜穂子'},
			{id: 19, name: 'サン'},
			{id: 20, name: 'フィオ'}
		];
		return {heroines};
	}
}