/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {
  monday = "work",
  tuesday = "work",
  wednesday = "work",
  thursday = "work",
  friday = "work",
  saturday = "weekend",
  sunday = "weekend",
}

function isWeekend(day: DayOfWeek): boolean {
  if (day === "work") {
    return true;
  }

  return false;
}

const day = isWeekend(DayOfWeek.friday);
