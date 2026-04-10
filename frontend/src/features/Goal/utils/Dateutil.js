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
  const end = new Date(targetDate);
  const diff = end - start;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}