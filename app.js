const incidents = [
  { date: "2026-07-14", title: "Fördröjda förbrukningsvärden", duration: "2 h 10 min" },
  { date: "2026-06-02", title: "Inloggning otillgänglig", duration: "35 min" },
  { date: "2026-04-27", title: "Fakturor visades inte", duration: "1 h 5 min" },
];

const renderIncidents = (list) =>
  list
    .map((i) => `<li><strong>${i.title}</strong><br>${i.date} — ${i.duration}</li>`)
    .join("");

document.querySelector("#incidents").innerHTML = renderIncidents(incidents);
