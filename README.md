# MIAG — Magnifiche Intelligenze Artificiali Generative

Mini-arcade da browser in cinque livelli, costruito sopra le sette tavole illustrate della
presentazione *Un percorso di pratiche e analisi per costruire una prospettiva critica sulle
magnifiche Intelligenze Artificiali Generative*, letta al XXIX Congresso dell'Associazione degli
Italianisti (*La responsabilità della letteratura*, Trento-Rovereto, 10-12 settembre 2026).

**Gioca:** <https://miag2026.netlify.app/>

## Che cos'è

Il gioco è la coda dell'intervento: il link è stato dato alla fine della relazione, a sorpresa,
tramite un codice QR sull'ultima tavola. Non illustra l'intervento, ne è una metafora giocabile, ed è
costruito per essere godibile a contesto zero — da chi non ha sentito la relazione e non leggerà
nulla.

I tre personaggi selezionabili sono **Francesco De Sanctis**, **Benedetto Croce** e **Gianfranco
Contini**, a rappresentare diverse tradizioni della critica letteraria italiana; nel gioco si
distinguono per differenze nelle capacità. Cinque livelli arcade riconoscibili (endless runner, climb
verticale, labirinto al buio, tre corsie, boss fight) chiudono su **la marionetta**: un gigante con
uno schermo al posto del volto, che impara e para ogni mossa che gli venga ripetuta davanti. 

## Come si esegue

Sito statico, nessun backend e nessun passo di build: basta servire la cartella con un qualsiasi
server statico.

```bash
python3 -m http.server 8000
# poi apri http://localhost:8000
```

Aprire `index.html` direttamente da filesystem non funziona: il gioco usa ES modules, che il browser
carica solo via HTTP.

Parametri di debug: `?level=4&char=croce&god=1`.

## Come è stato fatto

Il codice è stato scritto in *vibe coding* con **GPT-6 Astra**; le sette tavole sono state generate
con strumenti di IA generativa. Il gioco è quindi anche un campione della pratica che l'intervento
descrive, prodotto con gli stessi strumenti di cui discute i limiti.

## Licenze

Il repository contiene due cose diverse e porta due licenze:

- **Codice** — `index.html`, `credits.html`, `style.css`, `src/`, `data/`: licenza MIT, file `LICENSE`.
- **Tavole illustrate e contenuti non software** — `assets/`: Creative Commons Attribuzione 4.0
  Internazionale (CC BY 4.0), file `LICENSE-CONTENT`.

GitHub mostra «MIT» perché legge solo `LICENSE`: è la licenza del software, ed è corretta.

## Archiviazione e citazione

Le release di questo repository sono archiviate su Zenodo tramite l'integrazione GitHub: ogni
release ottiene il proprio DOI. I metadati del record sono descritti in `.zenodo.json`; `CITATION.cff`
è quello che GitHub mostra nel riquadro «Cite this repository».

Fabio Curzi, *MIAG — Magnifiche Intelligenze Artificiali Generative* [software], 2026.
DOI: 10.5281/zenodo.22958775 (concept, risolve sempre all'ultima versione)
Versione 1.0.0: 10.5281/zenodo.22958999

Gli altri due pezzi dello stesso intervento:

- il testo della relazione — DOI: 10.5281/zenodo.22956388
- le tavole proiettate al congresso — DOI: 10.5281/zenodo.22959328
