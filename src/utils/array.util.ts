export function mergeAndMaintainRelativeOrder(arrays: string[][]): string[] {
  const result: string[] = [];
  arrays.forEach(array => {
    array.forEach((item, idx) => {
      // check if the item has already been added, if not, try to add
      if (!~result.indexOf(item)) {
        // if item is not first item, find position of his left sibling in result array
        if (idx > 0) {
          const result_idx = result.indexOf(array[idx - 1]);
          // add item after left sibling position
          result.splice(result_idx + 1, 0, item);
          return;
        }
        result.push(item);
      }
    });
  });
  return result
}

