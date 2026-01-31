function login(user, password) {
  if (user == false || password == false) {
    throw new Error("Digite algo valido");
  } else if (password == undefined || user == undefined) {
    throw new Error("É preciso completar todas as necessidades");
  }
  return `${user}  ${password}`;
}
try {
  console.log(login("Jobs", "12345"));
} catch (e) {
  console.log(e.message);
} finally {
  console.log("VERIFICAÇÂO FEITA");
}
