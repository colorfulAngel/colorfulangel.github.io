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
exports.GameBoard = exports.PuzzlePiece = exports.pieceLentgh = exports.puzzleLength = exports.reloadTimes = exports.board = void 0;
var Container = PIXI.Container;
var Board_1 = require("../core/Board");
var Main_1 = require("../Main");
var Event_1 = require("../core/Event");
var GameIcon_1 = require("./GameIcon");
var SoundMgr_1 = require("../core/SoundMgr");
var Utility_1 = require("../core/Utility");
exports.reloadTimes = 3;
exports.puzzleLength = 3; // 3x3 puzzle
var PuzzlePiece = /** @class */ (function () {
    function PuzzlePiece(_sprite_id, _arr_id) {
        this.sprite_id = _sprite_id;
        this.arr_id = _arr_id;
    }
    return PuzzlePiece;
}());
exports.PuzzlePiece = PuzzlePiece;
var MoveDirecEnum;
(function (MoveDirecEnum) {
    MoveDirecEnum[MoveDirecEnum["UP"] = 0] = "UP";
    MoveDirecEnum[MoveDirecEnum["DOWN"] = 1] = "DOWN";
    MoveDirecEnum[MoveDirecEnum["LEFT"] = 2] = "LEFT";
    MoveDirecEnum[MoveDirecEnum["RIGHT"] = 3] = "RIGHT";
    MoveDirecEnum[MoveDirecEnum["NONE"] = 4] = "NONE";
})(MoveDirecEnum || (MoveDirecEnum = {}));
var GameBoard = /** @class */ (function (_super) {
    __extends(GameBoard, _super);
    function GameBoard() {
        var _this = _super.call(this) || this;
        _this.pathHistory = [];
        _this.valueHistory = [];
        _this.puzzleStates = [];
        _this.createNewGame = function () {
            _this.pathHistory = [];
            _this.valueHistory = [];
            _this.puzzleStates = [];
            _this.blankPieceIdx = 8;
            exports.reloadTimes = 3;
            exports.puzzleLength = 3;
            exports.pieceLentgh = (Math.round(350 / exports.puzzleLength * 100) / 100);
            exports.board = new Board_1.Board();
            _this.drawBoardPuzzle();
            Main_1.eventEmitter.emit(Event_1.GameFlowEvent.GameRoundStart);
        };
        _this.revertBoard = function () { };
        // reloadBoard = () => {}
        _this.showTips = function () { };
        _this.cancelTips = function () { };
        _this.initPuzzles = function () {
            var arr = [];
            for (var i = 0; i < exports.puzzleLength * exports.puzzleLength - 1; i++) {
                var row = Math.floor(i / exports.puzzleLength);
                var col = i % exports.puzzleLength;
                var spriteID = row.toString() + col.toString();
                arr.push(new PuzzlePiece(spriteID, i));
            }
            _this.shuffle(arr);
            // add blank piece and set it to center
            arr.splice(8, 0, new PuzzlePiece("22", 8));
            return arr;
        };
        _this.drawBoardPuzzle = function () {
            _this.removeChildren();
            _this.puzzleStates = _this.initPuzzles();
            // check if board is solvable
            var canSolve = _this.boardCanSolve(_this.puzzleStates.map(function (x) { return x.arr_id; }));
            var tryReload = 0;
            while (!canSolve && tryReload < 10) {
                _this.puzzleStates = _this.initPuzzles();
                canSolve = _this.boardCanSolve(_this.puzzleStates.map(function (x) { return x.arr_id; }));
                tryReload++;
            }
            console.log("canSolve: " + canSolve + ", tryReload:" + tryReload);
            // create puzzle icons
            _this.createIcons();
            window.onkeydown = _this.keydownHandler;
        };
        _this.createIcons = function () {
            _this.puzzleStates.forEach(function (piece, idx) {
                // if(piece.sprite_id != "00") {
                if (piece.sprite_id != "22") {
                    piece.arr_id = idx;
                    _this.createIcon(piece.sprite_id, piece.arr_id);
                }
            });
        };
        _this.boardCanSolve = function (arr) {
            var invPars = Utility_1.Utility.getInvArr(arr);
            // 若逆數對  數量為偶數 --> 有解, 奇數 --> 無解
            return (invPars % 2 == 0);
        };
        _this.keydownHandler = function (e) {
            var event = window.event ? window.event : e;
            if (event.keyCode == 37) {
                // LEFT, blank swap right
                var rightIdx = _this.blankPieceIdx + 1;
                if (rightIdx < _this.puzzleStates.length
                    && Math.floor(rightIdx / exports.puzzleLength) == Math.floor(_this.blankPieceIdx / exports.puzzleLength)) {
                    var sprite_id = _this.puzzleStates[rightIdx].sprite_id;
                    SoundMgr_1.SoundMgr.play('Sound_select');
                    _this.swapIcons(sprite_id, rightIdx);
                }
                else {
                    SoundMgr_1.SoundMgr.play('Sound_select_error');
                }
            }
            else if (event.keyCode == 39) {
                // RIGHT, blank swap left
                var leftIdx = _this.blankPieceIdx - 1;
                if (leftIdx >= 0 && Math.floor(leftIdx / exports.puzzleLength) == Math.floor(_this.blankPieceIdx / exports.puzzleLength)) {
                    var sprite_id = _this.puzzleStates[leftIdx].sprite_id;
                    SoundMgr_1.SoundMgr.play('Sound_select');
                    _this.swapIcons(sprite_id, leftIdx);
                }
                else {
                    SoundMgr_1.SoundMgr.play('Sound_select_error');
                }
            }
            else if (event.keyCode == 38) {
                // UP, blank swap down
                var downIdx = _this.blankPieceIdx + exports.puzzleLength;
                if (downIdx < _this.puzzleStates.length) {
                    var sprite_id = _this.puzzleStates[downIdx].sprite_id;
                    SoundMgr_1.SoundMgr.play('Sound_select');
                    _this.swapIcons(sprite_id, downIdx);
                }
                else {
                    SoundMgr_1.SoundMgr.play('Sound_select_error');
                }
            }
            else if (event.keyCode == 40) {
                // DOWN, blank swap up
                var upIdx = _this.blankPieceIdx - exports.puzzleLength;
                if (upIdx >= 0) {
                    var sprite_id = _this.puzzleStates[upIdx].sprite_id;
                    SoundMgr_1.SoundMgr.play('Sound_select');
                    _this.swapIcons(sprite_id, upIdx);
                }
                else {
                    SoundMgr_1.SoundMgr.play('Sound_select_error');
                }
            }
            else {
                // Invalid keys
                SoundMgr_1.SoundMgr.play('Sound_select_error');
            }
        };
        _this.createIcon = function (sprite_id, arr_id) {
            var icon = new GameIcon_1.GameIcon(sprite_id, arr_id);
            _this.addChild(icon);
            var iconClickHandler = function () {
                // check valid move direction
                var direction = _this.getMoveDirection(arr_id);
                if (direction == MoveDirecEnum.NONE) {
                    SoundMgr_1.SoundMgr.play('Sound_select_error');
                }
                else {
                    SoundMgr_1.SoundMgr.play('Sound_select');
                    _this.swapIcons(sprite_id, arr_id);
                }
            };
            icon.on("click", iconClickHandler);
            icon.on("tap", iconClickHandler);
        };
        _this.swapIcons = function (sprite_id, arr_id) {
            _this.removeChild(_this.getChildByName("corgi_" + sprite_id));
            _this.swapPieces(_this.puzzleStates, _this.blankPieceIdx, arr_id);
            _this.puzzleStates[arr_id].arr_id = arr_id;
            _this.puzzleStates[_this.blankPieceIdx].arr_id = _this.blankPieceIdx;
            _this.createIcon(sprite_id, _this.blankPieceIdx);
            _this.blankPieceIdx = arr_id;
            var pass = _this.checkGameEnd();
            if (pass) {
                // setTimeout(() => eventEmitter.emit(GameFlowEvent.GamePass), 2000);
                Main_1.eventEmitter.emit(Event_1.GameFlowEvent.GamePass);
            }
        };
        _this.checkGameEnd = function () {
            for (var i = 0; i < _this.puzzleStates.length; i++) {
                var x = _this.puzzleStates[i];
                var idArr = x.sprite_id.split('');
                var actual_arr_id = +idArr[0] * exports.puzzleLength + (+idArr[1]);
                if (i != actual_arr_id) {
                    return false;
                }
            }
            return true;
        };
        _this.getMoveDirection = function (clickIdx) {
            var blankRow = Math.floor(_this.blankPieceIdx / exports.puzzleLength);
            var clickRow = Math.floor(clickIdx / exports.puzzleLength);
            // UP
            if (_this.blankPieceIdx - exports.puzzleLength == clickIdx)
                return MoveDirecEnum.UP;
            // DOWN
            else if (_this.blankPieceIdx + exports.puzzleLength == clickIdx)
                return MoveDirecEnum.DOWN;
            // LEFT
            else if (_this.blankPieceIdx - 1 == clickIdx
                && blankRow == clickRow)
                return MoveDirecEnum.LEFT;
            // RIGHT
            else if (_this.blankPieceIdx + 1 == clickIdx
                && blankRow == clickRow)
                return MoveDirecEnum.RIGHT;
            else
                return MoveDirecEnum.NONE;
        };
        _this.shuffle = function (array) {
            var m = array.length;
            var i;
            while (m) {
                // Pick a remaining element
                i = Math.floor(Math.random() * m--);
                // And swap it with the current element
                _this.swapPieces(array, m, i);
            }
            return array;
        };
        _this.swapPieces = function (array, m, i) {
            var t = array[m];
            array[m] = array[i];
            array[i] = t;
        };
        _this.createNewGame();
        _this.x = 350;
        _this.y = 95;
        // eventEmitter.on(GameFlowEvent.ReloadBoardRequest, this.reloadBoard);
        // eventEmitter.on(GameFlowEvent.ShowTargetRequest, this.showTips);
        Main_1.eventEmitter.on(Event_1.GameFlowEvent.RevertBackRequest, _this.revertBoard);
        Main_1.eventEmitter.on(Event_1.GameFlowEvent.CreateNewGameRequest, _this.createNewGame);
        return _this;
    }
    return GameBoard;
}(Container));
exports.GameBoard = GameBoard;
