
import Handlebars from 'handlebars/dist/handlebars'; 
import templateSource from '../templates/data-template.handlebars'; 
const template = Handlebars.template(templateSource);

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
  // Додайте більше користувачів за потребою
];

const appContainer = document.getElementById('app');

// Функція для відображення користувачів
function renderUsers(data) {
  appContainer.innerHTML = '';

  data.forEach((user) => {
    const userContainer = document.createElement('div');
    userContainer.innerHTML = template(user);
    appContainer.appendChild(userContainer);
  });
  console.log(123);
}

// Початкове відображення користувачів
renderUsers(users);

// Функція для фільтрації користувачів за ім'ям
function filterUsersByName(name) {
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(name.toLowerCase())
  );
  renderUsers(filteredUsers);
}

// Додавання прослуховувача подій для інпута фільтрації
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

// Функція для видалення користувача
function deleteUser(userId) {
  const confirmed = confirm('Are you sure you want to delete this user?');
  if (confirmed) {
    const index = users.findIndex((user) => user.id === userId);
    if (index !== -1) {
      users.splice(index, 1);
      renderUsers(users);
    }
  }
}