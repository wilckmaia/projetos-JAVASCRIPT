async function feriados() {
  const response = await fetch(
    "https://date.nager.at/api/v3/PublicHolidays/2025/BR"
  );
  const dados = await response.json();
  const data = (await dados[0].date) + "  " + (await dados[0].localName);
  const data2 = (await dados[1].date) + "  " + (await dados[1].localName);
  const data3 = (await dados[2].date) + "  " + (await dados[2].localName);
  const data4 = (await dados[3].date) + "  " + (await dados[3].localName);
  const data5 = (await dados[4].date) + "  " + (await dados[4].localName);
  console.log(data, data2, data3, data4, data5);
}
feriados();
