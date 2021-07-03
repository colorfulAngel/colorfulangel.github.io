"use strict";
exports.__esModule = true;
exports.GameFlowEvent = exports.CoreEvent = void 0;
var CoreEvent = /** @class */ (function () {
    function CoreEvent() {
    }
    CoreEvent.AssetsLoadComplete = "AssetsLoadComplete";
    return CoreEvent;
}());
exports.CoreEvent = CoreEvent;
var GameFlowEvent = /** @class */ (function () {
    function GameFlowEvent() {
    }
    GameFlowEvent.GameEndWithTimeout = "GameEndWithTimeout";
    GameFlowEvent.GameEndWithGiveUp = "GameEndWithGiveUp";
    GameFlowEvent.GamePass = "GamePass";
    GameFlowEvent.ReloadBoardRequest = "ReloadBoardRequest";
    GameFlowEvent.RevertBackRequest = "RevertBackRequest";
    GameFlowEvent.BoardReload = "BoardReload";
    GameFlowEvent.ShowTargetRequest = "ShowTargetRequest";
    GameFlowEvent.CreateNewGameRequest = "CreateNewGameRequest";
    GameFlowEvent.GameRoundStart = "GameRoundStart";
    return GameFlowEvent;
}());
exports.GameFlowEvent = GameFlowEvent;
