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
exports.GameIcon = void 0;
var Sprite = PIXI.Sprite;
var Loader_1 = require("../core/Loader");
var GameBoard_1 = require("./GameBoard");
var GameIcon = /** @class */ (function (_super) {
    __extends(GameIcon, _super);
    // constructor(id, x, y){
    function GameIcon(sprite_id, arr_id) {
        var _this = _super.call(this) || this;
        var row = Math.floor(arr_id / GameBoard_1.puzzleLength);
        var col = arr_id % GameBoard_1.puzzleLength;
        // let x = 350 + pieceLentgh * col; 
        // let y = 95 + pieceLentgh * row;
        var x = GameBoard_1.pieceLentgh * col;
        var y = GameBoard_1.pieceLentgh * row;
        // this.texture = Loader.resources['corgi'].textures['corgi'+id+".png"];
        _this.texture = Loader_1.Loader.resources['corgi'].textures['corgi' + sprite_id + ".png"];
        // this.name = "corgi_" + x + "_" + y;
        _this.name = "corgi_" + sprite_id;
        _this.width = _this.height = GameBoard_1.pieceLentgh;
        _this.x = x;
        _this.y = y;
        _this.buttonMode = true;
        _this.interactive = true;
        return _this;
    }
    return GameIcon;
}(Sprite));
exports.GameIcon = GameIcon;
