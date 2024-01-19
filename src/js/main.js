
import Handlebars from './template.handlebars'; 
import templateSource from './template.handlebars'; 
const template = Handlebars.template(templateSource);

const users = [
  { id: 1, name: 'John Doe',  },
  { id: 2, name: 'Jane Smith',  },
  { id: 3, name: 'Bob Johnson',},
  
];

const appContainer = document.getElementById('app');


function renderUsers(data) {
  appContainer.innerHTML = '';

  data.forEach((user) => {
    const userContainer = document.createElement('div');
    userContainer.innerHTML = template(user);
    appContainer.appendChild(userContainer);
  });
  console.log(123);
}


renderUsers(users);


function filterUsersByName(name) {
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(name.toLowerCase())
  );
  renderUsers(filteredUsers);
}


const filterInput = document.getElementById('filterInput');
filterInput.addEventListener('input', (event) => {
  filterUsersByName(event.target.value);
});
function editUser(userId) {
  const editedUser = users.find((user) => user.id === userId);
  if (editedUser) {
    const newName = prompt('Enter the new name:', editedUser.name);
    const newEmail = prompt('Enter the new email:', editedUser.email);

    if (newName !== null && newEmail !== null) {
      editedUser.name = newName;
      editedUser.email = newEmail;
      renderUsers(users);
    }
  }
}


function deleteUser(userId) {
  const confirmed = confirm('delete thi user?');
  if (confirmed) {
    const index = users.findIndex((user) => user.id === userId);
    if (index !== -1) {
      users.splice(index, 1);
      renderUsers(users);
    }
  }
}