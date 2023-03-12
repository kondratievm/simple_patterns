const md = (function () {
  const data = { filed: null };

  return {
    setDataField(value) {
      data.filed = value;
    },
    getDataField() {
      return data.filed;
    },
  };
})();

const { setDataField, getDataField } = md;

setDataField("Test");

console.log(getDataField());
