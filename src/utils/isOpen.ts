export function isOpen(startTime: string, endTime: string) {
  if (startTime) {
    const now = new Date().getHours() * 100 + new Date().getMinutes();
    const afterOpen = Number(startTime.split(":")[0]) * 100 + Number(startTime.split(":")[1]) < now;
    const beforeClose = Number(endTime.split(":")[0]) * 100 + Number(endTime.split(":")[1]) > now;
    return afterOpen && beforeClose ? true : false;
  }

  return true;
}
