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
exports.PuzzleTarget = void 0;
var Sprite = PIXI.Sprite;
var Loader_1 = require("../core/Loader");
var PuzzleTarget = /** @class */ (function (_super) {
    __extends(PuzzleTarget, _super);
    function PuzzleTarget(_id, textureID, _x, _y) {
        var _this = _super.call(this) || this;
        _this.texture = Loader_1.Loader.resources[_id].textures[textureID];
        _this.interactive = false;
        _this.buttonMode = false;
        _this.x = _x;
        _this.y = _y;
        return _this;
        // anchor default = (0,0) => top-left
        //this.anchor.set(0.5);   // set origin to center
    }
    return PuzzleTarget;
}(Sprite));
exports.PuzzleTarget = PuzzleTarget;
