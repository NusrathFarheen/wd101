function todaysEntries(entries) {
  const today = new Date().toISOString().split('T')[0];
  const filteredEntries = entries.filter(entry => entry.date.startsWith(today));
  const names = filteredEntries.map(entry => entry.name);
  return names.join(',');
}

module.exports = todaysEntries;
