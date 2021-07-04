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
exports.FBBtn = void 0;
var ButtonBase_1 = require("./ButtonBase");
var FBBtn = /** @class */ (function (_super) {
    __extends(FBBtn, _super);
    function FBBtn() {
        // super('Button','FB', 277, 210);
        return _super.call(this, 'Button', 'FB', 272, 210) || this;
    }
    FBBtn.prototype.trigger = function () {
        window.open('https://www.facebook.com/', 'FaceBook');
        // SoundMgr.play("About");
    };
    return FBBtn;
}(ButtonBase_1.ButtonBase));
exports.FBBtn = FBBtn;
