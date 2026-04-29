export function openCalendarPopup() {
  const width = 900;
  const height = 700;
  const left = Math.max(0, (window.screen.width - width) / 2);
  const top = Math.max(0, (window.screen.height - height) / 2);
  window.open(
    "https://canva.link/17rddy244ftzthp",
    "SkillSamuraiCalendar",
    `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,status=no`
  );
}
