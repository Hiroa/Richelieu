const express = require('express');
const path = require('path');

const Words = require('./words');

const numberOfWords = 2;

const nounsPath = path.join(__dirname, '../data/nouns');
const nouns = new Words(nounsPath);

const adjPath = path.join(__dirname, '../data/adjs');
const adjs = new Words(adjPath);

const port = process.env.PORT || 3000;
const root = path.join(__dirname, '../public');

const app = express();

app.use(express.static(root));

app.get('/adj', (req, res) => {
  const adj = adjs.getWord();

  res.json( { 'adj':adj });
});

app.get('/noun', (req, res) => {
  const word = nouns.getWord();

  res.json( { 'word':word });
});

app.get('/name', (req, res) => {
  const word = nouns.getWord();
  const adj = adjs.getWord();

  res.json({ 'word': word, 'adj':adj });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Sprint Name Generator: Now Running.');
});
