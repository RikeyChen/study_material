const subsets = (array) => {
  if (array.length === 0) return [[]];
  const last = array[array.length - 1];
  const subs = subsets(array.slice(0, array.length - 1));
  return subs.concat(subs.map(sub => sub.concat([last])));
};
