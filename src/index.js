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
 * @description Counts the text's object
 * @param {string} text a string for inspect
 * @returns {object} the text's object
 */
function calculateWords(text) {
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
        lines_count: linesCount(text)
    }
}

export {
    splitCombineChar,
    wordsCount,
    charsCount,
    alphabetsCount,
    alphanumericCount,
    alphanumericWithTashkeelCount,
    tashkeelsCount,
    sentencesCount,
    paragraphsCount,
    linesCount,
    calculateWords
}
