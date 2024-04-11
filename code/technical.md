# CSS / SASS

## Syntax

1. Skriv class namn med bindestreck som avdelare ex. 'this-is-a-class'.
2. Inga förkortningar.

## Arbetsstruktur

1. Nestlad CSS.
2. Använda sig av gap istället av margin så mycket det går.
3. Variabler för färger, fonts, box-shadow osv.
4. Ev mixins för återanvändbar funktionalitet.

## Sass Partials

1. Variabler / mixins partials

   - Path: `src/styles/variables/_variables.scss`
   - Path: `src/styles/variables/_mixins.scss`

2. Layout partials

   - Mixin

3. Vendor Reset partial

   - Path: `src/styles/vendor/_reset.scss`

# Debug funktion

- Lägga en färg för att se divs i utvecklingsstadie / true från början.

- $debugging: true;

div {
@if $debugging {
outline: 1px solid hotpink
}
}

## React

### Komponenter

1. PascalCase på komponentor ex: Component.tsx.
2. Använda arrow function syntax för komponenter.
3. Ej för stora komponenter gör de mindre isåfall.
4. Placera komponenter i rätt mappar, t.ex. hooks / ui.
5. Göra återanvändbara komponenter om möjligt, dock ej om det blir för komplicerat.
6. Undvik inline styling, kan gå an enstaka fall.
7. Inga förkortningar ex. (ej btn, skriv button).
8. Rätt conditionals && istället för ternär operator om endast ett element ska visas baserat på ett booleanskt värde.
9. Använda arrays för att mappa ut listor istället för att skriva ut dem.
10. Se till att listitems har unika nycklar (key), förslag uuid.

### Bilder

1. loading="lazy" på de som ej syns vid start.
2. välformulerade alt texter.
3. definerad bredd och höjd.

### Props

1. interfaces för props.
2. Undvika om möjligt att prop drilla två nivåer neråt. Ifall problem här uppstår, använda Context.
3. Om vi skickar mer än 3 props, skicka dessa i ett objekt istället.

### Hooks

1. Använda prev funktionaliteten i useState.
2. Rätt värden i dependency array i useEffect.
3. Se till så orginella arrayer ej ändras, ny kopia shallow array eller med metod som filter etc. pass by reference.
4. useEffect högst upp.

### Animationer - Om vi vill

1. Framer-motion.
2. Astropos.
3. GSAP.
4. Parallax.

### Funktioner

2. Returnera tidigt ifall något ej finns ex, undviker för nestlad kod - guard clause.

### SEO / Performance

1. React Helmet för SEO ?.
2. React Lazy för stora sektioner, om detta höjer performance i lighthouse!

Ex:

if (element === null) {
return;
}

3. Undvika så mycket som möjligt anonyma funktioner.
4. Inte vara rädd för långa funktionsnamn.
5. Om möjligt kortare funktioner som gör endast en sak - helst max 20 rader.
6. Ifall funktioner kan slås ihop till generiska funktioner gör detta.

## Beskrivande funktionsprefixer

- returnerande funktioner // prefix: `get`
- togglande funktioner // prefix: `toggle`
- boolean funktioner // prefix: `is`
- funktioner som ändrar t.ex. attribut // prefix: `set`
- initiala funktioner // prefix: `initial`
- saker som visar saker för användaren // `display`

## Funktioners dokumentation

1. Dokumentara svårare funktioner med pseudokod ovanför / ej för beskrivande funktioner.

- Funktion övergripande beskrivning
- @param {string} parameter namn
- @returns beskrivning
  \*/
  function myFunc() {
  console.log('Kom och hjälp mig!')
  };

2. Kommentarer som förklarar svårare icke-beskrivande stycken i koden. / inte för mycket dock!

## Egen types fil

- För större interfaces som exporteras in i main, där I är prefixet.
  - Path: `src/assets/utils/types.ts`

## Helperfunctions

- Helperfunction.ts för hjälpfunktioner - mer generiska funktioner som exporteras.
  - Path: `src/assets/utils/helperfunctions.ts`

## Ikoner / bilder

- Path: `src/assets/icons - images`
