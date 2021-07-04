"use strict";
exports.__esModule = true;
exports.GameScene = void 0;
var Loader_1 = require("../core/Loader");
var Main_1 = require("../Main");
var GameBoard_1 = require("./GameBoard");
var GameRoundEnd_1 = require("./GameRoundEnd");
var PuzzleTarget_1 = require("./PuzzleTarget");
var ReloadBtn_1 = require("./ReloadBtn");
var SoundBtn_1 = require("./SoundBtn");
var FBBtn_1 = require("./FBBtn");
var Clock_1 = require("./Clock");
var GameScene = /** @class */ (function () {
    function GameScene() {
    }
    GameScene.draw = function () {
        // 加入背景
        Main_1.application.stage.addChild(PIXI.Sprite.from(Loader_1.Loader.resources["background"].texture));
        // 加入拼圖版面
        Main_1.application.stage.addChild(new GameBoard_1.GameBoard());
        // 加入控制鈕
        Main_1.application.stage.addChild(new SoundBtn_1.SoundBtn());
        // application.stage.addChild(new RevertBtn());
        // application.stage.addChild(new TipBtn());
        Main_1.application.stage.addChild(new ReloadBtn_1.ReloadBtn());
        Main_1.application.stage.addChild(new FBBtn_1.FBBtn());
        // application.stage.addChild(new Stars());
        Main_1.application.stage.addChild(new Clock_1.Clock());
        // 加入目標圖片
        Main_1.application.stage.addChild(new PuzzleTarget_1.PuzzleTarget('corgi', 'corgiTarget.png', 160, 305));
        // End Scene
        Main_1.application.stage.addChild(new GameRoundEnd_1.GameRoundEnd());
    };
    return GameScene;
}());
exports.GameScene = GameScene;
