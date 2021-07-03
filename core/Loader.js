"use strict";
exports.__esModule = true;
exports.Loader = void 0;
var ResourcesList_1 = require("./ResourcesList");
var Main_1 = require("../Main");
var Event_1 = require("./Event");
var Loader = /** @class */ (function () {
    function Loader() {
    }
    Loader.load = function () {
        var _this = this;
        this.loader = new PIXI.loaders.Loader();
        //this.loader.add(ResourcesList.img).add(ResourcesList.sound).load(() =>{});
        ResourcesList_1.ResourcesList.img.forEach(function (x) {
            _this.loader.add(x.id, x.path);
        });
        this.loader.load(function (loader, resources) {
            _this.resources = resources;
        });
        // 取得下載進度
        this.loader.onProgress.add(function (e) {
            jQuery("#loadingPercent").html("Loading..." + Math.floor(e.progress) + "%");
        });
        // 處理載入失敗檔案
        this.loader.onError.add(function (t, e, r) {
            console.log("Failed to load " + r.name);
        });
        //每個檔案載入時都會呼叫
        this.loader.onLoad.add(function (e, t) {
            _this.completedFiles.push(t.name);
        });
        // 下載完成後返回 Main.ts
        this.loader.onComplete.add(function () {
            if (_this.failedFiles.length == 0) {
                //隱藏loading page
                jQuery("#loadingPage").hide();
                Main_1.eventEmitter.emit(Event_1.CoreEvent.AssetsLoadComplete);
            }
            else {
                jQuery("#loadingPercent").html("Loading...failed: could not load " + _this.failedFiles);
            }
        });
    };
    Loader.failedFiles = [];
    Loader.completedFiles = [];
    return Loader;
}());
exports.Loader = Loader;
