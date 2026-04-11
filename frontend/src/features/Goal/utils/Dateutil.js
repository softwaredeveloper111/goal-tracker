// Input:  "2026-05-01T04:14:00.000Z"
// Output: "1 May, 2026"

export function formatDate(isoString) {
  if (!isoString) return "N/A";

  const date = new Date(isoString);

  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });
}


// Input:  "2026-05-01T04:14:00.000Z"
// Output: "1 May, 2026, 9:44 AM"

export function formatDateTime(isoString) {
  if (!isoString) return "N/A";

  const date = new Date(isoString);

  return date.toLocaleString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  });
}





export function calcTotalDays(createdAt, targetDate) {



  const start = new Date(createdAt);
  const startUTC = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate());

  const end = new Date(targetDate);
  const endUTC = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate());

  const diff = endUTC - startUTC;
  return Math.ceil(diff / (1000 * 60 * 60 * 24))+1;
}