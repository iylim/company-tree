const BASE_URL = '/api'

function addEmployee(employee) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(employee)
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Email already taken!');
  })
}

export default addEmployee;