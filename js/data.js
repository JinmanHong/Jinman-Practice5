/*
mouse,0
cow,1
tiger,2
rabbit,3
dragon,4
snake,5
horse,6
sheep,7
monkey,8
chick,9
dog,10
pig,11
*/

const qnaList = [
  {
    q: '1. Czy między płcią przeciwną jest przyjaciel?',
    a: [
      { answer: 'a. Nigdy nie ma przyjaźni między mężczyzną a kobietą.', type: [1, 2, 4, 9] },
      { answer: 'b. Mam przyjaciela, po prostu nigdy nie wyglądasz jak płeć przeciwna', type: [0, 3, 6, 5, 10, 8] },
      { answer: 'c. Nie wiem..', type: [7, 11 ] },
    ]
  },
  {
    q: '2. zakochałem się chcę się skontaktować ',
    a: [
      { answer: 'a. Skontaktuj się z nami od razu.', type: [0, 3, 2, 8] },
      { answer: 'b. Zastanów się dokładnie, kiedy się skontaktować i jak mówić.', type: [1, 6, 5, 10] },
      { answer: 'c. Poczekaj, aż druga strona się z Tobą skontaktuje.', type: [7, 4, 9, 11] },
    ]
  },
  {
    q: '3. Jaki jest Twój styl spowiedzi?',
    a: [
      { answer: 'a. Jeśli go kocham, od razu to wyrażam', type: [1, 3, 2, 10, 8] },
      { answer: 'b. Poczekaj, aż druga osoba się przyzna.', type: [7, 9, 11] },
      { answer: 'c. Spowiadaj się w doskonałej atmosferze, w idealnym momencie.', type: [0, 6, 5, 4] }
    ]
  },
  {
    q: '4. Jakie jest moje ulubione zdanie do spowiedzi?',
    a: [
      { answer: 'a. Męski styl, "Hej, umówmy się ze mną" ', type: [1, 2, 4 ] },
      { answer: 'b. Delikatny styl, bardzo Cię lubię Chcesz się ze mną umówić?" ', type: [7, 10, 8, 9, 11 ] },
      { answer: 'c. Humorystyczny styl Spotkamy się jutro jako kochankowie?" ', type: [0, 3, 6, 5 ] },
    ]
  },
  {
    q: '5. Dziś moja pierwsza randka z ukochaną. Jaki jest dopuszczalny zakres dotyku pierwszego dnia?',
    a: [
      { answer: 'a. Wstydzę się.. trzymania się za ręce??', type: [1, 7, 10, 4, 9 ] },
      { answer: 'b. Która jest teraz godzina, nawet lekki pocałunek jest możliwy', type: [0, 3, 6, 11]},
      { answer: 'c. W końcu jesteś moim kochankiem, dlaczego? Wszystkie skiny są gotowe!', type: [2, 5, 8] },
    ]
  },

  {
    q: '6. To rocznica. Co zrobisz? (stare-100, 200 dni)',
    a: [
      { answer: 'a. tak jak zwykle', type: [4, 9, 11 ] },
      { answer: 'b. Mam ci kupić pyszny ryż? A może nawet kwiaty?', type: [0, 3, 6, 10 ] },
      { answer: 'c. Przygotowałem już wszystkie wydarzenia.', type: [1, 7, 2, 5, 8 ] },
    ]
  },
  {
    q: '7. Moja ukochana ma fryzurę i nowy strój.',
    a: [
      { answer: 'a. nie zauważam, nic nie mówię', type: [1, 7, 11 ] },
      { answer: 'b. Nie zwracanie uwagi ani nie wypowiadanie się', type: [2, 4, 9 ] },
      { answer: 'c. super!!, czy zmieniłaś dzisiaj włosy i kupiłaś nowe ubrania?” mowić', type: [0, 3, 6, 5, 10, 8 ] },
    ]
  },
  {
    q: '8. Twój kochanek prosi Cię, abyś zabrał ją do domu po zakończeniu randki',
    a: [
      { answer: 'a. Wszyscy wracają do miejsca, w którym spotkali się po raz pierwszy.', type: [0, 4, 9 ] },
      { answer: 'b. Zabierze Cię na dworzec lub przystanek autobusowy w domu Twojej ukochanej.', type: [3, 2, 6, 5, 10, 8 ] },
      { answer: 'c. zabierze cię przed dom.', type: [1, 7, 11 ] },
    ]
  },
  {
    q: '9. Przez cały dzień nie słyszałem od mojego kochanka..',
    a: [
      { answer: 'a. Cóż... zadzwonię do ciebie kiedyś. czekam aż to zrobię', type: [7, 0, 5, 9 ] },
      { answer: 'b. Denerwuję się, więc odwiedzam wszystkie serwisy społecznościowe, takie jak Instagram i Facebook.', type: [1, 3, 6, 11 ] },
      { answer: 'c. Nieskończone teksty, nieskończone rozmowy, aż dotrzesz do swojego kochanka', type: [2, 10, 8, 4 ] },
    ]
  },
  {
    q: '10. Moja kochanka przychodzi do mojego domu i czeka, aż ją zobaczę bez kontaktu. ',
    a: [
      { answer: 'a. Nie, a co jeśli to nagle nadejdzie? Nawet się nie przygotowałem. Dlaczego przyszedłeś? To denerwujące', type: [4, 9, 11] },
      { answer: 'b. O tak?? Po prostu skończę kilka rzeczy, które zamierzam zrobić', type: [0, 2, 6, 5 ] },
      { answer: 'c. hej świetnie, gdzie jesteś?? Odchodzę w tym momencie!', type: [1, 7, 3, 10, 8 ] },
    ]
  },
  {
    q: '11. Jaki jest widok miłości, którego szukam? ',
    a: [
      { answer: 'a. Każdy robi swoje, a spokojny i stabilny związek jest dobry.', type: [1, 4, 9, 11 ] },
      { answer: 'b. Lubię je widzieć, kiedy za nimi tęsknię, dużo umawiać się na randki i flirtować.', type: [7, 0, 3, 6, 10] },
      { answer: 'c. Miłość jest tym, czym chcesz! Płonąca miłość jest najlepsza.', type: [2, 5, 8 ] },
    ]
  },
  {
    q: '12. Podczas randki ze swoim kochankiem walczył tak ciężko, że nie mógł znieść gniewu. Co zrobisz?',
    a: [
      { answer: 'a. "Och, jestem zły. Nie idź za mną, idę do domu dzisiaj.” Powiedział i poszedł do domu.', type: [3, 6, 4, 9 ] },
      { answer: 'b. "Hej! nie bądź zły mylisz się Co zrobiłem źle?” Krzyczy i wpada w złość do końca.', type: [0, 2, 5, 10, 8] },
      { answer: 'c. "Nie, nie to, ha…” zawołał cicho.', type: [1, 7, 11] },
    ]
  }
]

const infoList = [
  {
    name: 'Miłość to tylko przekąska, miłość jest pełna talentu <mysz>',
    desc: 'Jesteś zawodowym talentem w randkowaniu! Ty, mysz, wiesz wszystko o miłości, więc możesz łatwo odnieść sukces w randkowaniu. Można powiedzieć, że jest przede wszystkim ambitny i ma optymistyczną osobowość, jest logiczny i ma bardzo szybki mózg. Jest też dobry w rozmowie, towarzyski i wesoły, ale lubi krzykliwe rzeczy, w których emanuje próżność lub luksus, więc na te punkty trzeba uważać. Konieczna jest pokora, ponieważ często jesteśmy dumni z naszych doskonałych umiejętności!'
  },
  {
    name: 'Patrzę tylko na ciebie, szczery styl randkowy <Krowa>',
    desc: 'Ty, prawdziwy kraj miłości! Ty, krowa, jesteś słonecznikowym stylem randkowym, który patrzy tylko na drugą osobę. Jest wytrwały we wszystkim, co robi, więc ma szczere i szczere usposobienie podczas randkowania oraz ma delikatne i ciepłe serce. Gdy ci się spodoba, spodoba ci się do końca, ale masz silną samoocenę i jesteś bardzo uparty. Poza tym mam zły temperament, więc muszę uważać na te rzeczy i mam dużo zazdrości, więc miłość może przerodzić się w obsesję!'
  },
  {
    name: 'Spotkajmy się <Tygrys> by zdobyć miłość',
    desc: 'Kiedy kogoś polubisz, sprawisz, że będzie mój! Ty, tygrysie, jesteś stylem, który od razu przechodzi od kciuka do miłości. Ma tendencję do przewodzenia głównie podczas randek, ma fajną i przyjemną osobowość. Ma dużą osobowość i jest osobą interpersonalną, która toleruje błędy, ale jest podatna na pokusy i ekscytuje się próżnością. Poza tym zawsze muszę uważać na to, co mówię, ponieważ moje słowa mogą zranić drugą osobę!'
  },
  {
    name: '<Królik> z niepowtarzalnym urokiem',
    desc: 'Sprawiasz, że inni Cię zniewalają! Jest to styl, który ma tajemniczy i niepowtarzalny urok, który sprawia, że ​​zakochuje się w nim druga osoba. Rozwinął intuicję i ma doskonałą zręczność, a podczas randek prezentuje się dużo pulchnie. Jest posłuszny i optymistyczny, ale trzeba uważać, że jeśli zrobisz to źle, możesz wyglądać dla drugiej osoby jak niewinne dziecko. Ma też wiele emocjonalnych wzlotów i upadków, więc może mieć kapryśny umysł, więc jeśli zwrócisz uwagę na te aspekty, możesz mieć dobry związek.'
  },
  {
    name: 'Kiedy powinniśmy się pobrać?Gdzie jest miesiąc miodowy?, Właścicielka o idealnym spojrzeniu na miłość <smok>',
    desc: 'Marzysz o przyszłości z drugą osobą! Zamiast realistycznego związku mam idealny pogląd na miłość na przyszłość. Ponieważ każdego dnia myślę o przyszłości, którą spędzę z ukochaną osobą, mam cechy, by być dobrym panem młodym. Są również ambitni zarówno w pracy, jak i w miłości, dzięki czemu mają duże szanse na wielki sukces i są bardzo dobrzy w przywództwie. Jednak w porównaniu z wysokimi ideałami, jeśli rzeczywistość ci się nie podoba, istnieje wiele przypadków blefowania lub ignorowania ludzi.'
  },
  {
    name: 'Co robić w rocznicę, event planner <Snake>',
    desc: 'Dbasz o rocznicę drugiej imprezy i zaskakujesz ich!, masz świetny pomysł i wyjątkowy zmysł, dzięki czemu masz dużo wydarzeń na drugą imprezę. Kiedy się spotykasz, jesteś bystry i możesz zaimponować drugiej osobie, uszczęśliwiając ją każdego dnia. Ogólnie rzecz biorąc, mają wspaniały związek, ale mają wiele tajemnic i niezdecydowaną osobowość. Musisz też uważać, ponieważ masz bardzo cienkie uszy, więc możesz ufać opowieściom innych ludzi i nabierać podejrzeń wobec innych!'
  },
  {
    name: 'Oj, dzisiaj zmieniłam włosy, pasuje ci dobrze, <słowa> z dużym rozsądkiem',
    desc: 'Kiedy umawiasz się na randki, jesteś przepełniony rozsądkiem! Jest bardzo dobry w mówieniu i ma doskonałe umiejętności prowadzenia i szybko zdobywa sympatię innych. Ma optymistyczną i elastyczną osobowość i nie znosi ograniczeń. Wiedzą, jak poświęcić się dla swoich bliskich, ale często są nastawieni na grę i często padają ofiarą luksusu i próżności. Trzeba na to uważać, bo łatwo może zostać zrujnowane przez utonięcie w gorącej wodzie!'
  },
  {
    name: 'Lubię wszystko, co z tobą robię, uległa <owce>',
    desc: 'Umawiając się na randki, starasz się dopasować wszystko! Mają przyjazne uczucie i delikatny wygląd, dzięki czemu możesz czuć się komfortowo z punktu widzenia drugiej osoby. Dąż do stabilnego związku, a nie do płonącego, a w momencie, gdy otworzysz swoje serce na drugą osobę, możesz naprawdę się zakochać. Ma też silną przeżywalność i dobrą zaradność, ale z drugiej strony jest uparty, aby osiągnąć wszystko, czego chce. Ten upór może prowadzić do utraty atrakcyjności w oczach innych jako wyrachowanych ludzi!'
  },
  {
    name: 'Jestem twoją gwiazdą, utalentowanym artystą <Monkey>',
    desc: 'Zawsze dajesz szczęście, gdy jesteś zmęczony i zmęczony! Ponieważ jest naprawdę utalentowany i ma dużo talentu do mówienia, często słyszę, jak ludzie mówią, że jest pięknością we wszystkich kierunkach. Jest też wszechstronny i inteligentny, potrafi robić wszystko dobrze, ma świetne poczucie humoru i jest osobą, za którą podąża wiele osób wokół niego. Podczas randek dobrze dostosowuje nastrój drugiej osoby i utrzymuje przyjemną atmosferę, ale ma tendencję do przywiązywania wagi do własnej twarzy. Myślę, że powinieneś być trochę bardziej ostrożny, ponieważ może to prowadzić do wrażenia, że ​​jesteś przebiegły dla innych, goląc głowę!'
  },
  {
    name: 'To jest to i to, inżynier jest pewien <kurczak>',
    desc: 'Na pewno nawiążesz i zerwiesz w pogoni za zgrabnym związkiem! Mają pełen wdzięku i szlachetny wizerunek i mają tendencję do wyrażania swojego eleganckiego uroku. Ma dobrą koncentrację i pamięć, więc pamięta wszystko, co wydarzyło się z drugą osobą. Jeśli jednak wyjdziesz poza swój tok myślenia, staniesz się cyniczny, a ponieważ zazwyczaj jesteś szczery, może to sprawić wrażenie, że jest ci zimno. Ponieważ jestem wrażliwą osobą, często jestem na to wrażliwa, dlatego uważam, że lepiej zadbać o swój umysł i traktować innych trochę więcej ciepła!'
  },
  {
    name: 'Lubię cię, naprawdę cię lubię, aegyo <pies>',
    desc: 'Sam w sobie jesteś aegyo! Są dobrze zaokrąglone, mają bardzo dobre przywiązanie i towarzyskość. Jest też ciekawy, ponieważ nie może powstrzymać się od pytań i lubi trzymać się innych ludzi jak szczeniak. Ma bardzo pogodną osobowość, ale jego emocje to wzloty i upadki, więc często boli go to, co mówi druga osoba. Poza tym mam bardzo porywczy temperament, więc nie robię rzeczy spokojnie, więc myślę, że powinieneś być z tym trochę bardziej ostrożny! '
  },
  {
    name: 'Góra to góra, a miłość to miłość, zrelaksowana i delikatna <świnia>',
    desc: 'Masz elegancki i szlachetny charakter! Zachowuje się spokojnie, kiedy podejmuje decyzję, i ma łagodną osobowość, ponieważ bardzo troszczy się o innych. Ponadto jest typem, któremu można zaufać ze swoją uczciwą osobowością i ma silne poczucie odpowiedzialności za bezpieczne wykonanie każdego zadania. Ma silne realistyczne usposobienie, więc dba o prawdę, ale brakuje mu nieco wyrazistości, więc może nie być w stanie poczuć uczucia bycia kochanym. Musisz być z tym ostrożny, ponieważ jest potajemnie zazdrosny i arogancki, wystarczająco, by zemścić się na krańcach świata, jeśli ktoś go skrzywdzi!'
  },
]