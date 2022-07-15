/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ wordsCount),
/* harmony export */   "Eh": () => (/* binding */ calculateReadingTime),
/* harmony export */   "Ij": () => (/* binding */ alphabetsCount),
/* harmony export */   "Ls": () => (/* binding */ tashkeelsCount),
/* harmony export */   "Yk": () => (/* binding */ alphanumericWithTashkeelCount),
/* harmony export */   "_E": () => (/* binding */ alphanumericCount),
/* harmony export */   "aS": () => (/* binding */ calculateWords),
/* harmony export */   "bY": () => (/* binding */ linesCount),
/* harmony export */   "gR": () => (/* binding */ splitCombineChar),
/* harmony export */   "i$": () => (/* binding */ paragraphsCount),
/* harmony export */   "td": () => (/* binding */ charsCount),
/* harmony export */   "z$": () => (/* binding */ sentencesCount)
/* harmony export */ });
/**
 * @description Splits the combined characters
 * @param {string} text a string for inspect
 * @returns the orginal character
 */
function splitCombineChar(text) {
    return text.replace(/ـ/g, '').replace(/ﻻ/g, 'لا').replace(/ﻹ/g, 'لإ').replace(/ﻷ/g, 'لأ').replace(/ﻵ/g, 'لآ');
}

/**
 * @description Count the whole text words
 * @param {string} text a string for inspect
 * @returns {number} the count of the whole text words
 */
function wordsCount(text) {
    const match = text.trim().match(/\s([\p{L}|\p{N}|\p{S}|\p{P}])/gu);
    return match !== null ? match.length + 1 : text.trim() !== '' ? 1 : 0;
}

/**
 * @description Count the whole text characters
 * @param {string} text a string for inspect
 * @returns {number} the count of the whole text characters
 */
function charsCount(text) {
    return text.length;
}

/**
 * @description Count the whole text alphabets
 * @param {string} text a string for inspect
 * @returns {number} the count of the whole text alphabets
 */
function alphabetsCount(text) {
    let match = text.match(/\p{L}/gui);
    return match !== null ? match.length : 0;
}

/**
 * @description Count the whole text alphanumerics
 * @param {string} text a string for inspect
 * @returns {number} the count of the whole text alphanumerics
 */
function alphanumericCount(text) {
    let match = text.match(/\p{L}|\p{N}/gui);
    return match !== null ? match.length : 0;
}

/**
 * @description Count the whole text alphanumerics and tashkeels
 * @param {string} text a string for inspect
 * @returns {number} the count of the whole text alphanumerics and tashkeels
 */
function alphanumericWithTashkeelCount(text) {
    let match = text.match(/\p{L}|\p{N}|[ً-ْ]/gu);
    return match !== null ? match.length : 0;
}

/**
 * @description Count the whole text tashkeels
 * @param {string} text a string for inspect
 * @returns {number} the count of the whole text tashkeels
 */
 function tashkeelsCount(text) {
    let match = text.match(/[ً-ْ]/gui);
    return match !== null ? match.length : 0;
}

/**
 * @description Count the whole text sentences
 * @param {string} text a string for inspect
 * @returns {number} the count of the whole text sentences
 */
function sentencesCount(text) {
    const match = text.trim().match(/(?![-:_#@%\*'"\(\)\[\]\{\}\\\/])\p{P}\s/gu);
    return match !== null ? match.length + 1 : text.trim() !== '' ? 1 : 0;
}

/**
 * @description Count the whole text paragraphs
 * @param {string} text a string for inspect
 * @returns {number} the count of the whole text paragraphs
 */
function paragraphsCount(text) {
    const match = text.trim().match(/\n\s*\n/g);
    return match !== null ? match.length + 1 : text.trim() !== '' ? 1 : 0;
}

/**
 * @description Count the whole text lines
 * @param {string} text a string for inspect
 * @returns {number} the count of the whole text lines
 */
 function linesCount(text) {
    const match = text.trim().match(/\r\n|\r|\n/g);
    return match !== null ? match.length + 1 : text.trim() !== '' ? 1 : 0;
}

/**
 * @description Calculate the estimated reading time of a text
 * @param {string} text a string for inspect
 * @param {number} [wordsPerMinute=225] (wpm) average words per minute
 * @returns {number} the reading time
 */
function calculateReadingTime(text, wordsPerMinute = 225) {  
    let textLength = text.trim().split(/\s+/).length;
    if(textLength > 0){
      return Math.ceil(textLength / wordsPerMinute);
    }
    return 0;
}

/**
 * @description Counts the text's object
 * @param {string} text a string for inspect
 * @param {number} [wordsPerMinute=225] (wpm) average words per minute
 * @returns {object} the text's object
 */
function calculateWords(text, wordsPerMinute = 225) {
    text = splitCombineChar(text);
    return {
        words_count: wordsCount(text),
        characters_count: charsCount(text),
        alphabets_count: alphabetsCount(text),
        alphanumeric_count: alphanumericCount(text),
        tashkeels_count: tashkeelsCount(text),
        alphanumeric_tashkeel_count: alphanumericWithTashkeelCount(text),
        sentences_count: sentencesCount(text),
        paragraphs_count: paragraphsCount(text),
        lines_count: linesCount(text),
        calculate_reading_time : calculateReadingTime(text, wordsPerMinute)
    }
}



var __webpack_exports__alphabetsCount = __webpack_exports__.Ij;
var __webpack_exports__alphanumericCount = __webpack_exports__._E;
var __webpack_exports__alphanumericWithTashkeelCount = __webpack_exports__.Yk;
var __webpack_exports__calculateReadingTime = __webpack_exports__.Eh;
var __webpack_exports__calculateWords = __webpack_exports__.aS;
var __webpack_exports__charsCount = __webpack_exports__.td;
var __webpack_exports__linesCount = __webpack_exports__.bY;
var __webpack_exports__paragraphsCount = __webpack_exports__.i$;
var __webpack_exports__sentencesCount = __webpack_exports__.z$;
var __webpack_exports__splitCombineChar = __webpack_exports__.gR;
var __webpack_exports__tashkeelsCount = __webpack_exports__.Ls;
var __webpack_exports__wordsCount = __webpack_exports__.D;
export { __webpack_exports__alphabetsCount as alphabetsCount, __webpack_exports__alphanumericCount as alphanumericCount, __webpack_exports__alphanumericWithTashkeelCount as alphanumericWithTashkeelCount, __webpack_exports__calculateReadingTime as calculateReadingTime, __webpack_exports__calculateWords as calculateWords, __webpack_exports__charsCount as charsCount, __webpack_exports__linesCount as linesCount, __webpack_exports__paragraphsCount as paragraphsCount, __webpack_exports__sentencesCount as sentencesCount, __webpack_exports__splitCombineChar as splitCombineChar, __webpack_exports__tashkeelsCount as tashkeelsCount, __webpack_exports__wordsCount as wordsCount };

//# sourceMappingURL=words-calculate.esm.js.map