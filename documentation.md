### Documentation

---

#### List of methods

- [calculateWords](#words-calculate)
- [calculateReadingTime](#calculate-reading-time)
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

`wordsPerMinute` (wpm) Optional
Average words per minute

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
{
  words_count: 8,
  characters_count: 34,
  alphabets_count: 17,
  alphanumeric_count: 21,
  tashkeels_count: 2,
  alphanumeric_tashkeel_count: 23,
  sentences_count: 1,
  paragraphs_count: 1,
  lines_count: 1,
  calculate_reading_time: 1
}
```

### words-calculate methods

### calculateReadingTime <a id="calculate-reading-time"></a>

Counts the text's object.

##### Parameter

`text`
A string for inspect.

`wordsPerMinute` (wpm) Optional
Average words per minute

##### Return value

Returns the reading time.

##### Example

```js
let text = `
Cedarpelta Diabloceratops Lamaceratops Cetiosaurus Spondylosoma Concavenator Nqwebasaurus Diceratops Eucercosaurus Diplodocus Astrodontaurus Panguraptor Euhelopus Tsagantegia Brachiosaurus Seitaad Heyuannia Gigantoscelus Abrictosaurus Daspletosaurus Wuerhosaurus Kangnasaurus Scutellosaurus Dimodosaurus Fulengia Conchoraptor Kayentavenator Beipiaognathus Sarcosaurus Stegoceras Gastonia Onychosaurus Iuticosaurus Eomamenchisaurus Tonganosaurus Deuterosaurus Azendohsaurus Troodon Dinosaurus Gobititan Carnotaurus Archaeoraptor Kemkemia Anodontosaurus Datanglong Savannasaurus Zhuchengtitan Zhejiangosaurus Cionodon Walgettosuchus Acrotholus Sarahsaurus Aublysodon Abrosaurus Zhuchengceratops Syngonosaurus Torilion Parrosaurus Syrmosaurus Gresslyosaurus Zalmoxes Efraasia Banji Pteropelyx Khetranisaurus Anchiceratops Marmarospondylus Titanosaurus Tangvayosaurus Angulomastacator Hungarosaurus Diplodocus Nqwebasaurus Ornithotarsus Amtosaurus Tachiraptor Avipes Didanodon Dinodocus Kritosaurus Oohkotokia Avimimus Yehuecauhceratops Buriolestes Lucianosaurus Tonganosaurus Tanystrosuchus Mojoceratops Yunganglong Murusraptor Avaceratops Frenguellisaurus Procompsognathus Pukyongosaurus Aucasaurus Procompsognathus Histriasaurus Dromaeosauroides Itemirus Frenguellisaurus Microhadrosaurus Wuerhosaurus Guanlong Barrosasaurus Lusotitan Sinopelta Epanterias Spondylosoma Postosuchus Chondrosteosaurus Linhenykus Caudipteryx Tatankaceratops Stenotholus Ultrasaurus Stenotholus Qiaowanlong Amphicoelicaudia Cedrorestes Pachysaurops Sirindhorna Peloroplites Plesiohadros Dyslocosaurus Graciliraptor Thecocoelurus Loricosaurus Chromogisaurus Macrocollum Huxleysaurus Hylosaurus Rileya Gigantosaurus Mandschurosaurus Diabloceratops Avalonianus Kundurosaurus Wulatelong Dracorex Brasilotitan Crosbysaurus Pneumatoraptor Neosaurus Magnamanus Shingopana Yi Rahiolisaurus Banji Narambuenatitan Chilesaurus Dicraeosaurus Dryptosauroides Irritator Paronychodon Shingopana Hudiesaurus Marmarospondylus Eomamenchisaurus Mapusaurus Protorosaurus Luoyanggia Triceratops Monkonosaurus Massospondylus Stygimoloch Saldamosaurus Batyrosaurus Altispinax Abelisaurus Leptospondylus Suzhousaurus Protoceratops Imperobator Leptospondylus Lessemsaurus Cheneosaurus Tichosteus Datousaurus Dracovenator Eucentrosaurus Arizonasaurus Sinotyrannus Ischisaurus Nopcsaspondylus Acheroraptor Dromicosaurus Wuerhosaurus Dalianraptor Elrhazosaurus Scelidosaurus Talenkauen Pelorosaurus Dandakosaurus Pteropelyx Nigersaurus Pneumatoarthrus Suchomimus Jingshanosaurus Torosaurus Levnesovia Tapuiasaurus Raptorex Gobiraptor Chuandongocoelurus Onychosaurus Sinopeltosaurus Kotasaurus Leptoceratops Dolichosuchus Ratchasimasaurus Ouranosaurus Bonitasaura Anzu Vectisaurus Syngonosaurus Dromaeosauroides Ojoceratops Tengrisaurus Limaysaurus Balaur Qijianglong Caenagnathasia Spinosaurus Galesaurus Chiayusaurus.

Sinotyrannus Tyrannosaurus Yunmenglong a Traukutitan Siamotyrannus Achillobator Spiclypeus Isisaurus Dromiceiomimus Brohisaurus Ornithosuchus Sinornithosaurus Cedarosaurus Barosaurus Velocisaurus Leptoceratops Gryposaurus Anchiornis Austrocheirus Argyrosaurus Leptospondylus Polacanthus Pisanosaurus Epidexipteryx Paralititan Gresslyosaurus Marshosaurus Tethyshadros Volgatitan Bagaceratops Richardoestesia Kemkemia Zuniceratops Abrosaurus Wuerhosaurus Zanabazar Poekilopleuron Bakesaurus Convolosaurus Centemodon Histriasaurus Othnielia Guaibasaurus Crichtonpelta Heyuannia Cathartesaura Iguanodon Poekilopleuron Oryctodromeus Walgettosuchus Chuanqilong Torilion Xinjiangtitan Liassaurus Daanosaurus Clasmodosaurus Mapusaurus Equijubus Lurdusaurus Acrocanthosaurus Lanzhousaurus Eotyrannus Alioramus Aardonyx Sefapanosaurus Kotasaurus Secernosaurus Kryptops Maxakalisaurus Protoavis Ugrunaaluk Qianzhousaurus Taurovenator Hongshanosaurus Morosaurus Plesiohadros Iliosuchus Tsagantegia Tichosteus Datonglong Afromimus Moros Scutellosaurus Bonitasaura Actiosaurus Phuwiangosaurus Priconodon Teratosaurus Zaraapelta Yunganglong Europasaurus Elaltitan Stormbergia Riabininohadros Adelolophus Gongbusaurus Aucasaurus Iliosuchus Lametasaurus Limnornis Dilong Plateosauravus Yunnanosaurus Rhadinosaurus Philovenator Hungarosaurus Scipionyx Secernosaurus Pachysaurops Centrosaurus Brohisaurus Zuolong Aquilops Rugops Lusitanosaurus Carnotaurus Serikornis Elaltitan Clepsysaurus Abydosaurus Prosaurolophus Augustia Gasparinisaura Fukuisaurus Mononykus Sinopliosaurus Mercuriceratops Magnapaulia Lucianovenator Campylodon Protorosaurus Macrodontophion Rhadinosaurus Tanycolagreus Zuniceratops Sauroplites Macrophalangia Bothriospondylus Xixianykus Yimenosaurus Agujaceratops Fosterovenator Xinjiangovenator Anchisaurus Convolosaurus Caseosaurus Altispinax Asiaceratops Streptospondylus Talos Nuthetes Blasisaurus Albertaceratops Cardiodon Fukuititan Gryphoceratops Rahiolisaurus Atlantosaurus Hypselosaurus Glacialisaurus Apatodon Nemegtia Siamotyrannus Pawpawsaurus Nqwebasaurus Clarencea Alvarezsaurus Chassternbergia Asiamericana Aepisaurus Platyceratops Clasmodosaurus Zhongjianosaurus Erectopus Angloposeidon Triceratops Polacanthus Quetecsaurus Chuanqilong Tehuelchesaurus Albertavenator Adeopapposaurus Piatnitzkysaurus Aucasaurus Regnosaurus Pseudolagosuchus Datanglong Coloradia Naashoibitosaurus Appalachiosaurus Xenoceratops Hecatasaurus Macrophalangia Macelognathus Meroktenos Sinornithosaurus Dracoraptor Nomingia Sauroposeidon Hypsibema Ferganocephale Protohadros Phyllodon Muttaburrasaurus Augustynolophus Proceratosaurus Lagosuchus Itemirus Fendusaurus Tengrisaurus Foraminacephale Tornieria Datonglong Mussaurus Limnornis Campylodon Arizonasaurus Agilisaurus Ornithomerus Hortalotarsus Xixianykus Arkharavia Taohelong Monkonosaurus Pentaceratops.
`;
console.log(calculateReadingTime(text));
```

####

Output

```
3
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