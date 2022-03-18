### Documentation

---

#### List of methods

- [calculateWords](#words-calculate)
- [alphabetsCount](#alphabets-count)
- [alphanumericCount](#alphanumeric-count)
- [alphanumericWithTashkeelCount](#alphanumeric-tashkeel-count)
- [tashkeelsCount](#tashkeel-count)
- [wordsCount](#words-count)
- [sentencesCount](#sentences-count)
- [paragraphsCount](#paragraphs-count)
- [linesCount](#lines-count)
- [charsCount](#chars-count)
- [splitCombineChar](#split-combine-char)

---

### words-calculate methods

### calculateWords <a id="words-calculate"></a>

Counts the text's object.

##### Parameter

`text`
A string for inspect.

##### Return value

Returns the text's object.

##### Example

```js
let str = `
أهلًا و سهلًا بكم في عام 2022 ! 
`;
console.log(calculateWords(str));
```

####

Output

```
Object { words_count: 8, characters_count: 34, alphabets_count: 17, alphanumeric_count: 21, tashkeels_count: 2, alphanumeric_tashkeel_count: 23, sentences_count: 1, paragraphs_count: 1, lines_count: 1 }
```

### alphabetsCount <a id="alphabets-count"></a>

Count the whole text alphabets.

##### Parameter

`text`
A string for inspect.

##### Return value

Returns the count of the whole text alphabets.

##### Example

```js
let str = `
أهلًا و سهلًا بكم في عام 2022 ! 
`;
console.log(alphabetsCount(str));
```

####

Output

```
17
```

### alphanumericCount <a id="alphanumeric-count"></a>

Count the whole text alphanumerics.

##### Parameter

`text`
A string for inspect.

##### Return value

Returns the count of the whole text alphanumerics.

##### Example

```js
let str = `
أهلًا و سهلًا بكم في عام 2022 ! 
`;
console.log(alphanumericCount(str));
```

####

Output

```
21
```

### alphanumericWithTashkeelCount <a id="alphanumeric-tashkeel-count"></a>

Count the whole text alphanumerics and tashkeels.

##### Parameter

`text`
A string for inspect.

##### Return value

Returns the count of the whole text alphanumerics and tashkeels.

##### Example

```js
let str = `
أهلًا و سهلًا بكم في عام 2022 ! 
`;
console.log(alphanumericWithTashkeelCount(str));
```

####

Output

```
23
```

### tashkeelsCount <a id="tashkeel-count"></a>

Count the whole text tashkeels.

##### Parameter

`text`
A string for inspect.

##### Return value

Returns the count of the whole text tashkeels.

##### Example

```js
let str = `
أهلًا و سهلًا بكم ! 
`;
console.log(tashkeelsCount(str));
```

####

Output

```
2
```


### wordsCount <a id="words-count"></a>

Count the whole text words.

##### Parameter

`text`
A string for inspect.

##### Return value

Returns the count of the whole text words.

##### Example

```js
let str = `
The short story is a crafted form in its own right. 
`;
console.log(wordsCount(str));
```

####

Output

```
11
```

### sentencesCount <a id="sentences-count"></a>

Count the whole text sentences.

##### Parameter

`text`
A string for inspect.

##### Return value

Returns the count of the whole text sentences.

##### Example

```js
let str = `
The short story is a crafted form in its own right. Short stories make use of plot, resonance, and other dynamic components as in a novel, but typically to a lesser degree. While the short story is largely distinct from the novel or novella/short novel, authors generally draw from a common pool of literary techniques.
`;
console.log(sentencesCount(str));
```

####

Output

```
7
```

### paragraphsCount <a id="paragraphs-count"></a>

Count the whole text paragraphs.

##### Parameter

`text`
A string for inspect.

##### Return value

Returns the count of the whole text paragraphs.

##### Example

```js
let str = `
Eucnemesaurus Aepisaurus Diceratops Microvenator Rubeosaurus Alioramus Dakotaraptor Jaklapallisaurus Aetonyx Garudimimus.

Geminiraptor Macrogryphosaurus Gojirasaurus Eosinopteryx Protorosaurus Cardiodon Chingkankousaurus Archaeodontosaurus Inosaurus Gryposaurus.

Xenoceratops Hikanodon Cedarosaurus Dysganus Nasutoceratops Scipionyx Coelophysis Itemirus Dracovenator Amargasaurus.
`;
console.log(paragraphsCount(str));
```

####

Output

```
3
```


### linesCount <a id="lines-count"></a>

Count the whole text lines.

##### Parameter

`text`
A string for inspect.

##### Return value

Returns the count of the whole text lines.

##### Example

```js
let str = `
Eucnemesaurus Aepisaurus Diceratops Microvenator Rubeosaurus.
Alioramus Dakotaraptor Jaklapallisaurus Aetonyx Garudimimus.
Geminiraptor Macrogryphosaurus Gojirasaurus Eosinopteryx Protorosaurus.
Cardiodon Chingkankousaurus Archaeodontosaurus Inosaurus Gryposaurus.
Xenoceratops Hikanodon Cedarosaurus Dysganus.
Nasutoceratops Scipionyx Coelophysis Itemirus Dracovenator Amargasaurus.
`;
console.log(linesCount(str));
```

####

Output

```
6
```

### charsCount <a id="chars-count"></a>

Count the whole text characters.

##### Parameter

`text`
A string for inspect.

##### Return value

Returns the count of the whole text characters.

##### Example

```js
let str = 'Hello World !';
console.log(charsCount(str));
```

####

Output

```
13
```

### splitCombineChar <a id="split-combine-char"></a>

Splits the combined characters.

##### Parameter

`text`
A string for inspect.

##### Return value

Returns the orginal character.

##### Example

```js
let str = 'هﻻ و غﻻ !';
console.log(charsCount(str)); // 9
str = splitCombineChar(str);
console.log(charsCount(str)); // 11
```

####

Output

```
9
11
```