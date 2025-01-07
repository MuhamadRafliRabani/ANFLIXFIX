export function formatDate(dateString) {
  const date = new Date(dateString);

  const year = date.getFullYear();

  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const month = monthNames[date.getMonth()];

  const day = String(date.getDate()).padStart(2, "0");

  return `${year} ${month} ${day}`;
}
