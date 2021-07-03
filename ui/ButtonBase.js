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
exports.ButtonBase = void 0;
var Sprite = PIXI.Sprite;
var Loader_1 = require("../core/Loader");
var ButtonBase = /** @class */ (function (_super) {
    __extends(ButtonBase, _super);
    function ButtonBase(_id, textureID, _x, _y) {
        var _this = _super.call(this) || this;
        _this._enable = true;
        _this.texture = Loader_1.Loader.resources[_id].textures[textureID];
        _this.interactive = true;
        _this.buttonMode = true;
        _this.x = _x;
        _this.y = _y;
        //this.anchor.set(0.5);   // set origin to center
        // Click Events
        _this.on("mousedown", _this.mouseDownEffect.bind(_this));
        _this.on("mouseup", _this.mouseUpEffect.bind(_this));
        _this.on("mouseout", _this.mouseOutEffect.bind(_this));
        // The touch-sensitive surface. This may be a screen or trackpad.
        _this.on("touchstart", _this.mouseDownEffect.bind(_this));
        _this.on("touchend", _this.mouseDownEffect.bind(_this));
        // Trigger events
        _this.on("mouseup", _this.trigger.bind(_this));
        _this.on("touchstart", _this.trigger.bind(_this));
        return _this;
    }
    Object.defineProperty(ButtonBase.prototype, "enable", {
        set: function (v) {
            this.interactive = v;
            this.buttonMode = v;
            this.alpha = v ? 1 : 0.5;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ButtonBase.prototype, "scaleX", {
        set: function (v) {
            this.scale.x = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ButtonBase.prototype, "scaleY", {
        set: function (v) {
            this.scale.y = v;
        },
        enumerable: false,
        configurable: true
    });
    ButtonBase.prototype.trigger = function () { };
    ButtonBase.prototype.mouseDownEffect = function () {
        var animTweenTimeline = new TimelineMax();
        animTweenTimeline.add(new TweenLite(this, 0.2, {
            "scaleX": 0.9,
            "scaleY": 0.9
        }));
        animTweenTimeline.play();
    };
    ButtonBase.prototype.mouseUpEffect = function () {
        var animTweenTimeline = new TimelineMax();
        animTweenTimeline.add(new TweenLite(this, 0.1, {
            "scaleX": 1.1,
            "scaleY": 1.1
        }));
        animTweenTimeline.add(new TweenLite(this, 0.1, {
            "scaleX": 1,
            "scaleY": 1
        }));
        animTweenTimeline.play();
    };
    ButtonBase.prototype.mouseOutEffect = function () {
        this.scale.set(1, 1);
    };
    return ButtonBase;
}(Sprite));
exports.ButtonBase = ButtonBase;
