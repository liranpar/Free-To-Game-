function store(key, value) {
  localStorage[key] = JSON.stringify(value);
}

function load(key, defaultValue = null) {
  const value = localStorage[key] || defaultValue;
  return JSON.parse(value);
}

function getById(key, valueId) {
  const data = JSON.parse(localStorage[key]);
  const value = data.find((val) => val.id === +valueId);
  return value;
}

function save(key, value) {
  return value.id || value._id ? _update(key, value) : _add(key, value);
}

function _update(key, value) {
  const data = JSON.parse(localStorage[key]);

  console.log(data);

  store(
    key,
    data.map((val) => (val.id === +value.id ? value : val))
  );
  console.log(
    data.map((val) =>
      val.id === value.id || val._id === value._id ? value : val
    )
  );
  return value;
}

function _add(key, value) {
  const data = JSON.parse(localStorage[key]);
  data.push(value);
  store(key, data);
  return value;
}

export const storageService = {
  store,
  load,
  getById,
  save,
};
