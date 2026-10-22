/* Plainsight Lab — EES Article 52 access & rectification letter, 7 languages.
 * Depends on window.Schengen (date helpers). */
(function (root) {
  'use strict';
  var LOCALE = { en: 'en-GB', fr: 'fr-FR', de: 'de-DE', es: 'es-ES', it: 'it-IT', nl: 'nl-NL', pt: 'pt-PT' };
  var REG = 'Regulation (EU) 2017/2226';
  var T = {
    en: {
      fullName: '[Full name]', to: 'To: ', toGeneric: 'To: Competent authority for EES data protection matters — ', date: 'Date: ',
      subject: 'Subject: Request for access to and rectification of my data in the Entry/Exit System (EES) — Article 52 of ' + REG,
      dear: 'Dear Sir or Madam,',
      intro: 'I am writing to exercise my rights under Article 52 of ' + REG + ' and Articles 15 and 16 of Regulation (EU) 2016/679 (GDPR).',
      h1: '1. Identification', name: 'Name: ', dob: 'Date of birth: ', nat: 'Nationality: ', pp: 'Passport number: ', ppBy: ', issued by: ',
      h2: '2. Request for access',
      access: 'Please provide me with a copy of all data recorded about me in the EES, including my individual file, all entry/exit records and any refusal of entry record, together with the Member State that entered each of them.',
      h3: '3. Request for rectification / completion',
      prob: { exit: 'My exit from the Schengen area was not recorded.', entry: 'My entry into the Schengen area was not recorded.', date: 'A border crossing was recorded with the wrong date.', overstay: 'The official stay-check service shows that I have overstayed or have no days left, which is incorrect.' },
      fact: function (dir, date, place) { return 'Correct fact: ' + (dir === 'exit' ? 'exit from' : 'entry into') + ' the Schengen area on ' + date + ' at ' + place + '.'; },
      shows: 'What the record shows: ',
      ask: 'I ask you to check this data and to rectify or complete it without delay, and to confirm in writing the action taken. If the data was entered by another Member State, please contact that Member State as provided for in Article 52 of ' + REG + '.',
      chrono: 'Chronology of my stays in the Schengen area', days: ' days', evidence: 'evidence: ',
      encl: 'Enclosures (copies):', todo: '[to complete]',
      closing: 'I would be grateful for a reply within the time limits laid down in Article 52 of ' + REG + ' and, in case of refusal, for information on the remedies available to me, including the right to lodge a complaint with the national data protection supervisory authority.',
      bye: 'Yours faithfully,', place: '[border crossing point]',
      ev: { passport: 'Copy of my passport identity page', boarding: 'Boarding passes / tickets for the disputed crossing', booking: 'Ferry, tunnel, train or airline booking confirmation', stay: 'Accommodation or car-hire confirmations outside the Schengen area', payments: 'Card payments / receipts showing where I was', stamps: 'Pages of my passport with entry/exit stamps', screenshot: 'Dated screenshot of the EU stay-check result' },
      subjectShort: 'EES access and rectification request – Article 52 of ' + REG
    },
    fr: {
      fullName: '[Nom complet]', to: 'À : ', toGeneric: 'À l’autorité compétente en matière de protection des données EES — ', date: 'Fait le ',
      subject: 'Objet : Demande d’accès et de rectification de mes données dans le système d’entrée/sortie (EES) — article 52 du règlement (UE) 2017/2226',
      dear: 'Madame, Monsieur,',
      intro: 'J’exerce par la présente les droits que me confère l’article 52 du règlement (UE) 2017/2226 ainsi que les articles 15 et 16 du règlement (UE) 2016/679 (RGPD).',
      h1: '1. Identification', name: 'Nom : ', dob: 'Date de naissance : ', nat: 'Nationalité : ', pp: 'Passeport n° : ', ppBy: ', délivré par : ',
      h2: '2. Demande d’accès',
      access: 'Je vous prie de me communiquer une copie de l’ensemble des données me concernant enregistrées dans l’EES, y compris mon dossier individuel, toutes les fiches d’entrée/sortie et, le cas échéant, toute fiche de refus d’entrée, ainsi que l’indication de l’État membre ayant introduit chacune de ces données.',
      h3: '3. Demande de rectification / complément',
      prob: { exit: 'Ma sortie de l’espace Schengen n’a pas été enregistrée.', entry: 'Mon entrée dans l’espace Schengen n’a pas été enregistrée.', date: 'Un passage frontalier a été enregistré à une date erronée.', overstay: 'Le service officiel de vérification de la durée de séjour indique que j’ai dépassé la durée autorisée ou qu’il ne me reste aucun jour, ce qui est inexact.' },
      fact: function (dir, date, place) { return 'Fait exact : ' + (dir === 'exit' ? 'sortie de l’espace Schengen' : 'entrée dans l’espace Schengen') + ' le ' + date + ' au point de passage ' + place + '.'; },
      shows: 'Ce que montre l’enregistrement : ',
      ask: 'Je vous demande de vérifier ces données et de les rectifier ou de les compléter sans délai, puis de me confirmer par écrit les mesures prises. Si ces données ont été introduites par un autre État membre, je vous remercie de prendre contact avec celui-ci conformément à l’article 52 du règlement (UE) 2017/2226.',
      chrono: 'Chronologie de mes séjours dans l’espace Schengen', days: ' j', evidence: 'preuve : ',
      encl: 'Pièces jointes (copies) :', todo: '[à compléter]',
      closing: 'Je vous remercie de me répondre dans les délais prévus par l’article 52 du règlement (UE) 2017/2226 et de m’indiquer, en cas de refus, les voies de recours dont je dispose, y compris la possibilité de saisir l’autorité nationale de contrôle de la protection des données.',
      bye: 'Veuillez agréer, Madame, Monsieur, l’expression de mes salutations distinguées.', place: '[point de passage]',
      ev: { passport: 'Copie de la page d’identité de mon passeport', boarding: 'Cartes d’embarquement / billets du passage contesté', booking: 'Confirmation de réservation (ferry, tunnel, train ou avion)', stay: 'Confirmations d’hébergement ou de location hors espace Schengen', payments: 'Relevés de paiement / reçus indiquant où je me trouvais', stamps: 'Pages de mon passeport portant des tampons d’entrée/sortie', screenshot: 'Capture d’écran datée du résultat du vérificateur de séjour de l’UE' },
      subjectShort: 'Demande d’accès et de rectification EES – article 52 du règlement (UE) 2017/2226'
    },
    de: {
      fullName: '[Vollständiger Name]', to: 'An: ', toGeneric: 'An die für den Datenschutz im EES zuständige Behörde — ', date: 'Datum: ',
      subject: 'Betreff: Antrag auf Auskunft und Berichtigung meiner Daten im Einreise-/Ausreisesystem (EES) — Artikel 52 der Verordnung (EU) 2017/2226',
      dear: 'Sehr geehrte Damen und Herren,',
      intro: 'hiermit mache ich meine Rechte nach Artikel 52 der Verordnung (EU) 2017/2226 sowie nach Artikel 15 und 16 der Verordnung (EU) 2016/679 (DSGVO) geltend.',
      h1: '1. Angaben zur Person', name: 'Name: ', dob: 'Geburtsdatum: ', nat: 'Staatsangehörigkeit: ', pp: 'Reisepassnummer: ', ppBy: ', ausgestellt von: ',
      h2: '2. Antrag auf Auskunft',
      access: 'Bitte übermitteln Sie mir eine Kopie aller im EES über mich gespeicherten Daten, einschließlich meines persönlichen Dossiers, aller Ein- und Ausreisedatensätze sowie gegebenenfalls aller Datensätze über Einreiseverweigerungen, jeweils mit Angabe des Mitgliedstaats, der die Daten eingegeben hat.',
      h3: '3. Antrag auf Berichtigung / Vervollständigung',
      prob: { exit: 'Meine Ausreise aus dem Schengen-Raum wurde nicht erfasst.', entry: 'Meine Einreise in den Schengen-Raum wurde nicht erfasst.', date: 'Ein Grenzübertritt wurde mit einem falschen Datum erfasst.', overstay: 'Der offizielle Dienst zur Berechnung der zulässigen Aufenthaltsdauer zeigt an, dass ich die zulässige Dauer überschritten habe oder keine Tage mehr zur Verfügung habe. Dies ist unzutreffend.' },
      fact: function (dir, date, place) { return 'Richtiger Sachverhalt: ' + (dir === 'exit' ? 'Ausreise aus dem' : 'Einreise in den') + ' Schengen-Raum am ' + date + ' an der Grenzübergangsstelle ' + place + '.'; },
      shows: 'Gespeicherter Eintrag: ',
      ask: 'Ich bitte Sie, diese Daten zu überprüfen, sie unverzüglich zu berichtigen bzw. zu vervollständigen und mir die getroffenen Maßnahmen schriftlich zu bestätigen. Falls die Daten von einem anderen Mitgliedstaat eingegeben wurden, bitte ich Sie, sich gemäß Artikel 52 der Verordnung (EU) 2017/2226 mit diesem Mitgliedstaat in Verbindung zu setzen.',
      chrono: 'Übersicht meiner Aufenthalte im Schengen-Raum', days: ' Tage', evidence: 'Nachweis: ',
      encl: 'Anlagen (Kopien):', todo: '[zu ergänzen]',
      closing: 'Für eine Antwort innerhalb der in Artikel 52 der Verordnung (EU) 2017/2226 vorgesehenen Fristen sowie, im Falle einer Ablehnung, für eine Belehrung über die mir zustehenden Rechtsbehelfe, einschließlich des Rechts auf Beschwerde bei der nationalen Datenschutzaufsichtsbehörde, wäre ich Ihnen dankbar.',
      bye: 'Mit freundlichen Grüßen', place: '[Grenzübergangsstelle]',
      ev: { passport: 'Kopie der Personaldatenseite meines Reisepasses', boarding: 'Bordkarten / Fahrkarten für den betreffenden Grenzübertritt', booking: 'Buchungsbestätigung (Fähre, Tunnel, Zug oder Flug)', stay: 'Unterkunfts- oder Mietwagenbestätigungen außerhalb des Schengen-Raums', payments: 'Kartenzahlungen / Belege, die meinen Aufenthaltsort zeigen', stamps: 'Seiten meines Reisepasses mit Ein- und Ausreisestempeln', screenshot: 'Datierter Screenshot des Ergebnisses der EU-Aufenthaltsberechnung' },
      subjectShort: 'EES – Antrag auf Auskunft und Berichtigung – Artikel 52 der Verordnung (EU) 2017/2226'
    },
    es: {
      fullName: '[Nombre completo]', to: 'A: ', toGeneric: 'A la autoridad competente en materia de protección de datos del SES — ', date: 'Fecha: ',
      subject: 'Asunto: Solicitud de acceso y rectificación de mis datos en el Sistema de Entradas y Salidas (SES/EES) — artículo 52 del Reglamento (UE) 2017/2226',
      dear: 'Estimados señores:',
      intro: 'Por medio de la presente ejerzo los derechos que me reconocen el artículo 52 del Reglamento (UE) 2017/2226 y los artículos 15 y 16 del Reglamento (UE) 2016/679 (RGPD).',
      h1: '1. Identificación', name: 'Nombre: ', dob: 'Fecha de nacimiento: ', nat: 'Nacionalidad: ', pp: 'Número de pasaporte: ', ppBy: ', expedido por: ',
      h2: '2. Solicitud de acceso',
      access: 'Les ruego me faciliten una copia de todos los datos que constan sobre mí en el SES, incluido mi expediente individual, todos los registros de entrada y salida y, en su caso, cualquier registro de denegación de entrada, indicando el Estado miembro que introdujo cada uno de ellos.',
      h3: '3. Solicitud de rectificación / compleción',
      prob: { exit: 'Mi salida del espacio Schengen no fue registrada.', entry: 'Mi entrada en el espacio Schengen no fue registrada.', date: 'Un paso fronterizo fue registrado con una fecha errónea.', overstay: 'El servicio oficial de cálculo de la estancia autorizada indica que he superado la duración permitida o que no me quedan días, lo cual es incorrecto.' },
      fact: function (dir, date, place) { return 'Hecho correcto: ' + (dir === 'exit' ? 'salida del' : 'entrada en el') + ' espacio Schengen el ' + date + ' por el paso fronterizo de ' + place + '.'; },
      shows: 'Lo que muestra el registro: ',
      ask: 'Les solicito que verifiquen estos datos, los rectifiquen o completen sin demora y me confirmen por escrito las medidas adoptadas. Si los datos fueron introducidos por otro Estado miembro, les ruego que se pongan en contacto con dicho Estado conforme al artículo 52 del Reglamento (UE) 2017/2226.',
      chrono: 'Cronología de mis estancias en el espacio Schengen', days: ' días', evidence: 'prueba: ',
      encl: 'Documentos adjuntos (copias):', todo: '[completar]',
      closing: 'Les agradecería una respuesta dentro de los plazos previstos en el artículo 52 del Reglamento (UE) 2017/2226 y, en caso de denegación, información sobre los recursos de que dispongo, incluido el derecho a presentar una reclamación ante la autoridad nacional de control de protección de datos.',
      bye: 'Atentamente,', place: '[paso fronterizo]',
      ev: { passport: 'Copia de la página de datos de mi pasaporte', boarding: 'Tarjetas de embarque / billetes del paso fronterizo en cuestión', booking: 'Confirmación de reserva (ferry, túnel, tren o avión)', stay: 'Confirmaciones de alojamiento o alquiler de coche fuera del espacio Schengen', payments: 'Pagos con tarjeta / recibos que muestran dónde me encontraba', stamps: 'Páginas de mi pasaporte con sellos de entrada/salida', screenshot: 'Captura de pantalla fechada del resultado del servicio de cálculo de la UE' },
      subjectShort: 'SES/EES – Solicitud de acceso y rectificación – artículo 52 del Reglamento (UE) 2017/2226'
    },
    it: {
      fullName: '[Nome e cognome]', to: 'A: ', toGeneric: 'All’autorità competente per la protezione dei dati EES — ', date: 'Data: ',
      subject: 'Oggetto: Richiesta di accesso e rettifica dei miei dati nel sistema di ingressi/uscite (EES) — articolo 52 del regolamento (UE) 2017/2226',
      dear: 'Gentili Signore e Signori,',
      intro: 'con la presente esercito i diritti previsti dall’articolo 52 del regolamento (UE) 2017/2226 e dagli articoli 15 e 16 del regolamento (UE) 2016/679 (GDPR).',
      h1: '1. Dati identificativi', name: 'Nome: ', dob: 'Data di nascita: ', nat: 'Cittadinanza: ', pp: 'Numero di passaporto: ', ppBy: ', rilasciato da: ',
      h2: '2. Richiesta di accesso',
      access: 'Vi prego di fornirmi copia di tutti i dati che mi riguardano registrati nell’EES, compreso il mio fascicolo individuale, tutte le cartelle di ingresso/uscita ed eventuali cartelle di respingimento, con l’indicazione dello Stato membro che ha inserito ciascun dato.',
      h3: '3. Richiesta di rettifica / integrazione',
      prob: { exit: 'La mia uscita dallo spazio Schengen non è stata registrata.', entry: 'Il mio ingresso nello spazio Schengen non è stato registrato.', date: 'Un attraversamento di frontiera è stato registrato con una data errata.', overstay: 'Il servizio ufficiale di verifica della durata del soggiorno indica che ho superato la durata consentita o che non mi restano giorni, il che non è corretto.' },
      fact: function (dir, date, place) { return 'Fatto corretto: ' + (dir === 'exit' ? 'uscita dallo' : 'ingresso nello') + ' spazio Schengen il ' + date + ' presso il valico di frontiera ' + place + '.'; },
      shows: 'Ciò che risulta dalla registrazione: ',
      ask: 'Vi chiedo di verificare tali dati, di rettificarli o integrarli senza ritardo e di confermarmi per iscritto le misure adottate. Qualora i dati siano stati inseriti da un altro Stato membro, vi prego di contattarlo ai sensi dell’articolo 52 del regolamento (UE) 2017/2226.',
      chrono: 'Cronologia dei miei soggiorni nello spazio Schengen', days: ' giorni', evidence: 'prova: ',
      encl: 'Allegati (copie):', todo: '[da completare]',
      closing: 'Vi sarei grato/a per una risposta entro i termini previsti dall’articolo 52 del regolamento (UE) 2017/2226 e, in caso di rifiuto, per l’indicazione dei mezzi di ricorso disponibili, compreso il diritto di proporre reclamo all’autorità nazionale di controllo per la protezione dei dati.',
      bye: 'Distinti saluti,', place: '[valico di frontiera]',
      ev: { passport: 'Copia della pagina dei dati anagrafici del passaporto', boarding: 'Carte d’imbarco / biglietti dell’attraversamento contestato', booking: 'Conferma di prenotazione (traghetto, tunnel, treno o aereo)', stay: 'Conferme di alloggio o noleggio auto fuori dallo spazio Schengen', payments: 'Pagamenti con carta / ricevute che indicano dove mi trovavo', stamps: 'Pagine del passaporto con timbri di ingresso/uscita', screenshot: 'Schermata datata del risultato del servizio di verifica UE' },
      subjectShort: 'EES – Richiesta di accesso e rettifica – articolo 52 del regolamento (UE) 2017/2226'
    },
    nl: {
      fullName: '[Volledige naam]', to: 'Aan: ', toGeneric: 'Aan de bevoegde autoriteit voor gegevensbescherming in het EES — ', date: 'Datum: ',
      subject: 'Onderwerp: Verzoek om inzage in en rectificatie van mijn gegevens in het inreis-uitreissysteem (EES) — artikel 52 van Verordening (EU) 2017/2226',
      dear: 'Geachte heer, mevrouw,',
      intro: 'Hierbij maak ik gebruik van mijn rechten op grond van artikel 52 van Verordening (EU) 2017/2226 en de artikelen 15 en 16 van Verordening (EU) 2016/679 (AVG).',
      h1: '1. Identificatie', name: 'Naam: ', dob: 'Geboortedatum: ', nat: 'Nationaliteit: ', pp: 'Paspoortnummer: ', ppBy: ', afgegeven door: ',
      h2: '2. Verzoek om inzage',
      access: 'Ik verzoek u mij een kopie te verstrekken van alle gegevens die in het EES over mij zijn opgeslagen, met inbegrip van mijn individueel dossier, alle inreis- en uitreisregistraties en eventuele registraties van weigering van toegang, met vermelding van de lidstaat die elk gegeven heeft ingevoerd.',
      h3: '3. Verzoek om rectificatie / aanvulling',
      prob: { exit: 'Mijn uitreis uit het Schengengebied is niet geregistreerd.', entry: 'Mijn inreis in het Schengengebied is niet geregistreerd.', date: 'Een grensovergang is met een onjuiste datum geregistreerd.', overstay: 'De officiële dienst voor de berekening van de toegestane verblijfsduur geeft aan dat ik de toegestane duur heb overschreden of geen dagen meer heb; dit is onjuist.' },
      fact: function (dir, date, place) { return 'Juiste gegevens: ' + (dir === 'exit' ? 'uitreis uit het' : 'inreis in het') + ' Schengengebied op ' + date + ' via grensdoorlaatpost ' + place + '.'; },
      shows: 'Wat de registratie toont: ',
      ask: 'Ik verzoek u deze gegevens te controleren, ze onverwijld te rectificeren of aan te vullen en mij schriftelijk te bevestigen welke maatregelen zijn genomen. Indien de gegevens door een andere lidstaat zijn ingevoerd, verzoek ik u contact op te nemen met die lidstaat overeenkomstig artikel 52 van Verordening (EU) 2017/2226.',
      chrono: 'Overzicht van mijn verblijven in het Schengengebied', days: ' dagen', evidence: 'bewijs: ',
      encl: 'Bijlagen (kopieën):', todo: '[in te vullen]',
      closing: 'Ik zou een antwoord binnen de termijnen van artikel 52 van Verordening (EU) 2017/2226 op prijs stellen en, in geval van weigering, informatie over de mij ter beschikking staande rechtsmiddelen, waaronder het recht om een klacht in te dienen bij de nationale toezichthoudende autoriteit voor gegevensbescherming.',
      bye: 'Met vriendelijke groet,', place: '[grensdoorlaatpost]',
      ev: { passport: 'Kopie van de persoonsgegevenspagina van mijn paspoort', boarding: 'Instapkaarten / tickets voor de betwiste grensovergang', booking: 'Boekingsbevestiging (veerboot, tunnel, trein of vliegtuig)', stay: 'Bevestigingen van accommodatie of autohuur buiten het Schengengebied', payments: 'Kaartbetalingen / bonnen die laten zien waar ik was', stamps: 'Pagina’s van mijn paspoort met in- en uitreisstempels', screenshot: 'Gedateerde schermafbeelding van het resultaat van de EU-verblijfscheck' },
      subjectShort: 'EES – verzoek om inzage en rectificatie – artikel 52 Verordening (EU) 2017/2226'
    },
    pt: {
      fullName: '[Nome completo]', to: 'A: ', toGeneric: 'À autoridade competente em matéria de proteção de dados do EES — ', date: 'Data: ',
      subject: 'Assunto: Pedido de acesso e retificação dos meus dados no Sistema de Entrada/Saída (EES) — artigo 52.º do Regulamento (UE) 2017/2226',
      dear: 'Exmos. Senhores,',
      intro: 'Venho, pela presente, exercer os direitos que me são conferidos pelo artigo 52.º do Regulamento (UE) 2017/2226 e pelos artigos 15.º e 16.º do Regulamento (UE) 2016/679 (RGPD).',
      h1: '1. Identificação', name: 'Nome: ', dob: 'Data de nascimento: ', nat: 'Nacionalidade: ', pp: 'Número do passaporte: ', ppBy: ', emitido por: ',
      h2: '2. Pedido de acesso',
      access: 'Solicito que me seja facultada uma cópia de todos os dados que me dizem respeito registados no EES, incluindo o meu processo individual, todos os registos de entrada/saída e eventuais registos de recusa de entrada, com indicação do Estado-Membro que introduziu cada um deles.',
      h3: '3. Pedido de retificação / completamento',
      prob: { exit: 'A minha saída do espaço Schengen não foi registada.', entry: 'A minha entrada no espaço Schengen não foi registada.', date: 'Uma passagem de fronteira foi registada com uma data errada.', overstay: 'O serviço oficial de verificação da duração da estada indica que excedi a duração autorizada ou que não me restam dias, o que não corresponde à verdade.' },
      fact: function (dir, date, place) { return 'Facto correto: ' + (dir === 'exit' ? 'saída do' : 'entrada no') + ' espaço Schengen em ' + date + ' no ponto de passagem de fronteira ' + place + '.'; },
      shows: 'O que consta do registo: ',
      ask: 'Solicito que verifiquem estes dados, que os retifiquem ou completem sem demora e que me confirmem por escrito as medidas tomadas. Caso os dados tenham sido introduzidos por outro Estado-Membro, peço que contactem esse Estado-Membro nos termos do artigo 52.º do Regulamento (UE) 2017/2226.',
      chrono: 'Cronologia das minhas estadas no espaço Schengen', days: ' dias', evidence: 'prova: ',
      encl: 'Anexos (cópias):', todo: '[a completar]',
      closing: 'Agradeço uma resposta dentro dos prazos previstos no artigo 52.º do Regulamento (UE) 2017/2226 e, em caso de recusa, a indicação das vias de recurso ao meu dispor, incluindo o direito de apresentar reclamação junto da autoridade nacional de controlo da proteção de dados.',
      bye: 'Com os melhores cumprimentos,', place: '[ponto de passagem de fronteira]',
      ev: { passport: 'Cópia da página de identificação do meu passaporte', boarding: 'Cartões de embarque / bilhetes da passagem contestada', booking: 'Confirmação de reserva (ferry, túnel, comboio ou avião)', stay: 'Confirmações de alojamento ou aluguer de automóvel fora do espaço Schengen', payments: 'Pagamentos com cartão / recibos que mostram onde me encontrava', stamps: 'Páginas do meu passaporte com carimbos de entrada/saída', screenshot: 'Captura de ecrã datada do resultado do serviço de verificação da UE' },
      subjectShort: 'EES – Pedido de acesso e retificação – artigo 52.º do Regulamento (UE) 2017/2226'
    }
  };

  function build(o) {
    var S = root.Schengen, L = T[o.lang] ? o.lang : 'en', t = T[L], loc = LOCALE[L];
    function d(iso) { var n = S.toDay(iso); return n === null ? '[date]' : S.fmt(n, loc); }
    var name = o.name || t.fullName, lines = [];
    lines.push(name); if (o.addr) lines.push(o.addr); if (o.email) lines.push(o.email); lines.push('');
    if (o.ctrl) { lines.push(t.to + o.ctrl.n); lines.push(o.ctrl.a); } else lines.push(t.toGeneric + o.countryName);
    lines.push(t.date + S.fmt(S.todayDay(), loc)); lines.push('');
    lines.push(t.subject); lines.push(''); lines.push(t.dear); lines.push(''); lines.push(t.intro); lines.push('');
    lines.push(t.h1); lines.push(t.name + name); lines.push(t.dob + (o.dob ? d(o.dob) : '[ ]')); lines.push(t.nat + (o.nat || '[ ]'));
    lines.push(t.pp + (o.ppn || '[ ]') + t.ppBy + (o.ppc || '[ ]')); lines.push('');
    lines.push(t.h2); lines.push(t.access);
    var n = 3;
    if (o.problem !== 'access') {
      lines.push(''); lines.push(t.h3); lines.push(t.prob[o.problem]);
      lines.push(t.fact(o.dir, d(o.cDate), o.place || t.place));
      if (o.detail) lines.push(t.shows + o.detail);
      lines.push(t.ask); n = 4;
    }
    if (o.trips && o.trips.length) {
      lines.push(''); lines.push(n + '. ' + t.chrono);
      o.trips.slice().sort(function (a, b) { return a.entry < b.entry ? -1 : 1; }).forEach(function (tr) {
        var k = S.toDay(tr.exit) - S.toDay(tr.entry) + 1;
        lines.push('- ' + d(tr.entry) + ' → ' + d(tr.exit) + ' (' + k + t.days + ')' + (tr.where ? ' — ' + tr.where : '') + (tr.proof ? ' [' + t.evidence + tr.proof + ']' : ''));
      });
    }
    var ev = (o.evidence || []).map(function (id) { return t.ev[id]; }).filter(Boolean);
    if (o.evOther) ev.push(o.evOther);
    lines.push(''); lines.push(t.encl); (ev.length ? ev : [t.todo]).forEach(function (e) { lines.push('- ' + e); });
    lines.push(''); lines.push(t.closing); lines.push(''); lines.push(t.bye); lines.push(''); lines.push(name);
    return lines.join('\n');
  }
  var api = { build: build, subject: function (L) { return (T[L] || T.en).subjectShort; }, LANGS: Object.keys(T) };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.EESLetter = api;
})(typeof window !== 'undefined' ? window : this);
