const translations = {
  sv: {
    pageTitle: "David & Laura - Förlovningsinbjudan",
    languageAria: "Byt till armeniska",
    heroEyebrow: "Förlovningsinbjudan",
    heroCopy: "En kväll för kärlek, skratt och gemenskap.",
    scrollButton: "Skrolla ner",

    storyLabel: "Inbjudan",
    storyTitle: "Med stor glädje vill vi bjuda in er till vår förlovningsfest",
    storyLead: "Från små, enkla ögonblick till att vi nu vill fira början av vårt nästa kapitel tillsammans med er.",
    storyAria: "Vår kärlekshistoria",

    detailsLabel: "Datum och tid",
    detailsTitle: "Spara datumet.",
    detailsLead: "Det viktigaste, enkelt samlat.",
    dateHeading: "Datum",
    dateValue: "Lördag 14 november 2026",
    timeHeading: "Tid",
    timeValue: "Välkommen från 16:00<br>Firande från 17:00",

    partyLabel: "Förlovning",
    partyTitle: "Tid och plats.",
    partyLead: `<a href="https://maps.app.goo.gl/JyEUKuv2pP5fgrjK8">Lokal Västberga Allé 60, 126 39 Hägersten</a> 16:00 välkomstiden, 17:00 firande.`,
    placeMini: "Marrakech Västberga",
    timeMini: "16:00 - sent",

    rsvpTitle: "Vänligen bekräfta er närvaro vid förlovningen senast den 1 oktober 2026",
    rsvpLead: "Svara gärna!",
    nameLabel: "Namn och efternamn",
    namePlaceholder: "Skriv ditt namn och efternamn",
    attendingLegend: "Kan du komma?",
    yesChoice: "Ja",
    noChoice: "Nej",
    guestLabel: "Hur många kommer?",
    submitButton: "Skicka svar",
    topButton: "Till toppen",
    footer: "Med kärlek, David & Laura",

    missingChoice: "Välj ja eller nej innan du skickar.",
    defaultName: "Tack",
    yesMessage: (name, guests) =>
      `${name}, vad fint! Vi har noterat ${guests} ${guests === "1" ? "person" : "personer"}.`,
    noMessage: (name) =>
      `${name}, tack för svaret. Vi kommer att sakna dig.`,
    sendingMessage: "Skickar svar...",
    errorMessage: "Kunde inte skicka svaret. Försök igen."
  },

  hy: {
    pageTitle: "Դավիթ և Լաուրա - Նշանադրության հրավեր",
    languageAria: "Փոխել լեզուն շվեդերենի",
    heroEyebrow: "Նշանադրության հրավեր",
    heroCopy: "Սիրով, ժպիտներով և միասին անցկացրած գեղեցիկ պահերով լի երեկո։",
    scrollButton: "Իջնել ներքև",

    storyLabel: "Հրավեր",
    storyTitle: "Մեծ ուրախությամբ հրավիրում ենք ձեզ մեր նշանադրության երեկույթին",
    storyLead: "Փոքրիկ ու պարզ պահերից մինչև այն պահը, երբ ցանկանում ենք ձեզ հետ միասին նշել մեր կյանքի հաջորդ գլխի սկիզբը։",
    storyAria: "Մեր սիրո պատմությունը",

    detailsLabel: "Ամսաթիվ և ժամ",
    detailsTitle: "Պահեք այս օրը։",
    detailsLead: "Ամենակարևոր մանրամասները՝ մեկ տեղում։",
    dateHeading: "Ամսաթիվ",
    dateValue: "Շաբաթ, 14 նոյեմբերի 2026",
    timeHeading: "Ժամ",
    timeValue: "Հյուրերի ընդունելություն՝ 16:00-ից<br>Տոնակատարություն՝ 17:00-ից",

    partyLabel: "Նշանադրություն",
    partyTitle: "Ժամանակ և վայր։",
    partyLead: `<a href="https://maps.app.goo.gl/JyEUKuv2pP5fgrjK8">Lokal Västberga Allé 60, 126 39 Hägersten</a> Հյուրերի ընդունելություն՝ 16:00-ից, տոնակատարություն՝ 17:00-ից։`,
    placeMini: "Marrakech Västberga",
    timeMini: "16:00 - ուշ",

    rsvpTitle: "Խնդրում ենք հաստատել Ձեր ներկայությունը նշանադրության միջոցառմանը մինչև 2026 թվականի հոկտեմբերի 1-ը։",
    rsvpLead: "Խնդրում ենք պատասխանել։",
    nameLabel: "Անուն և ազգանուն",
    namePlaceholder: "Գրեք ձեր անունը և ազգանունը",
    attendingLegend: "Կկարողանա՞ք գալ։",
    yesChoice: "Այո",
    noChoice: "Ոչ",
    guestLabel: "Քանի՞ հոգի է գալու։",
    submitButton: "Ուղարկել պատասխանը",
    topButton: "Վերև",
    footer: "Սիրով՝ Դավիթ և Լաուրա",

    missingChoice: "Խնդրում ենք ընտրել՝ այո կամ ոչ, նախքան ուղարկելը։",
    defaultName: "Շնորհակալություն",
    yesMessage: (name, guests) =>
      `${name}, շատ ուրախ ենք։ Գրանցել ենք ${guests} ${guests === "1" ? "հյուր" : "հյուրի"}։`,
    noMessage: (name) =>
      `${name}, շնորհակալություն պատասխանի համար։ Մենք ձեզ կկարոտենք։`,
    sendingMessage: "Ուղարկվում է պատասխանը...",
    errorMessage: "Չհաջողվեց ուղարկել պատասխանը։ Խնդրում ենք կրկին փորձել։"
  }
};




const form = document.querySelector("#rsvp-form");
const note = document.querySelector("#note");
const guestCount = document.querySelector("#guest-count");
const guestInput = document.querySelector("#guests");
const languageToggle = document.querySelector("#language-toggle");
const attendingInputs = document.querySelectorAll('input[name="attending"]');

let currentLanguage = "sv";


const revealItems = document.querySelectorAll(
  "section, .detail, .story-frame, .party-photo, form"
);

revealItems.forEach((item) => item.classList.add("reveal"));


if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}


function applyLanguage(language) {
  currentLanguage = language;

  const text = translations[language];

  document.documentElement.lang = language;
  document.title = text.pageTitle;

  languageToggle.setAttribute("aria-label", text.languageAria);
  languageToggle.dataset.nextLanguage = language === "sv" ? "hy" : "sv";


  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = text[element.dataset.i18n];
  });


  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = text[element.dataset.i18nHtml];
  });


  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = text[element.dataset.i18nPlaceholder];
  });


  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", text[element.dataset.i18nAria]);
  });


  note.textContent = "";
}


languageToggle.addEventListener("click", () => {
  applyLanguage(currentLanguage === "sv" ? "hy" : "sv");
});


attendingInputs.forEach((input) => {
  input.addEventListener("change", () => {
    const isAttending = input.value === "ja" && input.checked;

    guestCount.classList.toggle("visible", isAttending);
    guestInput.required = isAttending;
  });
});


form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const text = translations[currentLanguage];

  const name =
    String(data.get("name") || "").trim() || text.defaultName;

  const attending = data.get("attending");

  if (!attending) {
    note.textContent = text.missingChoice;
    return;
  }

  const guests = attending === "ja"
    ? String(data.get("guests") || "1")
    : "0";

  const attendingText =
    attending === "ja"
      ? text.yesChoice
      : text.noChoice;

  const formData = new FormData();

  formData.append(
    "access_key",
    "cf7919fe-7520-4b71-8f94-364d44476dec"
  );

  formData.append(
    "subject",
    `Nytt RSVP-svar - ${name}`
  );

  formData.append(
    "from_name",
    "Förlovningsinbjudan"
  );

  formData.append(
    "name",
    name
  );

  formData.append(
    "attending",
    attendingText
  );

  formData.append(
    "guests",
    guests
  );

  formData.append(
    "botcheck",
    ""
  );

  note.textContent = "Skickar svar...";

  try {
    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData
      }
    );

    const result = await response.json();

    if (result.success) {
      if (attending === "ja") {
        note.textContent = text.yesMessage(name, guests);
      } else {
        note.textContent = text.noMessage(name);
      }

      form.reset();
      guestCount.classList.remove("visible");
      guestInput.required = false;
    } else {
      note.textContent =
        "Kunde inte skicka svaret. Försök igen.";
    }
  } catch (error) {
    note.textContent =
      "Kunde inte skicka svaret. Försök igen.";
  }
});
