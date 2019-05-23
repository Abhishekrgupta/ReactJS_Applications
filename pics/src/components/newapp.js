import { getData } from "../api/http";
const loadData = () => {
  return getData().then(data => {
    const title = data.title;
    const transTitle = title.toUpperCase();
    return transTitle;
  });
};

const printTitle = () => {
  loadData().then(title => {
    console.log(title);
    return title;
  });
};

exports.printTitle = printTitle;
exports.loadData = loadData;
