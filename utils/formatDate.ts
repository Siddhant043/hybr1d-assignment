export default function formatDate(dateInput: Date | string): string {
  // Parse the input into a Date object if it's a string
  const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date");
  }

  const day = date.getDate();
  const month = date.getMonth() + 1; // Month is zero-based
  const year = date.getFullYear();

  // Ensure the day and month have leading zeros if needed
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  // Format the date as "dd/mm/yyyy"
  const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;

  return formattedDate;
}
