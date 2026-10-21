// Contingut de la web diqsolucions.cat en tres idiomes. Base: Web_Director_Financiero_Externo_Fractional_CFO.docx
module.exports = {
ca: {
  lang: 'ca', htmlLang: 'ca', dir: '', label: 'CA',
  meta: {
    title: 'Diq Solucions · Director financer extern (Fractional CFO)',
    description: 'Direcció financera externa per a empreses que creixen: control financer, previsió, tresoreria, decisions i finançament. Sense estructura fixa.',
    locale: 'ca_ES'
  },
  nav: { cta: 'Parlem de la teva empresa' },
  hero: {
    h1a: 'La teva empresa no necessita més números.',
    h1b: 'Necessita entendre\'ls.',
    lead: 'Direcció financera experta per a empresaris que necessiten més control, més previsió i millors decisions.',
    points: 'Un sol responsable · Dedicació a mida · Sense compromís',
    cta: 'Parlem de la teva empresa',
    cta2: 'Veure com ho faig',
    alt: 'Mans treballant en un portàtil davant d\'una pantalla amb gràfics financers'
  },
  intro: {
    lines: ['Més vendes.', 'Més persones.', 'Més inversió.', 'Més costos.', 'Més finançament.', 'Més risc.'],
    lead: 'Quan una empresa creix, també creix la complexitat de les seves decisions. I arriba un moment en què saber quant has facturat ja no és suficient.',
    p1: 'Necessites saber on guanyes diners, quant necessites per seguir creixent, què pot passar en els propers mesos i quines decisions pots prendre avui.',
    p2: 'Aquí és on hi entro jo.',
    p3: 'Direcció financera externa, adaptada a la teva empresa i al moment en què es troba.'
  },
  problem: {
    title: 'La teva empresa creix… però la informació financera no creix al mateix ritme?',
    intro: 'Potser et sona:',
    items: [
      'Factures més, però no tens clar si realment guanyes més.',
      'El compte de resultats arriba quan les decisions ja estan preses.',
      'La tresoreria et preocupa encara que l\'empresa sigui rendible.',
      'No saps amb prou precisió com evolucionarà la caixa d\'aquí a 3, 6 o 12 mesos.',
      'Tens comptabilitat, però et falta una visió financera de conjunt.',
      'Vols invertir, contractar o obrir una nova línia i necessites saber si te la pots permetre.',
      'Els bancs o inversors et demanen informació financera que no tens preparada.',
      'El creixement està generant una complexitat que ja no pots gestionar només des de l\'operativa.',
      'Tens un equip comptable o una assessoria, però necessites algú que s\'assegui amb direcció i parli de negoci.'
    ],
    out1: 'Si ets en aquest punt, probablement no necessites més informació.',
    out2: 'Necessites convertir la informació que ja tens en criteri per decidir.'
  },
  numbers: {
    title: 'Dels números a les decisions',
    lead: 'La comptabilitat t\'explica el que ha passat. La direcció financera t\'ajuda a decidir què fer a continuació.',
    p: 'La comptabilitat és imprescindible. Però registrar, tancar i presentar informació financera no és el mateix que gestionar financerament una empresa.',
    accLabel: 'Comptabilitat', accQ: 'Què ha passat?',
    accText: 'Registra, classifica i explica la realitat econòmica de l\'empresa.',
    dirLabel: 'Direcció financera',
    dirQ: ['Què està passant?', 'Què pot passar?', 'Quines alternatives tenim?', 'Quina decisió té més sentit?'],
    close1: 'La meva feina consisteix a connectar els números amb el negoci.',
    close2: 'Convertir dades en informació. Informació en criteri. I criteri en decisions.',
    chain: ['Dades', 'Informació', 'Criteri', 'Decisió']
  },
  when: {
    title: 'Un director financer quan el necessites',
    lead: 'L\'experiència d\'un CFO, sense incorporar necessàriament una estructura a temps complet.',
    p1: 'No totes les empreses necessiten un director financer intern cinc dies a la setmana. Però moltes empreses arriben a un moment en què sí que necessiten la seva experiència, visió i capacitat d\'anàlisi.',
    p2: 'La direcció financera externa permet incorporar aquesta funció de manera flexible, proporcional a les necessitats reals de l\'empresa.',
    p3: 'Pot ser per resoldre un problema concret. Per acompanyar una etapa de creixement. Per professionalitzar la gestió financera. O per tenir de manera recurrent algú al costat de la direcció que ajudi a prendre millors decisions.',
    tag: ['Més experiència financera.', 'Menys estructura fixa.', 'Més capacitat per decidir.']
  },
  help: {
    id: 'ajuda',
    title: 'En què puc ajudar-te?',
    items: [
      { label: 'Saber on ets', title: 'Control financer i reporting',
        intro: 'No es tracta de generar més informes. Es tracta de saber quina informació necessites per dirigir millor.',
        bullets: ['Evolució de vendes i marges.', 'Rendibilitat per producte, servei, client o unitat de negoci.', 'Evolució de costos.', 'Desviacions respecte al pressupost.', 'Principals indicadors financers.', 'Situació econòmica i financera.'],
        close: 'Informació clara per saber què està passant realment.' },
      { label: 'Saber cap a on vas', title: 'Planificació i previsió financera',
        intro: 'Gestionar una empresa mirant només el retrovisor limita les decisions.',
        bullets: ['Pressupostos anuals.', 'Forecast i previsions.', 'Models financers.', 'Anàlisi d\'escenaris.', 'Previsió de vendes, costos i resultats.', 'Anàlisi de desviacions.', 'Planificació financera.'],
        close: 'Perquè una bona decisió comença molt abans de prendre-la.' },
      { label: 'Saber quants diners necessites', title: 'Tresoreria i cash-flow',
        intro: 'Una empresa pot ser rendible i tenir problemes de caixa.',
        bullets: ['Previsions de tresoreria.', 'Cash-flow.', 'Control de cobraments i pagaments.', 'Necessitats de circulant.', 'Planificació de liquiditat.', 'Necessitats de finançament.'],
        close: 'La pregunta no és només quant guanyes. És quants diners tindràs quan els necessitis.' },
      { label: 'Saber quina decisió prendre', title: 'Finances al servei de les decisions empresarials',
        intro: 'Hi ha decisions que poden canviar el rumb d\'una empresa. Una nova inversió. Una contractació. Un canvi de preus. Una nova línia de negoci. Una adquisició. Una externalització.',
        bullets: ['Analitzar econòmicament les alternatives abans de decidir.', 'Posar els números sobre la taula per valorar diferents escenaris.'],
        close: 'No per dir-te quina decisió has de prendre. Sinó perquè puguis prendre-la amb millor informació.' },
      { label: 'Aconseguir els recursos per créixer', title: 'Finançament i relació amb bancs i inversors',
        intro: 'Quan una empresa busca finançament, necessita molt més que un compte de resultats. Necessita explicar el seu negoci, les seves previsions i la capacitat que té per generar recursos.',
        bullets: ['Models financers.', 'Plans de negoci.', 'Previsions.', 'Informació financera.', 'Presentacions per a entitats financeres.', 'Informació per a socis i inversors.', 'Anàlisi de necessitats de finançament.'],
        close: 'La informació financera també és una eina per negociar.' }
    ]
  },
  situations: {
    title: 'Quan té sentit incorporar direcció financera',
    lead: 'Potser no necessites un CFO a temps complet. Però pot ser que ja necessitis pensar com una empresa que sí que en té.',
    items: [
      { t: 'Està creixent', d: 'El volum i la complexitat augmenten i necessites més control.' },
      { t: 'Està perdent visibilitat', d: 'Els resultats arriben, però no tens prou capacitat per anticipar el que ve.' },
      { t: 'Té problemes de tresoreria', d: 'Necessites saber quan pot aparèixer una necessitat de liquiditat i com anticipar-te\'n.' },
      { t: 'Està prenent decisions importants', d: 'Vols avaluar inversions, contractació, preus, expansió o nous projectes amb dades.' },
      { t: 'Està buscant finançament', d: 'Necessites preparar models, previsions i arguments financers sòlids.' },
      { t: 'Està professionalitzant la gestió', d: 'L\'empresa ha assolit un nivell de complexitat que requereix sistemes i processos financers més avançats.' },
      { t: 'Té comptabilitat, però no direcció financera', d: 'Hi ha informació, però falta algú que la interpreti i la converteixi en decisions.' }
    ]
  },
  fit: {
    title: 'No totes les empreses necessiten el mateix',
    lead: 'Per això la direcció financera s\'ha d\'adaptar a la teva empresa.',
    p: 'No treballo amb paquets tancats ni amb una dedicació estàndard. Primer entenc el teu negoci, els teus objectius i els teus principals reptes. Després definim què necessites realment.',
    modes: [
      { t: 'Projecte', d: 'Per resoldre una necessitat financera concreta.' },
      { t: 'Acompanyament', d: 'Per disposar de direcció financera de manera recurrent.' },
      { t: 'Transformació', d: 'Per professionalitzar processos, eines i sistemes de gestió financera.' }
    ],
    dedTitle: 'La dedicació es pot adaptar a la situació de l\'empresa:',
    ded: ['Intervencions puntuals', 'Projectes específics', 'Acompanyament recurrent', 'Suport a direcció', 'Etapes de creixement o canvi'],
    close: 'Tu decideixes quant suport necessita la teva empresa.'
  },
  how: {
    id: 'com',
    title: 'Com treballo',
    lead: 'Primer entenem. Després decidim. Finalment actuem.',
    steps: [
      { t: 'Diagnòstic', d: 'Analitzem la situació actual. Negoci, estructura, informació financera, processos, tresoreria, reporting i principals reptes.' },
      { t: 'Prioritats', d: 'Identifiquem què necessita atenció immediata i on podem generar més impacte.' },
      { t: 'Pla', d: 'Definim les eines, processos, indicadors i accions necessàries.' },
      { t: 'Implementació', d: 'Treballem amb direcció i amb l\'equip per portar les decisions a la pràctica.' },
      { t: 'Seguiment', d: 'Mesurem l\'evolució, analitzem resultats i adaptem l\'enfocament a les noves necessitats de l\'empresa.' }
    ],
    close1: 'No es tracta de lliurar un informe i desaparèixer.',
    close2: 'Es tracta d\'acompanyar la direcció.'
  },
  change: {
    title: 'Què canvia quan tens direcció financera?',
    lead: 'Més control. Més visibilitat. Més capacitat per decidir.',
    items: [
      { t: 'Visibilitat', d: 'Entens millor on és la teva empresa i què està passant realment.' },
      { t: 'Control', d: 'Detectes desviacions i problemes abans que es converteixin en problemes més grans.' },
      { t: 'Previsió', d: 'Pots anticipar necessitats de caixa, inversions i diferents escenaris.' },
      { t: 'Criteri', d: 'Tens una visió financera independent amb què contrastar decisions.' },
      { t: 'Estructura', d: 'Implantes processos i eines que permeten gestionar millor el creixement.' },
      { t: 'Tranquil·litat', d: 'Saps que les decisions financeres importants es prenen amb informació fiable i analitzada.' }
    ]
  },
  advisor: {
    title: 'No sóc la teva assessoria.',
    sub: 'I tampoc pretenc substituir-la.',
    p1: 'Treballo al costat de la direcció, l\'assessoria i l\'equip comptable de l\'empresa, perquè cada funció té un paper diferent.',
    roles: ['L\'assessoria aporta coneixement comptable i fiscal.', 'L\'equip intern coneix el dia a dia.', 'La direcció pren les decisions.'],
    p2: 'La meva funció és connectar aquestes peces des d\'una visió financera global, cosa que em permet oferir a la direcció una visió numèrica que pugui contrastar amb la seva percepció del dia a dia de l\'empresa. Tot, dins del context de l\'empresa, amb una anàlisi profunda de les xifres (per departaments, per comptes comptables, per centres de cost…), i amb les màximes aportacions que puguin ajudar a millorar els resultats.',
    tableTitle: 'Diferència respecte a una assessoria',
    head: ['Assessoria', 'Director financer extern'],
    rows: [['Registra informació', 'Interpreta informació'], ['Compleix obligacions', 'Ajuda a decidir'], ['Mira el passat', 'Mira el futur'], ['Fiscal i comptable', 'Estratègic i financer']]
  },
  about: {
    title: 'Experiència financera al costat de qui pren les decisions.',
    role: 'Director financer extern · Fractional CFO',
    p1: 'No entenc la direcció financera com una funció aïllada del negoci.',
    p2: 'Els números tenen sentit quan ajuden a comprendre l\'empresa i a prendre millors decisions.',
    valuesLead: 'La meva manera de treballar combina:',
    values: [
      { t: 'Visió financera', d: 'Per entendre la realitat econòmica i financera del negoci.' },
      { t: 'Visió empresarial', d: 'Per connectar els números amb l\'estratègia i les operacions.' },
      { t: 'Rigor', d: 'Per treballar amb informació fiable i anàlisis sòlides.' },
      { t: 'Proximitat', d: 'Per treballar directament amb direcció i propietat.' },
      { t: 'Independència', d: 'Per aportar una visió externa i qüestionar supòsits quan calgui.' },
      { t: 'Orientació a l\'acció', d: 'Perquè una anàlisi només té valor quan ajuda a decidir i actuar.' }
    ],
    close: 'El meu objectiu no és elaborar informes. És ajudar-te a entendre què diuen els números i què pots fer amb ells.'
  },
  measure: {
    title: 'Una funció financera a mida',
    lead: 'No necessites incorporar un lloc. Necessites incorporar capacitat.',
    p1: 'Un director financer intern implica una estructura permanent. La direcció financera externa permet accedir a experiència i criteri financer quan realment ho necessites.',
    p2: 'Sense sobredimensionar l\'estructura. Sense assumir necessàriament el cost d\'una posició a temps complet. Sense perdre flexibilitat.',
    close: 'Tu aportes el negoci. Jo aporto la visió financera. Junts convertim la informació en decisions.'
  },
  faq: {
    title: 'Preguntes freqüents',
    items: [
      { q: 'És el mateix que contractar un CFO?', a: 'No exactament. Un Fractional CFO o director financer extern assumeix funcions pròpies de direcció financera amb una dedicació adaptada a les necessitats de l\'empresa, sense necessitat d\'incorporar la posició a temps complet.' },
      { q: 'Quantes hores necessitarà la meva empresa?', a: 'No hi ha una dedicació estàndard. Dependrà de la situació, complexitat i objectius de la teva empresa. Primer analitzem què necessites i després definim el nivell de dedicació adequat.' },
      { q: 'Treballaràs amb el nostre equip comptable?', a: 'Sí. La direcció financera pot treballar conjuntament amb l\'assessoria, el responsable d\'administració o l\'equip comptable intern. La finalitat és que la informació financera sigui fiable, oportuna i útil per a la gestió.' },
      { q: 'És un servei només per a empreses grans?', a: 'No. Està especialment pensat per a empreses que han assolit un nivell de complexitat en què necessiten una funció financera més avançada, tot i que encara no tingui sentit incorporar un CFO a temps complet.' },
      { q: 'Pots ajudar-nos si tenim problemes de tresoreria?', a: 'Sí. Podem analitzar la situació de caixa, identificar necessitats de liquiditat i construir previsions que permetin anticipar diferents escenaris.' },
      { q: 'Pots preparar un pressupost i un pla financer?', a: 'Sí. Podem desenvolupar pressupostos, forecasts, models financers i escenaris adaptats a les necessitats de l\'empresa.' },
      { q: 'Pots ajudar-nos a buscar finançament?', a: 'Puc ajudar-te a preparar la informació financera, models, previsions i plans necessaris per abordar converses amb bancs, inversors, socis o altres fonts de finançament.' },
      { q: 'Podem començar amb un projecte concret?', a: 'Sí. No cal començar amb un servei recurrent. Podem començar per una necessitat concreta, analitzar el resultat i, a partir d\'aquí, valorar si té sentit continuar amb un acompanyament financer.' }
    ]
  },
  contact: {
    title: 'Parlem de la teva empresa?',
    lead1: 'Els números de la teva empresa ja estan parlant. La qüestió és si tens temps per escoltar-los.',
    lead2: 'Explica\'m breument en quin moment es troba la teva empresa i quin és el principal repte financer que tens actualment. En una primera conversa analitzarem la situació i veurem si la direcció financera externa pot aportar valor.',
    nocommit: 'Sense compromís.',
    emailLabel: 'Email',
    form: {
      title: 'Explica\'m el teu cas', sub: 'Et responc personalment i sense compromís.',
      name: 'Nom i cognoms', company: 'Empresa', email: 'Email', phone: 'Telèfon', msg: 'Quin és el principal repte financer actual?',
      consent: 'Accepto que es tractin les meves dades per contactar-me, segons la <a href="{privacy}" target="_blank" rel="noopener">política de privacitat</a>.',
      submit: 'Parlem de la meva empresa', sending: 'Enviant…',
      ok: 'Gràcies! He rebut el teu missatge i et respondré ben aviat.',
      err: 'Hi ha hagut un problema en enviar. Torna-ho a provar o escriu-me per email.',
      subject: 'Nova sol·licitud web · Diq Solucions (.cat)'
    }
  },
  band: {
    title: 'Més visió. Més control. Més previsió. Millors decisions.',
    chain: 'Dades → Informació → Criteri → Decisió',
    p: 'Direcció financera experta, independent i flexible per a empreses que han arribat al moment en què necessiten alguna cosa més que comptabilitat.'
  },
  footer: { text: 'Direcció financera externa · © 2026 Diq Solucions', privacy: 'Política de privacitat', logoAlt: 'Diq Solucions · Director financer extern' },
  privacy: {
    file: 'privacitat.html', title: 'Política de privacitat', updated: 'Última actualització: octubre de 2026', back: '← Tornar a la web',
    sections: [
      { h: '1. Qui és el responsable del tractament', p: ['El responsable del tractament de les dades personals recollides a través d\'aquest lloc web (diqsolucions.cat) és <strong>Diq Solucions</strong>, amb correu de contacte <a href="mailto:{email}">{email}</a>.', 'NIF: <span class="fill">a completar</span> · Domicili fiscal: <span class="fill">a completar</span>'] },
      { h: '2. Quines dades recollim', p: ['Únicament recollim les dades que ens facilites voluntàriament a través del formulari de contacte del lloc web:'], ul: ['Nom i cognoms', 'Empresa (opcional)', 'Adreça de correu electrònic', 'Telèfon (opcional)', 'El contingut del missatge que ens escriguis'], after: ['Aquest lloc no fa servir galetes (cookies) de seguiment ni analítica de tercers.'] },
      { h: '3. Amb quina finalitat tractem les teves dades', p: ['Fem servir les dades que ens envies exclusivament per respondre la teva sol·licitud de contacte. No les fem servir amb finalitats comercials diferents ni les cedim a tercers per a màrqueting.'] },
      { h: '4. Legitimació', p: ['La base legal per al tractament és el teu consentiment exprés, atorgat en marcar la casella de consentiment i enviar el formulari de contacte.'] },
      { h: '5. Amb qui compartim les dades', p: ['El formulari de contacte es gestiona a través del proveïdor <a href="https://web3forms.com" target="_blank" rel="noopener">Web3Forms</a>, que actua com a encarregat del tractament: rep les dades del formulari únicament per reenviar-les per correu electrònic i no les fa servir amb cap altra finalitat. No compartim les teves dades amb cap altre tercer.'] },
      { h: '6. Durant quant de temps conservem les dades', p: ['Conservem les dades de contacte durant el temps necessari per gestionar la teva sol·licitud i, si s\'escau, mantenir la relació comercial derivada, i en tot cas durant els terminis legalment exigibles.'] },
      { h: '7. Els teus drets', p: ['Pots exercir en qualsevol moment els teus drets d\'accés, rectificació, supressió, oposició, limitació del tractament i portabilitat de les dades, escrivint a <a href="mailto:{email}">{email}</a>. També tens dret a presentar una reclamació davant l\'Agència Espanyola de Protecció de Dades (aepd.es) o l\'Autoritat Catalana de Protecció de Dades (apdcat.cat) si consideres que el tractament no s\'ajusta a la normativa.'] }
    ]
  }
},

es: {
  lang: 'es', htmlLang: 'es', dir: 'es/', label: 'ES',
  meta: {
    title: 'Diq Solucions · Director financiero externo (Fractional CFO)',
    description: 'Dirección financiera externa para empresas que crecen: control financiero, previsión, tesorería, decisiones y financiación. Sin estructura fija.',
    locale: 'es_ES'
  },
  nav: { cta: 'Hablemos de tu empresa' },
  hero: {
    h1a: 'Tu empresa no necesita más números.',
    h1b: 'Necesita entenderlos.',
    lead: 'Dirección financiera experta para empresarios que necesitan más control, más previsión y mejores decisiones.',
    points: 'Un solo responsable · Dedicación a medida · Sin compromiso',
    cta: 'Hablemos de tu empresa',
    cta2: 'Ver cómo lo hago',
    alt: 'Manos trabajando en un portátil frente a una pantalla con gráficos financieros'
  },
  intro: {
    lines: ['Más ventas.', 'Más personas.', 'Más inversión.', 'Más costes.', 'Más financiación.', 'Más riesgo.'],
    lead: 'Cuando una empresa crece, también crece la complejidad de sus decisiones. Y llega un momento en el que saber cuánto has facturado ya no es suficiente.',
    p1: 'Necesitas saber dónde ganas dinero, cuánto necesitas para seguir creciendo, qué puede ocurrir en los próximos meses y qué decisiones puedes tomar hoy.',
    p2: 'Ahí es donde entro yo.',
    p3: 'Dirección financiera externa, adaptada a tu empresa y al momento en el que se encuentra.'
  },
  problem: {
    title: '¿Tu empresa está creciendo… pero la información financiera no crece al mismo ritmo?',
    intro: 'Puede que te resulte familiar:',
    items: [
      'Facturas más, pero no tienes claro si realmente ganas más.',
      'La cuenta de resultados llega cuando las decisiones ya están tomadas.',
      'La tesorería te preocupa aunque la empresa sea rentable.',
      'No sabes con suficiente precisión cómo evolucionará la caja dentro de 3, 6 o 12 meses.',
      'Tienes contabilidad, pero te falta una visión financiera de conjunto.',
      'Quieres invertir, contratar o abrir una nueva línea y necesitas saber si puedes permitírtelo.',
      'Los bancos o inversores te piden información financiera que no tienes preparada.',
      'El crecimiento está generando una complejidad que ya no puedes gestionar únicamente desde la operativa.',
      'Tienes un equipo contable o una asesoría, pero necesitas alguien que se siente con dirección y hable de negocio.'
    ],
    out1: 'Si estás en este punto, probablemente no necesitas más información.',
    out2: 'Necesitas convertir la información que ya tienes en criterio para decidir.'
  },
  numbers: {
    title: 'De los números a las decisiones',
    lead: 'La contabilidad te explica lo que ha pasado. La dirección financiera te ayuda a decidir qué hacer a continuación.',
    p: 'La contabilidad es imprescindible. Pero registrar, cerrar y presentar información financiera no es lo mismo que gestionar financieramente una empresa.',
    accLabel: 'Contabilidad', accQ: '¿Qué ha pasado?',
    accText: 'Registra, clasifica y explica la realidad económica de la empresa.',
    dirLabel: 'Dirección financiera',
    dirQ: ['¿Qué está pasando?', '¿Qué puede pasar?', '¿Qué alternativas tenemos?', '¿Qué decisión tiene más sentido?'],
    close1: 'Mi trabajo consiste en conectar los números con el negocio.',
    close2: 'Convertir datos en información. Información en criterio. Y criterio en decisiones.',
    chain: ['Datos', 'Información', 'Criterio', 'Decisión']
  },
  when: {
    title: 'Un director financiero cuando lo necesitas',
    lead: 'La experiencia de un CFO, sin incorporar necesariamente una estructura a tiempo completo.',
    p1: 'No todas las empresas necesitan un director financiero interno cinco días a la semana. Pero muchas empresas llegan a un momento en el que sí necesitan su experiencia, visión y capacidad de análisis.',
    p2: 'La dirección financiera externa permite incorporar esa función de forma flexible, proporcional a las necesidades reales de la empresa.',
    p3: 'Puede ser para resolver un problema concreto. Para acompañar una etapa de crecimiento. Para profesionalizar la gestión financiera. O para tener de forma recurrente a alguien al lado de la dirección que ayude a tomar mejores decisiones.',
    tag: ['Más experiencia financiera.', 'Menos estructura fija.', 'Más capacidad para decidir.']
  },
  help: {
    id: 'ayuda',
    title: '¿En qué puedo ayudarte?',
    items: [
      { label: 'Saber dónde estás', title: 'Control financiero y reporting',
        intro: 'No se trata de generar más informes. Se trata de saber qué información necesitas para dirigir mejor.',
        bullets: ['Evolución de ventas y márgenes.', 'Rentabilidad por producto, servicio, cliente o unidad de negocio.', 'Evolución de costes.', 'Desviaciones respecto al presupuesto.', 'Principales indicadores financieros.', 'Situación económica y financiera.'],
        close: 'Información clara para saber qué está pasando realmente.' },
      { label: 'Saber hacia dónde vas', title: 'Planificación y previsión financiera',
        intro: 'Gestionar una empresa mirando únicamente el retrovisor limita las decisiones.',
        bullets: ['Presupuestos anuales.', 'Forecast y previsiones.', 'Modelos financieros.', 'Análisis de escenarios.', 'Previsión de ventas, costes y resultados.', 'Análisis de desviaciones.', 'Planificación financiera.'],
        close: 'Porque una buena decisión empieza mucho antes de tomarla.' },
      { label: 'Saber cuánto dinero necesitas', title: 'Tesorería y cash-flow',
        intro: 'Una empresa puede ser rentable y tener problemas de caja.',
        bullets: ['Previsiones de tesorería.', 'Cash-flow.', 'Control de cobros y pagos.', 'Necesidades de circulante.', 'Planificación de liquidez.', 'Necesidades de financiación.'],
        close: 'La pregunta no es solo cuánto ganas. Es cuánto dinero tendrás cuando lo necesites.' },
      { label: 'Saber qué decisión tomar', title: 'Finanzas al servicio de las decisiones empresariales',
        intro: 'Hay decisiones que pueden cambiar el rumbo de una empresa. Una nueva inversión. Una contratación. Un cambio de precios. Una nueva línea de negocio. Una adquisición. Una externalización.',
        bullets: ['Analizar económicamente las alternativas antes de decidir.', 'Poner los números sobre la mesa para valorar diferentes escenarios.'],
        close: 'No para decirte qué decisión tomar. Sino para que puedas tomarla con mejor información.' },
      { label: 'Conseguir los recursos para crecer', title: 'Financiación y relación con bancos e inversores',
        intro: 'Cuando una empresa busca financiación, necesita mucho más que una cuenta de resultados. Necesita explicar su negocio, sus previsiones y la capacidad que tiene para generar recursos.',
        bullets: ['Modelos financieros.', 'Planes de negocio.', 'Previsiones.', 'Información financiera.', 'Presentaciones para entidades financieras.', 'Información para socios e inversores.', 'Análisis de necesidades de financiación.'],
        close: 'La información financiera también es una herramienta para negociar.' }
    ]
  },
  situations: {
    title: 'Cuándo tiene sentido incorporar dirección financiera',
    lead: 'Quizá no necesitas un CFO a tiempo completo. Pero puede que ya necesites pensar como una empresa que sí lo tiene.',
    items: [
      { t: 'Está creciendo', d: 'El volumen y la complejidad aumentan y necesitas mayor control.' },
      { t: 'Está perdiendo visibilidad', d: 'Los resultados llegan, pero no tienes suficiente capacidad para anticipar lo que viene.' },
      { t: 'Está teniendo problemas de tesorería', d: 'Necesitas saber cuándo puede aparecer una necesidad de liquidez y cómo anticiparte.' },
      { t: 'Está tomando decisiones importantes', d: 'Quieres evaluar inversiones, contratación, precios, expansión o nuevos proyectos con datos.' },
      { t: 'Está buscando financiación', d: 'Necesitas preparar modelos, previsiones y argumentos financieros sólidos.' },
      { t: 'Está profesionalizando su gestión', d: 'La empresa ha alcanzado un nivel de complejidad que requiere sistemas y procesos financieros más avanzados.' },
      { t: 'Tiene contabilidad, pero no dirección financiera', d: 'Existe información, pero falta alguien que la interprete y la convierta en decisiones.' }
    ]
  },
  fit: {
    title: 'No todas las empresas necesitan lo mismo',
    lead: 'Por eso la dirección financiera debe adaptarse a tu empresa.',
    p: 'No trabajo con paquetes cerrados ni con una dedicación estándar. Primero entiendo tu negocio, tus objetivos y tus principales retos. Después definimos qué necesitas realmente.',
    modes: [
      { t: 'Proyecto', d: 'Para resolver una necesidad financiera concreta.' },
      { t: 'Acompañamiento', d: 'Para disponer de dirección financiera de forma recurrente.' },
      { t: 'Transformación', d: 'Para profesionalizar procesos, herramientas y sistemas de gestión financiera.' }
    ],
    dedTitle: 'La dedicación puede adaptarse a la situación de la empresa:',
    ded: ['Intervenciones puntuales', 'Proyectos específicos', 'Acompañamiento recurrente', 'Soporte a dirección', 'Etapas de crecimiento o cambio'],
    close: 'Tú decides cuánto apoyo necesita tu empresa.'
  },
  how: {
    id: 'como',
    title: 'Cómo trabajo',
    lead: 'Primero entendemos. Después decidimos. Finalmente actuamos.',
    steps: [
      { t: 'Diagnóstico', d: 'Analizamos la situación actual. Negocio, estructura, información financiera, procesos, tesorería, reporting y principales retos.' },
      { t: 'Prioridades', d: 'Identificamos qué necesita atención inmediata y dónde podemos generar mayor impacto.' },
      { t: 'Plan', d: 'Definimos las herramientas, procesos, indicadores y acciones necesarias.' },
      { t: 'Implementación', d: 'Trabajamos con dirección y con el equipo para llevar las decisiones a la práctica.' },
      { t: 'Seguimiento', d: 'Medimos la evolución, analizamos resultados y adaptamos el enfoque a las nuevas necesidades de la empresa.' }
    ],
    close1: 'No se trata de entregar un informe y desaparecer.',
    close2: 'Se trata de acompañar a la dirección.'
  },
  change: {
    title: '¿Qué cambia cuando tienes dirección financiera?',
    lead: 'Más control. Más visibilidad. Más capacidad para decidir.',
    items: [
      { t: 'Visibilidad', d: 'Entiendes mejor dónde está tu empresa y qué está ocurriendo realmente.' },
      { t: 'Control', d: 'Detectas desviaciones y problemas antes de que se conviertan en problemas mayores.' },
      { t: 'Previsión', d: 'Puedes anticipar necesidades de caja, inversiones y diferentes escenarios.' },
      { t: 'Criterio', d: 'Tienes una visión financiera independiente con la que contrastar decisiones.' },
      { t: 'Estructura', d: 'Implantas procesos y herramientas que permiten gestionar mejor el crecimiento.' },
      { t: 'Tranquilidad', d: 'Sabes que las decisiones financieras importantes se toman con información fiable y analizada.' }
    ]
  },
  advisor: {
    title: 'No soy tu asesoría.',
    sub: 'Y tampoco pretendo sustituirla.',
    p1: 'Trabajo junto a la dirección, la asesoría y el equipo contable de la empresa, porque cada función tiene un papel diferente.',
    roles: ['La asesoría aporta conocimiento contable y fiscal.', 'El equipo interno conoce el día a día.', 'La dirección toma las decisiones.'],
    p2: 'Mi función es conectar esas piezas desde una visión financiera global, lo que me permite ofrecer a la dirección una visión numérica que pueda contrastar con su percepción del día a día de la empresa. Todo, dentro del contexto de la empresa, con un profundo análisis de las cifras (por departamentos, por cuentas contables, por centros de coste…), y con las máximas aportaciones que puedan ayudar a mejorar los resultados.',
    tableTitle: 'Diferencia frente a una asesoría',
    head: ['Asesoría', 'Director financiero externo'],
    rows: [['Registra información', 'Interpreta información'], ['Cumple obligaciones', 'Ayuda a decidir'], ['Mira el pasado', 'Mira el futuro'], ['Fiscal y contable', 'Estratégico y financiero']]
  },
  about: {
    title: 'Experiencia financiera al lado de quien toma las decisiones.',
    role: 'Director financiero externo · Fractional CFO',
    p1: 'No entiendo la dirección financiera como una función aislada del negocio.',
    p2: 'Los números tienen sentido cuando ayudan a comprender la empresa y a tomar mejores decisiones.',
    valuesLead: 'Mi forma de trabajar combina:',
    values: [
      { t: 'Visión financiera', d: 'Para entender la realidad económica y financiera del negocio.' },
      { t: 'Visión empresarial', d: 'Para conectar los números con la estrategia y las operaciones.' },
      { t: 'Rigor', d: 'Para trabajar con información fiable y análisis sólidos.' },
      { t: 'Proximidad', d: 'Para trabajar directamente con dirección y propiedad.' },
      { t: 'Independencia', d: 'Para aportar una visión externa y cuestionar supuestos cuando sea necesario.' },
      { t: 'Orientación a la acción', d: 'Porque un análisis solo tiene valor cuando ayuda a decidir y actuar.' }
    ],
    close: 'Mi objetivo no es elaborar informes. Es ayudarte a entender qué dicen los números y qué puedes hacer con ellos.'
  },
  measure: {
    title: 'Una función financiera a tu medida',
    lead: 'No necesitas incorporar un puesto. Necesitas incorporar capacidad.',
    p1: 'Un director financiero interno implica una estructura permanente. La dirección financiera externa permite acceder a experiencia y criterio financiero cuando realmente lo necesitas.',
    p2: 'Sin sobredimensionar la estructura. Sin asumir necesariamente el coste de una posición a tiempo completo. Sin perder flexibilidad.',
    close: 'Tú aportas el negocio. Yo aporto la visión financiera. Juntos convertimos la información en decisiones.'
  },
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      { q: '¿Es lo mismo que contratar un CFO?', a: 'No exactamente. Un Fractional CFO o director financiero externo asume funciones propias de dirección financiera con una dedicación adaptada a las necesidades de la empresa, sin necesidad de incorporar la posición a tiempo completo.' },
      { q: '¿Cuántas horas necesitará mi empresa?', a: 'No existe una dedicación estándar. Dependerá de la situación, complejidad y objetivos de tu empresa. Primero analizamos qué necesitas y después definimos el nivel de dedicación adecuado.' },
      { q: '¿Trabajarás con nuestro equipo contable?', a: 'Sí. La dirección financiera puede trabajar conjuntamente con la asesoría, el responsable de administración o el equipo contable interno. La finalidad es que la información financiera sea fiable, oportuna y útil para la gestión.' },
      { q: '¿Es un servicio solo para empresas grandes?', a: 'No. Está especialmente pensado para empresas que han alcanzado un nivel de complejidad en el que necesitan una función financiera más avanzada, aunque todavía no tenga sentido incorporar un CFO a tiempo completo.' },
      { q: '¿Puedes ayudarnos si tenemos problemas de tesorería?', a: 'Sí. Podemos analizar la situación de caja, identificar necesidades de liquidez y construir previsiones que permitan anticipar diferentes escenarios.' },
      { q: '¿Puedes preparar un presupuesto y un plan financiero?', a: 'Sí. Podemos desarrollar presupuestos, forecasts, modelos financieros y escenarios adaptados a las necesidades de la empresa.' },
      { q: '¿Puedes ayudarnos a buscar financiación?', a: 'Puedo ayudarte a preparar la información financiera, modelos, previsiones y planes necesarios para abordar conversaciones con bancos, inversores, socios u otras fuentes de financiación.' },
      { q: '¿Podemos empezar con un proyecto concreto?', a: 'Sí. No es necesario comenzar con un servicio recurrente. Podemos empezar por una necesidad concreta, analizar el resultado y, a partir de ahí, valorar si tiene sentido continuar con un acompañamiento financiero.' }
    ]
  },
  contact: {
    title: '¿Hablamos de tu empresa?',
    lead1: 'Los números de tu empresa ya están hablando. La cuestión es si tienes tiempo para escucharlos.',
    lead2: 'Cuéntame brevemente en qué momento se encuentra tu empresa y cuál es el principal reto financiero que tienes actualmente. En una primera conversación analizaremos la situación y veremos si la dirección financiera externa puede aportar valor.',
    nocommit: 'Sin compromiso.',
    emailLabel: 'Email',
    form: {
      title: 'Cuéntame tu caso', sub: 'Te respondo personalmente y sin compromiso.',
      name: 'Nombre y apellidos', company: 'Empresa', email: 'Email', phone: 'Teléfono', msg: '¿Cuál es el principal reto financiero actual?',
      consent: 'Acepto que se traten mis datos para contactarme, según la <a href="{privacy}" target="_blank" rel="noopener">política de privacidad</a>.',
      submit: 'Hablemos de mi empresa', sending: 'Enviando…',
      ok: '¡Gracias! He recibido tu mensaje y te responderé muy pronto.',
      err: 'Ha habido un problema al enviar. Inténtalo de nuevo o escríbeme por email.',
      subject: 'Nueva solicitud web · Diq Solucions (.cat)'
    }
  },
  band: {
    title: 'Más visión. Más control. Más previsión. Mejores decisiones.',
    chain: 'Datos → Información → Criterio → Decisión',
    p: 'Dirección financiera experta, independiente y flexible para empresas que han llegado al momento en el que necesitan algo más que contabilidad.'
  },
  footer: { text: 'Dirección financiera externa · © 2026 Diq Solucions', privacy: 'Política de privacidad', logoAlt: 'Diq Solucions · Director financiero externo' },
  privacy: {
    file: 'privacidad.html', title: 'Política de privacidad', updated: 'Última actualización: octubre de 2026', back: '← Volver a la web',
    sections: [
      { h: '1. Quién es el responsable del tratamiento', p: ['El responsable del tratamiento de los datos personales recogidos a través de este sitio web (diqsolucions.cat) es <strong>Diq Solucions</strong>, con correo de contacto <a href="mailto:{email}">{email}</a>.', 'NIF: <span class="fill">a completar</span> · Domicilio fiscal: <span class="fill">a completar</span>'] },
      { h: '2. Qué datos recogemos', p: ['Únicamente recogemos los datos que nos facilitas voluntariamente a través del formulario de contacto del sitio web:'], ul: ['Nombre y apellidos', 'Empresa (opcional)', 'Dirección de correo electrónico', 'Teléfono (opcional)', 'El contenido del mensaje que nos escribas'], after: ['Este sitio no utiliza cookies de seguimiento ni analítica de terceros.'] },
      { h: '3. Con qué finalidad tratamos tus datos', p: ['Utilizamos los datos que nos envías exclusivamente para responder a tu solicitud de contacto. No los usamos con fines comerciales distintos ni los cedemos a terceros para marketing.'] },
      { h: '4. Legitimación', p: ['La base legal para el tratamiento es tu consentimiento expreso, otorgado al marcar la casilla de consentimiento y enviar el formulario de contacto.'] },
      { h: '5. Con quién compartimos los datos', p: ['El formulario de contacto se gestiona a través del proveedor <a href="https://web3forms.com" target="_blank" rel="noopener">Web3Forms</a>, que actúa como encargado del tratamiento: recibe los datos del formulario únicamente para reenviarlos por correo electrónico y no los utiliza para ninguna otra finalidad. No compartimos tus datos con ningún otro tercero.'] },
      { h: '6. Durante cuánto tiempo conservamos los datos', p: ['Conservamos los datos de contacto durante el tiempo necesario para gestionar tu solicitud y, en su caso, mantener la relación comercial derivada, y en todo caso durante los plazos legalmente exigibles.'] },
      { h: '7. Tus derechos', p: ['Puedes ejercer en cualquier momento tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad de los datos, escribiendo a <a href="mailto:{email}">{email}</a>. También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (aepd.es) o la Autoridad Catalana de Protección de Datos (apdcat.cat) si consideras que el tratamiento no se ajusta a la normativa.'] }
    ]
  }
},

en: {
  lang: 'en', htmlLang: 'en', dir: 'en/', label: 'EN',
  meta: {
    title: 'Diq Solucions · External CFO (Fractional CFO)',
    description: 'External financial leadership for growing companies: financial control, forecasting, cash management, decisions and funding. No fixed structure.',
    locale: 'en_GB'
  },
  nav: { cta: 'Let\'s talk about your company' },
  hero: {
    h1a: 'Your company doesn\'t need more numbers.',
    h1b: 'It needs to understand them.',
    lead: 'Expert financial leadership for business owners who need more control, better forecasting and better decisions.',
    points: 'One person responsible · Tailored commitment · No obligation',
    cta: 'Let\'s talk about your company',
    cta2: 'See how I work',
    alt: 'Hands working on a laptop in front of a screen with financial charts'
  },
  intro: {
    lines: ['More sales.', 'More people.', 'More investment.', 'More costs.', 'More funding.', 'More risk.'],
    lead: 'When a company grows, the complexity of its decisions grows too. And a moment comes when knowing how much you have invoiced is no longer enough.',
    p1: 'You need to know where you make money, how much you need to keep growing, what may happen over the coming months and which decisions you can take today.',
    p2: 'That is where I come in.',
    p3: 'External financial leadership, adapted to your company and to the stage it is at.'
  },
  problem: {
    title: 'Is your company growing… but your financial information isn\'t keeping pace?',
    intro: 'This may sound familiar:',
    items: [
      'You invoice more, but you are not sure you really earn more.',
      'The profit and loss account arrives when decisions have already been made.',
      'Cash worries you even though the company is profitable.',
      'You can\'t say precisely how your cash will evolve over the next 3, 6 or 12 months.',
      'You have bookkeeping, but you lack an overall financial view.',
      'You want to invest, hire or open a new line and you need to know whether you can afford it.',
      'Banks or investors ask for financial information you haven\'t prepared.',
      'Growth is creating a complexity you can no longer manage from day-to-day operations alone.',
      'You have an accounting team or an advisory firm, but you need someone who sits down with management and talks business.'
    ],
    out1: 'If you are at this point, you probably don\'t need more information.',
    out2: 'You need to turn the information you already have into judgement to decide.'
  },
  numbers: {
    title: 'From numbers to decisions',
    lead: 'Accounting explains what has happened. Financial leadership helps you decide what to do next.',
    p: 'Accounting is essential. But recording, closing and presenting financial information is not the same as managing a company financially.',
    accLabel: 'Accounting', accQ: 'What has happened?',
    accText: 'It records, classifies and explains the company\'s economic reality.',
    dirLabel: 'Financial leadership',
    dirQ: ['What is happening?', 'What may happen?', 'What alternatives do we have?', 'Which decision makes the most sense?'],
    close1: 'My job is to connect the numbers with the business.',
    close2: 'To turn data into information. Information into judgement. And judgement into decisions.',
    chain: ['Data', 'Information', 'Judgement', 'Decision']
  },
  when: {
    title: 'A finance director when you need one',
    lead: 'The experience of a CFO, without necessarily taking on a full-time structure.',
    p1: 'Not every company needs an in-house finance director five days a week. But many companies reach a point where they do need that experience, vision and analytical capacity.',
    p2: 'External financial leadership lets you bring in that function flexibly, in proportion to the company\'s real needs.',
    p3: 'It can be to solve a specific problem. To support a growth phase. To professionalise financial management. Or to have someone on a recurring basis beside management helping to make better decisions.',
    tag: ['More financial experience.', 'Less fixed structure.', 'More ability to decide.']
  },
  help: {
    id: 'help',
    title: 'How can I help you?',
    items: [
      { label: 'Know where you stand', title: 'Financial control and reporting',
        intro: 'It is not about producing more reports. It is about knowing what information you need to steer better.',
        bullets: ['Sales and margin trends.', 'Profitability by product, service, customer or business unit.', 'Cost trends.', 'Variances against budget.', 'Key financial indicators.', 'Economic and financial position.'],
        close: 'Clear information to know what is really going on.' },
      { label: 'Know where you are heading', title: 'Financial planning and forecasting',
        intro: 'Running a company looking only in the rear-view mirror limits your decisions.',
        bullets: ['Annual budgets.', 'Forecasts and projections.', 'Financial models.', 'Scenario analysis.', 'Sales, cost and results forecasts.', 'Variance analysis.', 'Financial planning.'],
        close: 'Because a good decision starts long before it is taken.' },
      { label: 'Know how much cash you need', title: 'Treasury and cash flow',
        intro: 'A company can be profitable and still have cash problems.',
        bullets: ['Cash forecasts.', 'Cash flow.', 'Control of collections and payments.', 'Working capital needs.', 'Liquidity planning.', 'Funding needs.'],
        close: 'The question is not only how much you earn. It is how much cash you will have when you need it.' },
      { label: 'Know which decision to take', title: 'Finance in the service of business decisions',
        intro: 'Some decisions can change a company\'s course. A new investment. A hire. A price change. A new line of business. An acquisition. An outsourcing.',
        bullets: ['Assess the alternatives economically before deciding.', 'Put the numbers on the table to compare different scenarios.'],
        close: 'Not to tell you which decision to take. But so that you can take it with better information.' },
      { label: 'Secure the resources to grow', title: 'Funding and relations with banks and investors',
        intro: 'When a company looks for funding, it needs much more than a profit and loss account. It needs to explain its business, its forecasts and its capacity to generate resources.',
        bullets: ['Financial models.', 'Business plans.', 'Forecasts.', 'Financial information.', 'Presentations for financial institutions.', 'Information for partners and investors.', 'Funding needs analysis.'],
        close: 'Financial information is also a negotiating tool.' }
    ]
  },
  situations: {
    title: 'When it makes sense to bring in financial leadership',
    lead: 'Perhaps you don\'t need a full-time CFO. But you may already need to think like a company that has one.',
    items: [
      { t: 'It is growing', d: 'Volume and complexity are increasing and you need more control.' },
      { t: 'It is losing visibility', d: 'Results arrive, but you can\'t anticipate what is coming.' },
      { t: 'It has cash problems', d: 'You need to know when a liquidity need may appear and how to get ahead of it.' },
      { t: 'It is making important decisions', d: 'You want to assess investments, hiring, pricing, expansion or new projects with data.' },
      { t: 'It is looking for funding', d: 'You need to prepare solid models, forecasts and financial arguments.' },
      { t: 'It is professionalising its management', d: 'The company has reached a level of complexity that calls for more advanced financial systems and processes.' },
      { t: 'It has accounting, but no financial leadership', d: 'The information exists, but someone is missing to interpret it and turn it into decisions.' }
    ]
  },
  fit: {
    title: 'Not every company needs the same',
    lead: 'That is why financial leadership must adapt to your company.',
    p: 'I don\'t work with closed packages or a standard commitment. First I understand your business, your goals and your main challenges. Then we define what you really need.',
    modes: [
      { t: 'Project', d: 'To solve a specific financial need.' },
      { t: 'Ongoing support', d: 'To have financial leadership on a recurring basis.' },
      { t: 'Transformation', d: 'To professionalise financial management processes, tools and systems.' }
    ],
    dedTitle: 'The commitment can be adapted to the company\'s situation:',
    ded: ['One-off interventions', 'Specific projects', 'Recurring support', 'Support for management', 'Growth or change phases'],
    close: 'You decide how much support your company needs.'
  },
  how: {
    id: 'how',
    title: 'How I work',
    lead: 'First we understand. Then we decide. Finally we act.',
    steps: [
      { t: 'Diagnosis', d: 'We analyse the current situation. Business, structure, financial information, processes, cash, reporting and main challenges.' },
      { t: 'Priorities', d: 'We identify what needs immediate attention and where we can have the greatest impact.' },
      { t: 'Plan', d: 'We define the tools, processes, indicators and actions needed.' },
      { t: 'Implementation', d: 'We work with management and the team to put decisions into practice.' },
      { t: 'Follow-up', d: 'We measure progress, analyse results and adapt the approach to the company\'s new needs.' }
    ],
    close1: 'It is not about handing over a report and disappearing.',
    close2: 'It is about supporting management.'
  },
  change: {
    title: 'What changes when you have financial leadership?',
    lead: 'More control. More visibility. More ability to decide.',
    items: [
      { t: 'Visibility', d: 'You understand better where your company stands and what is really happening.' },
      { t: 'Control', d: 'You detect variances and problems before they become bigger problems.' },
      { t: 'Foresight', d: 'You can anticipate cash needs, investments and different scenarios.' },
      { t: 'Judgement', d: 'You have an independent financial view against which to test decisions.' },
      { t: 'Structure', d: 'You put in place processes and tools that let you manage growth better.' },
      { t: 'Peace of mind', d: 'You know that important financial decisions are taken with reliable, analysed information.' }
    ]
  },
  advisor: {
    title: 'I am not your accountancy firm.',
    sub: 'And I don\'t intend to replace it.',
    p1: 'I work alongside management, the advisory firm and the company\'s accounting team, because each function has a different role.',
    roles: ['The advisory firm provides accounting and tax knowledge.', 'The internal team knows the day-to-day.', 'Management makes the decisions.'],
    p2: 'My role is to connect those pieces from an overall financial view, which lets me give management a numerical picture they can set against their own sense of the company\'s day-to-day. Always within the company\'s context, with a thorough analysis of the figures (by department, by ledger account, by cost centre…), and with the greatest contribution I can make to improve results.',
    tableTitle: 'Difference from an accountancy firm',
    head: ['Accountancy firm', 'External CFO'],
    rows: [['Records information', 'Interprets information'], ['Meets obligations', 'Helps you decide'], ['Looks at the past', 'Looks at the future'], ['Tax and accounting', 'Strategic and financial']]
  },
  about: {
    title: 'Financial experience beside the people who make the decisions.',
    role: 'External CFO · Fractional CFO',
    p1: 'I don\'t see financial leadership as a function isolated from the business.',
    p2: 'Numbers make sense when they help you understand the company and make better decisions.',
    valuesLead: 'My way of working combines:',
    values: [
      { t: 'Financial vision', d: 'To understand the economic and financial reality of the business.' },
      { t: 'Business vision', d: 'To connect the numbers with strategy and operations.' },
      { t: 'Rigour', d: 'To work with reliable information and sound analysis.' },
      { t: 'Proximity', d: 'To work directly with management and owners.' },
      { t: 'Independence', d: 'To bring an outside view and question assumptions when needed.' },
      { t: 'Action orientation', d: 'Because an analysis only has value when it helps you decide and act.' }
    ],
    close: 'My goal is not to write reports. It is to help you understand what the numbers say and what you can do with them.'
  },
  measure: {
    title: 'A financial function made to measure',
    lead: 'You don\'t need to add a position. You need to add capacity.',
    p1: 'An in-house finance director means a permanent structure. External financial leadership gives you access to financial experience and judgement when you really need it.',
    p2: 'Without oversizing the structure. Without necessarily taking on the cost of a full-time position. Without losing flexibility.',
    close: 'You bring the business. I bring the financial vision. Together we turn information into decisions.'
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      { q: 'Is it the same as hiring a CFO?', a: 'Not exactly. A Fractional CFO or external finance director takes on the functions of financial leadership with a commitment adapted to the company\'s needs, without having to add a full-time position.' },
      { q: 'How many hours will my company need?', a: 'There is no standard commitment. It depends on your company\'s situation, complexity and goals. First we analyse what you need and then we define the right level of commitment.' },
      { q: 'Will you work with our accounting team?', a: 'Yes. Financial leadership can work together with the advisory firm, the head of administration or the internal accounting team. The aim is for financial information to be reliable, timely and useful for management.' },
      { q: 'Is it a service only for large companies?', a: 'No. It is especially designed for companies that have reached a level of complexity where they need a more advanced financial function, even though it doesn\'t yet make sense to add a full-time CFO.' },
      { q: 'Can you help if we have cash problems?', a: 'Yes. We can analyse the cash position, identify liquidity needs and build forecasts that let you anticipate different scenarios.' },
      { q: 'Can you prepare a budget and a financial plan?', a: 'Yes. We can develop budgets, forecasts, financial models and scenarios adapted to the company\'s needs.' },
      { q: 'Can you help us find funding?', a: 'I can help you prepare the financial information, models, forecasts and plans needed for conversations with banks, investors, partners or other sources of funding.' },
      { q: 'Can we start with a specific project?', a: 'Yes. You don\'t have to begin with a recurring service. We can start with one specific need, review the result and, from there, decide whether it makes sense to continue with ongoing financial support.' }
    ]
  },
  contact: {
    title: 'Shall we talk about your company?',
    lead1: 'Your company\'s numbers are already talking. The question is whether you have time to listen.',
    lead2: 'Tell me briefly what stage your company is at and what the main financial challenge is right now. In a first conversation we will look at the situation and see whether external financial leadership can add value.',
    nocommit: 'No obligation.',
    emailLabel: 'Email',
    form: {
      title: 'Tell me about your case', sub: 'I reply personally and with no obligation.',
      name: 'Full name', company: 'Company', email: 'Email', phone: 'Phone', msg: 'What is your main financial challenge right now?',
      consent: 'I agree to my data being processed so you can contact me, per the <a href="{privacy}" target="_blank" rel="noopener">privacy policy</a>.',
      submit: 'Let\'s talk about my company', sending: 'Sending…',
      ok: 'Thank you! I have received your message and will reply very soon.',
      err: 'Something went wrong. Please try again or email me directly.',
      subject: 'New web request · Diq Solucions (.cat)'
    }
  },
  band: {
    title: 'More vision. More control. Better forecasting. Better decisions.',
    chain: 'Data → Information → Judgement → Decision',
    p: 'Expert, independent and flexible financial leadership for companies that have reached the point where they need more than bookkeeping.'
  },
  footer: { text: 'External financial leadership · © 2026 Diq Solucions', privacy: 'Privacy policy', logoAlt: 'Diq Solucions · External CFO' },
  privacy: {
    file: 'privacy.html', title: 'Privacy policy', updated: 'Last updated: October 2026', back: '← Back to the website',
    sections: [
      { h: '1. Who is the data controller', p: ['The controller of the personal data collected through this website (diqsolucions.cat) is <strong>Diq Solucions</strong>, contactable at <a href="mailto:{email}">{email}</a>.', 'Tax ID: <span class="fill">to be completed</span> · Registered address: <span class="fill">to be completed</span>'] },
      { h: '2. What data we collect', p: ['We only collect the data you provide voluntarily through the website contact form:'], ul: ['Full name', 'Company (optional)', 'Email address', 'Phone (optional)', 'The content of the message you write to us'], after: ['This website does not use tracking cookies or third-party analytics.'] },
      { h: '3. Why we process your data', p: ['We use the data you send us exclusively to answer your contact request. We do not use it for other commercial purposes and we do not pass it to third parties for marketing.'] },
      { h: '4. Legal basis', p: ['The legal basis for processing is your explicit consent, given by ticking the consent box and submitting the contact form.'] },
      { h: '5. Who we share data with', p: ['The contact form is handled through the provider <a href="https://web3forms.com" target="_blank" rel="noopener">Web3Forms</a>, which acts as data processor: it receives the form data only to forward it by email and does not use it for any other purpose. We do not share your data with any other third party.'] },
      { h: '6. How long we keep the data', p: ['We keep contact data for as long as needed to handle your request and, where applicable, maintain the resulting business relationship, and in any case for the legally required periods.'] },
      { h: '7. Your rights', p: ['You may exercise your rights of access, rectification, erasure, objection, restriction of processing and data portability at any time by writing to <a href="mailto:{email}">{email}</a>. You also have the right to lodge a complaint with the Spanish Data Protection Agency (aepd.es) or the Catalan Data Protection Authority (apdcat.cat) if you believe the processing does not comply with the regulations.'] }
    ]
  }
}
};
