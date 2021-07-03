"use strict";
exports.__esModule = true;
exports.SoundMgr = void 0;
// import { Howl, Howler } from "howler";
var ResourcesList_1 = require("./ResourcesList");
var SoundMgr = /** @class */ (function () {
    function SoundMgr() {
    }
    SoundMgr.load = function () {
        var _this = this;
        ResourcesList_1.ResourcesList.sound.forEach(function (x) {
            var info = new SoundInfo(x.id, x.path);
            _this.soundList.push(info);
        });
    };
    SoundMgr.play = function (id, loop) {
        if (loop === void 0) { loop = false; }
        this.soundList.forEach(function (x) {
            if (x.soundID == id) {
                x.sound.loop(loop);
                x.sound.play();
            }
        });
    };
    SoundMgr.mute = function (value) {
        this.isMute = value;
        Howler.mute(this.isMute);
    };
    SoundMgr.isMute = false;
    SoundMgr.soundList = new Array();
    return SoundMgr;
}());
exports.SoundMgr = SoundMgr;
var SoundInfo = /** @class */ (function () {
    function SoundInfo(_id, url) {
        this.soundID = _id;
        this.path = url;
        this.load();
    }
    SoundInfo.prototype.load = function () {
        this.sound = new Howl({ src: this.path });
    };
    return SoundInfo;
}());
