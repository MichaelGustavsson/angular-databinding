# Angular Data-Binding kod exempel
[![Build Status][travis-badge]][travis-badge-url]

Här hittar ni koden till det enkla databindnings exemplet som jag går igenom på min blog.

## Förutsättningar

Node.js, npm och bower används i exemplet. Node.js används av npm och npm används för att installera
alla Angular paket som måste till. Bower används för att installera JQuery och Bootstrap.

<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Hämta här</a> om det inte redan är installerat på maskinen.

**Verifiera att du kör åtminstone node `v4.x.x` och npm `3.x.x`**
genom att köra kommandona `node -v` och `npm -v` i ett terminal/konsole fönster.
Annars kommer äldre versioner att generera konstiga felmeddelanden när Angulars paket försöker installeras.

Om man vill kunna köra olika versioner av node och npm på samma maskin,
rekommenderar jag att ni använder [nvm](https://github.com/creationix/nvm).

## Hämta koden

Enklast är att klona koden till en ny mapp lokalt på datorn (t ex `my-project`.
```bash
git clone  https://github.com/michaelgustavsson/angular-databinding  my-project
cd my-project
```

Radera allt "git-like" genom att radera `.git` mappen.
```bash
rm -rf .git  # icke-Windows(MacOS och Linux)
rd .git /S/Q # windows
```

## Installera npm och bower paketen

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```bash
npm install
bower install
npm start
```

`npm start` kommandot kompilerar applikationen och kommer sedan att omkompilera automatiskt vid behov
och kör en enklare webbserver `lite-server` skriven av John Papa.

Det snygga med detta är att både ändringar gjorda i koden för klient och server delen övervakas
och kommer att omkompileras om ändringar görs.

För att stänga ner manuellt använd kommandot `Ctrl-C`.

Lycka till och ha kul!

[travis-badge]: https://travis-ci.org/angular/quickstart.svg?branch=master
[travis-badge-url]: https://travis-ci.org/angular/quickstart
