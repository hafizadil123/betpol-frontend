export const isContestClosed = (contestDate, todayDate) => {
 const mapContestDate = new Date(contestDate);
 if(todayDate > mapContestDate) {
     return true;
 }
 return false;
}