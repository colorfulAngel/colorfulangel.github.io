"use strict";
exports.__esModule = true;
exports.Main = exports.application = exports.eventEmitter = void 0;
var EventEmitter = PIXI.utils.EventEmitter;
var Event_1 = require("./core/Event");
var Loader_1 = require("./core/Loader");
var GameScene_1 = require("./ui/GameScene");
var SoundMgr_1 = require("./core/SoundMgr");
var Main = /** @class */ (function () {
    function Main() {
    }
    //private initCanvasW = 860;
    //private initCanvasH = 540;
    Main.prototype.initGame = function () {
        // 設定場景
        var gameCanvasContext = jQuery("#gameCanvas")[0];
        // width & height 必須設定數值，用變數會無法繪製
        exports.application = new PIXI.Application(860, 540, { backgroundColor: 0x6DF7F4, view: gameCanvasContext });
        // 設定共用的事件傳遞元件
        exports.eventEmitter = new EventEmitter();
        SoundMgr_1.SoundMgr.load();
        exports.eventEmitter.on(Event_1.CoreEvent.AssetsLoadComplete, function () {
            jQuery("#loadingPage").hide(); // hide loading page
            SoundMgr_1.SoundMgr.play('Sound_bg', true); // play music
            GameScene_1.GameScene.draw(); // draw main game scene
        });
        Loader_1.Loader.load();
        // 設定適應性 (Resize)
        this.onResize(); // resize when init game
        window.onresize = this.onResize; // resize when windowSize changes
    };
    Main.prototype.onResize = function () {
        var w = window.innerWidth;
        var h = window.innerHeight;
        var scale = Math.min(w / 860, h / 540);
        exports.application.view.style.left = (w - scale * 860) / 2 + "px";
        exports.application.view.style.top = (h - scale * 540) / 2 + "px";
        exports.application.view.style.width = (scale * 860) + "px";
        exports.application.view.style.height = (scale * 540) + "px";
    };
    return Main;
}());
exports.Main = Main;
