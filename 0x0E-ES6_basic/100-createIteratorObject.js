/* eslint-disable no-plusplus */
export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees).reduce((a, b) => {
    a.push(...b);
    return a;
  }, []);
  let nextIndex = 0;
  return {
    next() {
      return nextIndex < employees.length
        ? { value: employees[nextIndex++], done: false }
        : { done: true };
    },
  };
}
