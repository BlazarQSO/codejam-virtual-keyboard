(function () {
    window.onload = function () {
               

        class Keyboard {

            constructor() {
                this.caps = false;
                this.shift = false;               

                this.buttons = {

                    //#region Row №1.

                    "Backquote": {
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
                        }


                        //changeSymbol: function (e) {
                        //    if (!caps && !shift) {
                        //    } else {
                        //    alert("ok2");
                        //    elem.innerText = this.signDef;
                        //    this.current = this.signDef;
                        //    }
                        //}
                    },
                    "Digit1": {
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
                        }
                    },
                    "Digit2": {
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
                    "Digit3": {
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
                    "Digit4": {
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
                    "Digit5": {
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
                    "Digit6": {
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
                    "Digit7": {
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
                    "Digit8": {
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
                    "Digit9": {
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
                    "Digit0": {
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
                    "Minus": {
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
                    "Equal": {
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
                    "Backspace": {
                        title: "Backspace",
                        value: 8,
                        service: true,
                        current: "BackSpace",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },

                    //#endregion


                    //#region Row №2.

                    "Tab": {
                        title: "Tab",
                        value: 9,
                        service: true,
                        current: "Tab",

                        onClickHandler: function (e) {                            
                            return () => {
                                document.getElementById("input").innerHTML += this.current;                                
                            };
                        }
                    },
                    "KeyQ": {
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
                    "KeyW": {
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
                    "KeyE": {
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
                    "KeyR": {
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
                    "KeyT": {
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
                    "KeyY": {
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
                    "KeyU": {
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
                    "KeyI": {
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
                    "KeyO": {
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
                    "KeyP": {
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
                    "BracketLeft": {
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
                    "BracketRight": {
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
                    "BackSlash": {
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

                    "Tab": {
                        title: "Tab",
                        value: 9,
                        service: true,
                        current: "Tab",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "KeyQ": {
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
                    "KeyQ": {
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
                    "KeyQ": {
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
                    "KeyQ": {
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
                    "KeyQ": {
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
                    "KeyQ": {
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
                    "KeyQ": {
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
                    "KeyQ": {
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
                    "KeyQ": {
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
                    "KeyQ": {
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
                    "KeyQ": {
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
                    "Tab": {
                        title: "Tab",
                        value: 9,
                        service: true,
                        current: "Tab",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    //#endregion


                    //#region Row №4.

                    "Tab": {
                        title: "Tab",
                        value: 9,
                        service: true,
                        current: "Tab",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "KeyQ": {
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
                    "KeyQ": {
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
                    "KeyQ": {
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
                    "KeyQ": {
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
                    "KeyQ": {
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
                    "KeyQ": {
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
                    "KeyQ": {
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
                    "KeyQ": {
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
                    "KeyQ": {
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
                    "KeyQ": {
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
                    "KeyQ": {
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
                    "Tab": {
                        title: "Tab",
                        value: 9,
                        service: true,
                        current: "Tab",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },

                    //#endregion


                    //#region Row №5.

                    "Tab": {
                        title: "Tab",
                        value: 9,
                        service: true,
                        current: "Tab",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "Tab": {
                        title: "Tab",
                        value: 9,
                        service: true,
                        current: "Tab",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "Tab": {
                        title: "Tab",
                        value: 9,
                        service: true,
                        current: "Tab",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "Tab": {
                        title: "Tab",
                        value: 9,
                        service: true,
                        current: "Tab",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "Tab": {
                        title: "Tab",
                        value: 9,
                        service: true,
                        current: "Tab",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "Tab": {
                        title: "Tab",
                        value: 9,
                        service: true,
                        current: "Tab",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "Tab": {
                        title: "Tab",
                        value: 9,
                        service: true,
                        current: "Tab",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "Tab": {
                        title: "Tab",
                        value: 9,
                        service: true,
                        current: "Tab",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },
                    "Tab": {
                        title: "Tab",
                        value: 9,
                        service: true,
                        current: "Tab",

                        onClickHandler: function (e) {
                            return () => {
                                document.getElementById("input").innerHTML += this.current;
                            };
                        }
                    },

                    //#endregion
                }
                
                this.idBtn = []
                for (var key in this.buttons) {
                    this.idBtn.push(key);
                }
            }

            Create() {

                let wrapper = document.createElement("div");
                wrapper.className = "wrapper";

                let input = document.createElement("textarea");
                input.readonly = "true";
                input.setAttribute("id", "input");
                input.className = "input";
                
                let board = document.createElement("div");
                board.className = "keyboard";
               
                for (let i = 0; i < 63; i++) {
                    let btn = document.createElement("button");
                    btn.setAttribute("type", "button");
                    if (i < this.idBtn.length) {
                        btn.id = this.idBtn[i];
                        btn.textContent = this.buttons[this.idBtn[i]].current;
                    }
                    board.appendChild(btn);
                }
               
                wrapper.appendChild(input);
                wrapper.appendChild(board);

                document.body.appendChild(wrapper);

                for (var key in this.buttons) {
                    document.querySelector("#" + key).onclick = this.buttons[key].onClickHandler();
                }
            }

        }

        let instance = new Keyboard();
        instance.Create();


    }
})();