const users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' },
    { id: 105, name: 'Lorand', age: 28, group: 'admin' }
  ];

  // sortare dupa nume
  // sortare descrescator dupa varsta
  // sortare dupa nume si descrescator  dupa varsta
  // returnare array cu toti userii cu seunt editori
  // filtrare toti care sunt editori si au peste 25 de ani


  // sortare dupa nume
  //1.

  // users.sort(function(a,b) {
  //   var nameA = a.name;
  //   var nameB = b.name;
  //   if(nameA < nameB) {
  //       return -1;
  //   }
  //   if (nameA > nameB) {
  //       return 1;
  //   }
  //   return 0;
  // });

  // console.log(users);

  //2.

  // users.sort(function(a,b) {
  //   var nameA = a.name;
  //   var nameB = b.name;
  //   return nameA < nameB ? -1 : nameA > nameB ? 1 : 0 ;
  // });

  // console.log(users);

  // sortare descrescator dupa varsta

  //1.
  //   users.sort(function(a,b) {
  //   var ageA = a.age;
  //   var ageB = b.age;
  //   if(ageA < ageB) {
  //       return 1;
  //   }
  //   if (ageA > ageB) {
  //       return -1;
  //   }
  //   return 0;
  // });

  // console.log(users);

  // sortare dupa nume si descrescator  dupa varsta

  users.sort(function(a,b) {
      if(a.age < b.age) {
          return -1;
      }
      if (a.age > b.age ) {
          return 1;
      }
      if(a.age == b.age) {
        if(a.name < b.name) {
          return -1;
        }
        if(a.name > b.name) {
          return 1;
        }
          
      }
      return 0;
    });
  
    console.log(users);

  //returnare array cu toti userii cu seunt editori

  // const result = users.filter(u => u.group === "editor"
  // );

  // sau
  // const result = users.filter(u => u.group === "editor" ? true : false
  // )
  // console.log(result);

  // filtrare toti care sunt editori si au peste 25 de ani

  // const result = users.filter(u => u.group === "editor" && u.age > 25 ? true : false)

  // console.log(result);

  // scoate id si group din array si schimba age => varsta si name => nume folosind map

  // const users2 = users.map(u => {
  //  return { 
  //   nume : u.name,
  //   varsta : u.age,
  //   minor : u.age < 18
  // }
  // });

  // console.log(users2)

  const users3 = users.map(u => {
    return {
      firstName : u.name.length < 2 ? u.name : u.name.substring(0, 2),
      lastName : u.name.length > 2 ? u.name.substring(u.name.length -2) : u.name
    }
  });

  console.log(users3)
  
  

  