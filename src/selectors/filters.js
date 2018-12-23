export default (users, { name }) => {
  return users.filter((user) => {
    const textMatch = user.name.toLowerCase().includes(name.toLowerCase());
    return textMatch;
  })
}
