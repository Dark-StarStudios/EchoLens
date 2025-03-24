# GSAP Workshop

## Introductie

GSAP (GreenSock Animation Platform) is een krachtige bibliotheek voor animaties op het web. Het helpt je om CSS-eigenschappen te animeren. In deze workshop leren we de basis van GSAP.

## Opdrachten 0 (GSAP toevoegen)

Voeg GSAP en de nodige plugins toe aan je HTML-bestand:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.7/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.7/TextPlugin.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.7/ScrollTrigger.min.js"></script>
```

## Opdracht 1:

Maak een animatie voor een element met de ID `#Logo`. Laat het element van links naar rechts bewegen en zorg ervoor dat het in het begin onzichtbaar is (opacity 0). Gebruik `gsap.from` om dit te doen.

## Opdracht 2:

Maak een animatie voor een afbeelding met de klasse `.brill_image`. Deze animatie moet starten wanneer je naar beneden scrolt en de afbeelding in beeld komt. Laat de afbeelding groter worden, draaien en minder zichtbaar worden tijdens het scrollen. Gebruik `scrollTrigger` om dit te bereiken.

## Opdracht 3:

Verander de tekst van een element met de klasse .slogan naar "Een taal zonder beperkingen." Laat de tekstverandering duur 2 seconden en voeg een kleine vertraging toe voordat de animatie begint. Gebruik `gsap.to` voor deze opdracht.

## Basis methoden

### `gsap.from`

Met `gsap.from` geef je de beginwaarden van eigenschappen die geanimeerd worden naar hun eindwaarden.

Voorbeeld:

```javascript
gsap.from("element|class|id", {
    x: -100, // Beginwaarde
    opacity: 0, // Beginwaarde
    duration: 1, // Duur van de animatie
    ease: "power2.out" // Animatie gladheid (power2.out)
});
```

### `gsap.to`

Met `gsap.to` geef je de eindwaarden van eigenschappen die geanimeerd worden vanaf hun beginwaarden.

Voorbeeld:

```javascript
gsap.to("element|class|id", {
    text: "EchoLens", // Eindwaarde
    duration: 2, // Duur van de animatie
    ease: "power1.out", // Animatie gladheid (power1.out)
    delay: 0.2 // Vertraging voor de animatie
});
```

## Voorbeelden van animaties

### Animatie bij het laden van de pagina

```javascript
gsap.from(".brill_image", {
    y: -50,
    duration: 1,
    ease: "power2.out"
});

gsap.to(".title", {
    text: "EchoLens",
    duration: 2,
    ease: "power1.out",
    delay: 0.2
});
```

## Eigenschappen

- **`x` en `y`**: Bewegen elementen horizontaal en verticaal.
- **`duration`**: Duur van de animatie in seconden.
- **`delay`**: Vertraging voor het starten van de animatie.
- **`ease`**: Soort versnelling of vertraging van de animatie.
- **`opacity`**: Doorzichtigheid van het element.

### Animatie bij het scrollen

```javascript
gsap.to("element|class|id", {
    scrollTrigger: {
        trigger: "element|class|id", 
        // Met deze instelling wordt aangegeven dat de animatie wordt gestart wanneer een element met de klasse .brill_image in het zichtbaarheidsgebied van het browservenster verschijnt.
        start: "top 10%",
        // De animatie start wanneer de bovenkant van het .brill_image-element 10% van de bovenkant van het browservenster bereikt. Dit betekent dat de animatie start wanneer het element zich op 90% van de bovenkant van het venster bevindt.
        scrub: 1,
        // Met deze instelling verloopt de animatie vloeiend tijdens het scrollen. De waarde 1 betekent dat de animatie precies wordt afgespeeld terwijl u scrolt, zonder vertraging.
    },
    scale: 2, // Eindwaarde
    rotation: 180, // Eindwaarde
    opacity: 0.2, // Eindwaarde
    ease: "power2.out"  // Animatie gladheid (power2.out)
});
```

## `scrollTrigger`

`scrollTrigger` helpt je om animaties te synchroniseren met het scrollen van de pagina. Het maakt je website interactiever.

## Conclusie

Deze voorbeelden helpen je om te beginnen met GSAP. Probeer verschillende eigenschappen en methoden uit om mooiere animaties te maken. Veel succes!