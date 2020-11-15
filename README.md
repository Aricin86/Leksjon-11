# Readme
Hei hei, dette ble dessverre ikke en så helhetlig oppgave som jeg hadde håpet da jeg startet.
Tror jeg har klart å skrive ned det som trenges for å teste appen.


## Step-by-step
- Last ned en kopi av oppgaven "Leksjon-11" fra github.

- Pakk ut zip-filen.

- Alle bildene av wireframes ligger i mappen "oppgave1"

- Åpne mappen "pollapp" i et nytt vindu i Visual Studio Code eller et annet IDE.

- (Har lastet opp .env-filene slik at det blir enklere å teste programmet.)

- Skriv "cd /server" i kommandovinduet for å komme inn i servermappen, deretter skriv "yarn" for å laste ned node_modules.

- Start så serveren med "yarn dev".

- Nå som serveren er startet skal det samme gjøres med clienten.
Skriv disse kommandoene i kommandovinduet en og en, vent til lasting er ferdig før du skriver neste kommando:
"cd .."
"cd /client"
"yarn"
"yarn dev"

- Start MongoDB på maskinen din og opprett en database for appen. Gi den navnet "justask".
(I MongoDB Shell skriver man da "use justask" for å opprette en ny database.)

- Åpne appen i en broswer. Adressen er: http://localhost:3000

- Registrering av en ny bruker skal fungere.
(Siden vi ikke skulle legge så mye tid i det å autentisere, så kan man ikke logge inn med den brukere man nettopp har laget.)

- For å sjekke at brukeren du nettopp registererte faktisk ble opprettet, gå til MongoDB shell og skriv inn "db.users.find().pretty()". Brukere du oppretter skal dukke opp.


### IKKE IMPLEMENTERT:
Å lage nye polls er ikke implementer. Siden er der, men koden på baksiden fungerer ikke.
Hvis man lager en nye polls i postmann eller direkte i MongoDB vil de vises på "Overview"-siden.

Det er ikke implementert at man kan ta en poll.

Ble ikke ferdig med å implementere designet fra wireframes, da tiden dessverre ikke strakk til. 


### Kjente bugs:

- Når man skriver inn epost blir den godkjent av form valideringen selv om den ikke har etter "." (f.eks ".com" eller ".no").
- Det kommer heller ingen feilmelding opp fra API-et, men brukeren blir ikke lagret og man ser det i console loggen at det er en 500-feil.
- Ingen test om man putter inn symboler eller annen kode i noen av feltene.
- Pluss en haug med andre.
