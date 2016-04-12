export const getPersonName = person => `${person.firstName} ${person.lastName}`;

export const findItem = (id, items) => {
  const matches = items.filter(item => id === item.id);
  if (matches.length > 0) {
    return matches[0];
  }
  return null;
};
