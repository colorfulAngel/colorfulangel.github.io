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
exports.Clock = void 0;
var Container = PIXI.Container;
var Loader_1 = require("../core/Loader");
var Main_1 = require("../Main");
var Event_1 = require("../core/Event");
var Clock = /** @class */ (function (_super) {
    __extends(Clock, _super);
    function Clock() {
        var _this = _super.call(this) || this;
        _this.remainTimes = 120;
        // this.x = 165;
        _this.x = 160;
        _this.y = 150;
        _this.addChild(PIXI.Sprite.from(Loader_1.Loader.resources['Button'].textures['Clock.png']));
        Main_1.eventEmitter.on(Event_1.GameFlowEvent.GameEndWithTimeout, function () {
            _this.remainTimes = 120;
            _this.remainText.text = "2:00";
        });
        _this.remainText = new PIXI.Text("2:00", {
            fontWeight: 'bold',
            fontSize: 20,
            fontFamily: 'Arial',
            fill: '#75C6ED',
            align: 'center',
            stroke: "#FFFFFF",
            strokeThickness: 6
        });
        _this.remainText.x = 60;
        _this.remainText.y = 15;
        _this.addChild(_this.remainText);
        _this.clockInterval = setInterval(_this.updateTime.bind(_this), 1000);
        return _this;
    }
    Clock.prototype.updateTime = function () {
        this.remainTimes--;
        if (this.remainTimes == 0) {
            clearInterval(this.clockInterval);
            Main_1.eventEmitter.emit(Event_1.GameFlowEvent.GameEndWithTimeout);
        }
        this.remainText.text = Math.floor(this.remainTimes / 60) + ":" + ((this.remainTimes % 60 < 10) ? "0" : "") + this.remainTimes % 60;
    };
    return Clock;
}(Container));
exports.Clock = Clock;
