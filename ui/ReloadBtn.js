"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ReloadBtn = void 0;
var ButtonBase_1 = require("./ButtonBase");
var Main_1 = require("../Main");
var Event_1 = require("../core/Event");
var ReloadBtn = /** @class */ (function (_super) {
    __extends(ReloadBtn, _super);
    function ReloadBtn() {
        var _this = _super.call(this, 'Button', 'Reflash', 222, 210) || this;
        Main_1.eventEmitter.on(Event_1.GameFlowEvent.GameRoundStart, (function () {
            _this.enable = true;
        }).bind(_this));
        return _this;
    }
    ReloadBtn.prototype.trigger = function () {
        // if(reloadTimes > 0){
        // eventEmitter.emit(GameFlowEvent.ReloadBoardRequest);
        Main_1.eventEmitter.emit(Event_1.GameFlowEvent.GameEndWithGiveUp);
        // }
        // if(reloadTimes == 0){
        //     this.enable = false;
        // }
    };
    return ReloadBtn;
}(ButtonBase_1.ButtonBase));
exports.ReloadBtn = ReloadBtn;
