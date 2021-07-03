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
exports.SoundBtn = void 0;
var SoundMgr_1 = require("../core/SoundMgr");
var ButtonBase_1 = require("./ButtonBase");
var Loader_1 = require("../core/Loader");
var SoundBtn = /** @class */ (function (_super) {
    __extends(SoundBtn, _super);
    function SoundBtn() {
        var _this = _super.call(this, 'Button', 'Sound_On', 165, 210) || this;
        _this.isMute = false;
        _this.updateImage = function () {
            if (_this.isMute) {
                _this.texture = Loader_1.Loader.resources['Button'].textures['Sound_Off'];
            }
            else {
                _this.texture = Loader_1.Loader.resources['Button'].textures['Sound_On'];
            }
        };
        _this.updateImage();
        return _this;
    }
    SoundBtn.prototype.trigger = function () {
        this.isMute = !this.isMute;
        SoundMgr_1.SoundMgr.mute(this.isMute);
        this.updateImage();
    };
    return SoundBtn;
}(ButtonBase_1.ButtonBase));
exports.SoundBtn = SoundBtn;
