function getIsoDate(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const parts = [year, month, day];
    const isoDate = parts.join("-");
    return isoDate;
}

//Function to deliver the date from the previous week in ISO 8601 format
export function getLastWeekDateStr() {

    //Declares a new date and offsets it 7 days in the past
    const date: Date = new Date();
    date.setDate(date.getDate() - 7);

    //Converts the date into the yyyy-mm-dd format and returns the string
    const dateStr = getIsoDate(date);
    return dateStr;

}