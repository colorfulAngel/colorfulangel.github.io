"use strict";
exports.__esModule = true;
exports.ResourcesList = void 0;
var Resources = /** @class */ (function () {
    function Resources(id, path) {
        this.id = id;
        this.path = path;
    }
    return Resources;
}());
var ResourcesList = /** @class */ (function () {
    function ResourcesList() {
    }
    ResourcesList.img = [
        new Resources('background', 'assets/background.png'),
        new Resources('Button', 'assets/Button.json'),
        new Resources('corgi', 'assets/spritesheet.json')
    ];
    ResourcesList.sound = [
        new Resources('Sound_bg', 'assets/bg.mp3'),
        new Resources('Sound_select_correct', 'assets/select_correct.mp3'),
        new Resources('Sound_select_error', 'assets/select_error.mp3'),
        new Resources('Sound_select', 'assets/select.mp3')
        // new Resources('About', 'assets/about.mp3')
    ];
    return ResourcesList;
}());
exports.ResourcesList = ResourcesList;
