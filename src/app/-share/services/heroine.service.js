"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var mock_heroines_1 = require("./mock-heroines");
// @Injectable()デコレーター：他のコンポーネントが最新のデータのインスタンスを受け取れるようにする。
var HeroineService = (function () {
    function HeroineService() {
    }
    // getHeroines() : Heroine[] {
    HeroineService.prototype.getHeroines = function () {
        // これだと同期処理。
        // return HEROINES;
        // HTTPから取得するなら非同期が必須。
        return Promise.resolve(mock_heroines_1.HEROINES);
    };
    return HeroineService;
}());
HeroineService = __decorate([
    core_1.Injectable()
], HeroineService);
exports.HeroineService = HeroineService;
//# sourceMappingURL=heroine.service.js.map