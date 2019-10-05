function getIsoDate(date: Date) {
    const year = date.getFullYear.toString();
    const month = date.getMonth.toString();
    const day = date.getDate.toString();
    const parts = [year, month, day];
    const isoDate = parts.join("-");
    return isoDate;
}

//Function to deliver the date from the previous week in ISO 8601 format
export function getLastWeekDateStr() {
    const today: Date = new Date();
    const lastWeek: Date = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    const dateStr = getIsoDate(lastWeek);
    return dateStr;
}