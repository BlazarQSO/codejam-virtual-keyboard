(function () {
    window.onload = function () {
               

        class Keyboard {

            constructor() {                
                this.shift = false;
                this.caps = false;
                this.lang = "en";
                this.input = document.getElementById("input");
                this.idBtn = [];
                this.buttons;

                this.buttons = {

                    //#region Row №1.

                    "backquote": {
                        title: "Backquote",
                        value: 192,
                        service: false,

                        en: {
                            signDef: "`",
                            signCaps: "`",
                            signShift: "~",
                            signShiftCaps: "~",
                        },
                        ru: {
                            signDef: "ё",
                            signCaps: "Ё",
                            signShift: "Ё",
                            signShiftCaps: "ё",
                        },
                        current: "`",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        },
                    },
                    "digit1": {
                        title: "Digit1",
                        value: 49,
                        service: false,

                        en: {
                            signDef: "1",
                            signCaps: "1",
                            signShift: "!",
                            signShiftCaps: "!",
                        },
                        ru: {
                            signDef: "1",
                            signCaps: "1",
                            signShift: "!",
                            signShiftCaps: "!",
                        },
                        current: "1",

                        onClickHandler: function (e) {
                            return () => {                                
                                document.getElementById("input").innerHTML += this.current;                              
                            };
                        },
                    },
                    "digit2": {
                        title: "Digit2",
                        value: 50,
                        service: false,

                        en: {
                            signDef: "2",
                            signCaps: "2",
                            signShift: "@",
                            signShiftCaps: "@",
                        },
                        ru: {
                            signDef: "2",
                            signCaps: "2",
                            signShift: "&quot;",
                            signShiftCaps: "&quot;",
                        },
                        current: "2",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "digit3": {
                        title: "Digit3",
                        value: 51,
                        service: false,

                        en: {
                            signDef: "3",
                            signCaps: "3",
                            signShift: "#",
                            signShiftCaps: "#",
                        },
                        ru: {
                            signDef: "3",
                            signCaps: "3",
                            signShift: "№",
                            signShiftCaps: "№",
                        },
                        current: "3",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "digit4": {
                        title: "Digit4",
                        value: 52,
                        service: false,

                        en: {
                            signDef: "4",
                            signCaps: "4",
                            signShift: "$",
                            signShiftCaps: "$",
                        },
                        ru: {
                            signDef: "4",
                            signCaps: "4",
                            signShift: ";",
                            signShiftCaps: ";",
                        },
                        current: "4",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "digit5": {
                        title: "Digit5",
                        value: 53,
                        service: false,

                        en: {
                            signDef: "5",
                            signCaps: "5",
                            signShift: "%",
                            signShiftCaps: "%",
                        },
                        ru: {
                            signDef: "5",
                            signCaps: "5",
                            signShift: "%",
                            signShiftCaps: "%",
                        },
                        current: "5",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "digit6": {
                        title: "Digit6",
                        value: 54,
                        service: false,

                        en: {
                            signDef: "6",
                            signCaps: "6",
                            signShift: "^",
                            signShiftCaps: "^",
                        },
                        ru: {
                            signDef: "6",
                            signCaps: "6",
                            signShift: ":",
                            signShiftCaps: ":",
                        },
                        current: "6",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "digit7": {
                        title: "Digit7",
                        value: 55,
                        service: false,

                        en: {
                            signDef: "7",
                            signCaps: "7",
                            signShift: "&",
                            signShiftCaps: "&",
                        },
                        ru: {
                            signDef: "7",
                            signCaps: "7",
                            signShift: "?",
                            signShiftCaps: "?",
                        },
                        current: "7",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "digit8": {
                        title: "Digit8",
                        value: 56,
                        service: false,

                        en: {
                            signDef: "8",
                            signCaps: "8",
                            signShift: "*",
                            signShiftCaps: "*",
                        },
                        ru: {
                            signDef: "8",
                            signCaps: "8",
                            signShift: "*",
                            signShiftCaps: "*",
                        },
                        current: "8",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "digit9": {
                        title: "Digit9",
                        value: 57,
                        service: false,

                        en: {
                            signDef: "9",
                            signCaps: "9",
                            signShift: "(",
                            signShiftCaps: "(",
                        },
                        ru: {
                            signDef: "9",
                            signCaps: "9",
                            signShift: "(",
                            signShiftCaps: "(",
                        },
                        current: "9",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "digit0": {
                        title: "Digit0",
                        value: 48,
                        service: false,

                        en: {
                            signDef: "0",
                            signCaps: "0",
                            signShift: ")",
                            signShiftCaps: ")",
                        },
                        ru: {
                            signDef: "0",
                            signCaps: "0",
                            signShift: ")",
                            signShiftCaps: ")",
                        },
                        current: "0",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "minus": {
                        title: "Minus",
                        value: 189,
                        service: false,

                        en: {
                            signDef: "-",
                            signCaps: "-",
                            signShift: "_",
                            signShiftCaps: "_",
                        },
                        ru: {
                            signDef: "-",
                            signCaps: "-",
                            signShift: "_",
                            signShiftCaps: "_",
                        },
                        current: "-",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "equal": {
                        title: "Equal",
                        value: 187,
                        service: false,

                        en: {
                            signDef: "=",
                            signCaps: "=",
                            signShift: "+",
                            signShiftCaps: "+",
                        },
                        ru: {
                            signDef: "=",
                            signCaps: "=",
                            signShift: "+",
                            signShiftCaps: "+",
                        },
                        current: "=",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },                    
                    "backspace": {
                        title: "Backspace",
                        value: 8,
                        service: true,                        
                        current: "BackSpace",

                        onClickHandler: function (e) {
                            return () => {
                                let text = document.getElementById("input").textContent;
                                text = text.substring(0, text.length - 1);
                                document.getElementById("input").innerHTML = text;
                            };
                        },                       
                    },

                    //#endregion


                    //#region Row №2.

                    "tab": {
                        title: "Tab",
                        value: 9,
                        service: true,
                        current: "Tab",

                        onClickHandler: function (e) {                            
                            return () => {
                                document.getElementById("input").innerHTML += "\t";                                
                            };
                        },           
                    },
                    "keyQ": {
                        title: "KeyQ",
                        value: 81,
                        service: false,

                        en: {
                            signDef: "q",
                            signCaps: "Q",
                            signShift: "Q",
                            signShiftCaps: "q",
                        },
                        ru: {
                            signDef: "й",
                            signCaps: "Й",
                            signShift: "Й",
                            signShiftCaps: "й",
                        },
                        current: "q",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "keyW": {
                        title: "KeyW",
                        value: 87,
                        service: false,

                        en: {
                            signDef: "w",
                            signCaps: "W",
                            signShift: "W",
                            signShiftCaps: "w",
                        },
                        ru: {
                            signDef: "ц",
                            signCaps: "Ц",
                            signShift: "Ц",
                            signShiftCaps: "ц",
                        },
                        current: "w",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "keyE": {
                        title: "KeyE",
                        value: 69,
                        service: false,

                        en: {
                            signDef: "e",
                            signCaps: "E",
                            signShift: "E",
                            signShiftCaps: "e",
                        },
                        ru: {
                            signDef: "у",
                            signCaps: "У",
                            signShift: "У",
                            signShiftCaps: "у",
                        },
                        current: "e",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "keyR": {
                        title: "KeyR",
                        value: 82,
                        service: false,

                        en: {
                            signDef: "r",
                            signCaps: "R",
                            signShift: "R",
                            signShiftCaps: "r",
                        },
                        ru: {
                            signDef: "к",
                            signCaps: "К",
                            signShift: "К",
                            signShiftCaps: "к",
                        },
                        current: "r",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "keyT": {
                        title: "KeyT",
                        value: 84,
                        service: false,

                        en: {
                            signDef: "t",
                            signCaps: "T",
                            signShift: "T",
                            signShiftCaps: "t",
                        },
                        ru: {
                            signDef: "е",
                            signCaps: "Е",
                            signShift: "Е",
                            signShiftCaps: "е",
                        },
                        current: "t",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "keyY": {
                        title: "KeyY",
                        value: 89,
                        service: false,

                        en: {
                            signDef: "y",
                            signCaps: "Y",
                            signShift: "Y",
                            signShiftCaps: "y",
                        },
                        ru: {
                            signDef: "н",
                            signCaps: "Н",
                            signShift: "Н",
                            signShiftCaps: "н",
                        },
                        current: "y",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "keyU": {
                        title: "KeyU",
                        value: 85,
                        service: false,

                        en: {
                            signDef: "u",
                            signCaps: "U",
                            signShift: "U",
                            signShiftCaps: "u",
                        },
                        ru: {
                            signDef: "г",
                            signCaps: "Г",
                            signShift: "Г",
                            signShiftCaps: "г",
                        },
                        current: "u",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "keyI": {
                        title: "KeyI",
                        value: 73,
                        service: false,

                        en: {
                            signDef: "i",
                            signCaps: "I",
                            signShift: "I",
                            signShiftCaps: "i",
                        },
                        ru: {
                            signDef: "ш",
                            signCaps: "Ш",
                            signShift: "Ш",
                            signShiftCaps: "ш",
                        },
                        current: "i",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "keyO": {
                        title: "KeyO",
                        value: 79,
                        service: false,

                        en: {
                            signDef: "o",
                            signCaps: "O",
                            signShift: "O",
                            signShiftCaps: "o",
                        },
                        ru: {
                            signDef: "щ",
                            signCaps: "Щ",
                            signShift: "Щ",
                            signShiftCaps: "щ",
                        },
                        current: "o",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "keyP": {
                        title: "KeyP",
                        value: 80,
                        service: false,

                        en: {
                            signDef: "p",
                            signCaps: "P",
                            signShift: "P",
                            signShiftCaps: "p",
                        },
                        ru: {
                            signDef: "з",
                            signCaps: "З",
                            signShift: "З",
                            signShiftCaps: "з",
                        },
                        current: "p",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "bracketLeft": {
                        title: "BracketLeft",
                        value: 219,
                        service: false,

                        en: {
                            signDef: "[",
                            signCaps: "[",
                            signShift: "{",
                            signShiftCaps: "{",
                        },
                        ru: {
                            signDef: "х",
                            signCaps: "Х",
                            signShift: "Х",
                            signShiftCaps: "х",
                        },
                        current: "[",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "bracketRight": {
                        title: "BracketRight",
                        value: 221,
                        service: false,

                        en: {
                            signDef: "]",
                            signCaps: "]",
                            signShift: "}",
                            signShiftCaps: "}",
                        },
                        ru: {
                            signDef: "ъ",
                            signCaps: "Ъ",
                            signShift: "Ъ",
                            signShiftCaps: "ъ",
                        },
                        current: "]",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "backSlash": {
                        title: "BackSlash",
                        value: 220,
                        service: false,

                        en: {
                            signDef: "\\",
                            signCaps: "\\",
                            signShift: "|",
                            signShiftCaps: "|",
                        },
                        ru: {
                            signDef: "\\",
                            signCaps: "\\",
                            signShift: "/",
                            signShiftCaps: "/",
                        },
                        current: "\\",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },

                    //#endregion


                    //#region Row №3.

                    "capsLock": {
                        title: "capsLock",
                        value: 20,
                        service: true,
                        current: "CapsLock",                                                
                        func: this.changeSigns, 
                        obj: this,

                        onClickHandler: function (e) {
                            let self = this;
                            return function () {
                                if (self.obj.caps) {                               
                                    document.getElementById(self.title).classList.remove("press");
                                } else {                               
                                    document.getElementById(self.title).classList.add("press");                                    
                                }
                                
                                self.func(self.obj.idBtn, self.obj.buttons, self.obj.caps, self.obj.shift, self.obj.lang);
                                self.obj.caps = (self.obj.caps) ? false : true;                              
                            };
                        }
                    },
                    "keyA": {
                        title: "KeyA",
                        value: 65,
                        service: false,

                        en: {
                            signDef: "a",
                            signCaps: "A",
                            signShift: "A",
                            signShiftCaps: "a",
                        },
                        ru: {
                            signDef: "ф",
                            signCaps: "Ф",
                            signShift: "Ф",
                            signShiftCaps: "ф",
                        },
                        current: "a",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "keyS": {
                        title: "KeyS",
                        value: 83,
                        service: false,

                        en: {
                            signDef: "s",
                            signCaps: "S",
                            signShift: "S",
                            signShiftCaps: "s",
                        },
                        ru: {
                            signDef: "ы",
                            signCaps: "Ы",
                            signShift: "Ы",
                            signShiftCaps: "ы",
                        },
                        current: "s",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "keyD": {
                        title: "KeyD",
                        value: 68,
                        service: false,

                        en: {
                            signDef: "d",
                            signCaps: "D",
                            signShift: "D",
                            signShiftCaps: "d",
                        },
                        ru: {
                            signDef: "в",
                            signCaps: "В",
                            signShift: "В",
                            signShiftCaps: "в",
                        },
                        current: "d",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "keyF": {
                        title: "KeyF",
                        value: 70,
                        service: false,

                        en: {
                            signDef: "f",
                            signCaps: "F",
                            signShift: "F",
                            signShiftCaps: "f",
                        },
                        ru: {
                            signDef: "а",
                            signCaps: "А",
                            signShift: "А",
                            signShiftCaps: "а",
                        },
                        current: "f",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "keyG": {
                        title: "KeyG",
                        value: 71,
                        service: false,

                        en: {
                            signDef: "g",
                            signCaps: "G",
                            signShift: "G",
                            signShiftCaps: "g",
                        },
                        ru: {
                            signDef: "п",
                            signCaps: "П",
                            signShift: "П",
                            signShiftCaps: "п",
                        },
                        current: "g",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "keyH": {
                        title: "KeyH",
                        value: 72,
                        service: false,

                        en: {
                            signDef: "h",
                            signCaps: "H",
                            signShift: "H",
                            signShiftCaps: "h",
                        },
                        ru: {
                            signDef: "р",
                            signCaps: "Р",
                            signShift: "Р",
                            signShiftCaps: "р",
                        },
                        current: "h",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "keyJ": {
                        title: "KeyJ",
                        value: 74,
                        service: false,

                        en: {
                            signDef: "j",
                            signCaps: "J",
                            signShift: "J",
                            signShiftCaps: "j",
                        },
                        ru: {
                            signDef: "о",
                            signCaps: "О",
                            signShift: "О",
                            signShiftCaps: "о",
                        },
                        current: "j",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "keyK": {
                        title: "KeyK",
                        value: 75,
                        service: false,

                        en: {
                            signDef: "k",
                            signCaps: "K",
                            signShift: "K",
                            signShiftCaps: "k",
                        },
                        ru: {
                            signDef: "л",
                            signCaps: "Л",
                            signShift: "Л",
                            signShiftCaps: "л",
                        },
                        current: "k",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "keyL": {
                        title: "KeyL",
                        value: 76,
                        service: false,

                        en: {
                            signDef: "l",
                            signCaps: "L",
                            signShift: "L",
                            signShiftCaps: "l",
                        },
                        ru: {
                            signDef: "д",
                            signCaps: "Д",
                            signShift: "Д",
                            signShiftCaps: "д",
                        },
                        current: "l",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "semicolon": {
                        title: "Semicolon",
                        value: 186,
                        service: false,

                        en: {
                            signDef: ";",
                            signCaps: ";",
                            signShift: ":",
                            signShiftCaps: ":",
                        },
                        ru: {
                            signDef: "ж",
                            signCaps: "Ж",
                            signShift: "Ж",
                            signShiftCaps: "ж",
                        },
                        current: ";",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "quote": {
                        title: "Quote",
                        value: 222,
                        service: false,

                        en: {
                            signDef: "'",
                            signCaps: "'",
                            signShift: "&quot;",
                            signShiftCaps: "&quot;",
                        },
                        ru: {
                            signDef: "э",
                            signCaps: "Э",
                            signShift: "Э",
                            signShiftCaps: "э",
                        },
                        current: "'",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "enter": {
                        title: "Enter",
                        value: 13,
                        service: true,
                        current: "Enter",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += "\n";
                            };
                        }
                    },

                    //#endregion


                    //#region Row №4.

                    "shiftLeft": {
                        title: "ShiftLeft",
                        value: 16,
                        service: true,
                        current: "Shift",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "keyZ": {
                        title: "KeyZ",
                        value: 90,
                        service: false,

                        en: {
                            signDef: "z",
                            signCaps: "Z",
                            signShift: "Z",
                            signShiftCaps: "z",
                        },
                        ru: {
                            signDef: "я",
                            signCaps: "Я",
                            signShift: "Я",
                            signShiftCaps: "я",
                        },
                        current: "z",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "keyX": {
                        title: "KeyX",
                        value: 88,
                        service: false,

                        en: {
                            signDef: "x",
                            signCaps: "X",
                            signShift: "X",
                            signShiftCaps: "x",
                        },
                        ru: {
                            signDef: "ч",
                            signCaps: "Ч",
                            signShift: "Ч",
                            signShiftCaps: "ч",
                        },
                        current: "x",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "keyC": {
                        title: "KeyC",
                        value: 67,
                        service: false,

                        en: {
                            signDef: "c",
                            signCaps: "C",
                            signShift: "C",
                            signShiftCaps: "c",
                        },
                        ru: {
                            signDef: "с",
                            signCaps: "С",
                            signShift: "С",
                            signShiftCaps: "с",
                        },
                        current: "c",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "keyV": {
                        title: "KeyV",
                        value: 86,
                        service: false,

                        en: {
                            signDef: "v",
                            signCaps: "V",
                            signShift: "V",
                            signShiftCaps: "v",
                        },
                        ru: {
                            signDef: "м",
                            signCaps: "М",
                            signShift: "М",
                            signShiftCaps: "м",
                        },
                        current: "v",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "keyB": {
                        title: "KeyB",
                        value: 66,
                        service: false,

                        en: {
                            signDef: "b",
                            signCaps: "B",
                            signShift: "B",
                            signShiftCaps: "b",
                        },
                        ru: {
                            signDef: "и",
                            signCaps: "И",
                            signShift: "И",
                            signShiftCaps: "и",
                        },
                        current: "b",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "keyN": {
                        title: "KeyN",
                        value: 78,
                        service: false,

                        en: {
                            signDef: "n",
                            signCaps: "N",
                            signShift: "N",
                            signShiftCaps: "n",
                        },
                        ru: {
                            signDef: "т",
                            signCaps: "Т",
                            signShift: "Т",
                            signShiftCaps: "т",
                        },
                        current: "n",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "keyM": {
                        title: "KeyM",
                        value: 77,
                        service: false,

                        en: {
                            signDef: "m",
                            signCaps: "M",
                            signShift: "M",
                            signShiftCaps: "m",
                        },
                        ru: {
                            signDef: "ь",
                            signCaps: "Ь",
                            signShift: "Ь",
                            signShiftCaps: "ь",
                        },
                        current: "m",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "comma": {
                        title: "Comma",
                        value: 188,
                        service: false,

                        en: {
                            signDef: ",",
                            signCaps: ",",
                            signShift: "<",
                            signShiftCaps: "<",
                        },
                        ru: {
                            signDef: "б",
                            signCaps: "Б",
                            signShift: "Б",
                            signShiftCaps: "б",
                        },
                        current: ",",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "period": {
                        title: "Period",
                        value: 190,
                        service: false,

                        en: {
                            signDef: ".",
                            signCaps: ".",
                            signShift: ">",
                            signShiftCaps: ">",
                        },
                        ru: {
                            signDef: "ю",
                            signCaps: "Ю",
                            signShift: "Ю",
                            signShiftCaps: "ю",
                        },
                        current: ".",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "slash": {
                        title: "Slash",
                        value: 191,
                        service: false,

                        en: {
                            signDef: "/",
                            signCaps: "/",
                            signShift: "?",
                            signShiftCaps: "?",
                        },
                        ru: {
                            signDef: ".",
                            signCaps: ".",
                            signShift: ",",
                            signShiftCaps: ",",
                        },
                        current: "/",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "arrowUp": {
                        title: "ArrowUp",
                        value: 38,
                        service: true,
                        current: "&uarr;",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "shiftRight": {
                        title: "ShiftRight",
                        value: 16,
                        service: true,
                        current: "Shift",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },

                    //#endregion


                    //#region Row №5.

                    "controlLeft": {
                        title: "ControlLeft",
                        value: 17,
                        service: true,
                        current: "Ctrl",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "altLeft": {
                        title: "AltLeft",
                        value: 18,
                        service: true,
                        current: "Alt",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "space": {
                        title: "Space",
                        value: 32,
                        service: true,
                        current: "Space",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += " ";
                            };
                        }
                    },
                    "altRight": {
                        title: "AltRight",
                        value: 18,
                        service: true,
                        current: "Alt",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "controlRight": {
                        title: "ControlRight",
                        value: 17,
                        service: true,
                        current: "Ctrl",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "arrowLeft": {
                        title: "ArrowLeft",
                        value: 37,
                        service: true,
                        current: "&larr;",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "arrowDown": {
                        title: "ArrowDown",
                        value: 40,
                        service: true,
                        current: "&darr;",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "arrowRight": {
                        title: "ArrowRight",
                        value: 39,
                        service: true,
                        current: "&rarr;",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "delete": {
                        title: "Delete",
                        value: 9,
                        service: true,
                        current: "Del",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },

                    //#endregion
                }
                                
                for (var key in this.buttons) {
                    this.idBtn.push(key);
                }
                                
                document.getElementsByTagName("body")[0].addEventListener("keydown", (e) => this.keyDown(e, this.buttons), false);
                document.getElementsByTagName("body")[0].addEventListener("keyup", (e) => this.keyUp(e, this.buttons), false);
                window.addEventListener("blur", (e) => this.keyDefault(e, this.idBtn), false);
                
            }

            Create() {

                let wrapper = document.createElement("div");
                wrapper.className = "wrapper";

                let input = document.createElement("textarea");
                
                input.setAttribute("id", "input");                
                input.className = "input";              
                
                input.addEventListener('keydown', function (e) {                    
                        e.preventDefault();                                          
                }, false);

                let board = document.createElement("div");
                board.className = "keyboard";
               
                for (let i = 0; i < 63; i++) {
                    let btn = document.createElement("button");
                    btn.setAttribute("type", "button");
                    btn.className = "button";
                    if (i < this.idBtn.length) {
                        btn.id = this.idBtn[i];
                        btn.innerHTML = this.buttons[this.idBtn[i]].current;
                    }
                    board.appendChild(btn);
                }
               
                wrapper.appendChild(input);
                wrapper.appendChild(board);

                document.body.appendChild(wrapper);

                for (var key in this.buttons) {
                    document.querySelector("#" + key).addEventListener("click", this.buttons[key].onClickHandler(), false);
                    document.querySelector("#" + key).addEventListener("click", function () {                                          
                        let input = document.getElementById("input");
                        let text = input.textContent;
                        input.selectionStart = text.length;
                        input.focus();
                    }, false);
                }
            }

            keyDown(e, buttons) {
                let id = e.code.substring(0, 1).toLowerCase() + e.code.substring(1, e.code.length);
                buttons[id].onClickHandler()();
                if (id !== "capsLock") {                    
                    document.getElementById(id).classList.add("press");
                } 

                document.getElementById("input").blur();                                
            }

            keyUp(e, buttons) {
                let id = e.code.substring(0, 1).toLowerCase() + e.code.substring(1, e.code.length);
                let sign = buttons[id].current;
                if (id !== "capsLock") {
                    document.getElementById(id).classList.remove("press");
                } 

                let input = document.getElementById("input");
                let text = input.textContent;
                input.selectionStart = text.length;
                input.focus();
            }

            keyDefault(e, idBtn) {
                for (let i = 0; i < idBtn.length; i++) {
                    document.getElementById(idBtn[i]).classList.remove("press");
                }
            }

            changeSigns(idBtn, buttons, caps, shift, lang) {                
                for (let key = 0; key < idBtn.length; key++) {
                    if (!buttons[idBtn[key]].service) {
                        if (!caps && lang == "en") {
                            document.getElementById(idBtn[key]).innerHTML = buttons[idBtn[key]].en.signCaps;
                            buttons[idBtn[key]].current = buttons[idBtn[key]].en.signCaps;
                        } else {
                            document.getElementById(idBtn[key]).innerHTML = buttons[idBtn[key]].en.signDef;
                            buttons[idBtn[key]].current = buttons[idBtn[key]].en.signDef;
                        }
                    }
                }                
            }
        }



        let instance = new Keyboard();
        instance.Create();


    }
})();