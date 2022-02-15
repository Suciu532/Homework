{
  users = [
    {
      age: 37,
      experience: "senior",
      firstname: "Roseline",
      lastname: "Tybald",
      city: "Oranjestad",
      country: "Central African Republic",
      countryCode: "MT",
      favoriteBeer: "Tuborg",
      email: "Roseline.Tybald@gmail.com",
    },
    {
      age: 41,
      experience: "mid",
      firstname: "Sibella",
      lastname: "Zina",
      city: "Malacca Town",
      country: "France",
      countryCode: "MH",
      favoriteBeer: "Heineken",
      email: "Sibella.Zina@gmail.com",
    },
    {
      age: 33,
      experience: "senior",
      firstname: "Phylis",
      lastname: "Dituri",
      city: "Magadan",
      country: "Bosnia and Herzegovina",
      countryCode: "BY",
      favoriteBeer: "Tuborg",
      email: "Phylis.Dituri@gmail.com",
    },
    {
      age: 35,
      experience: "mid",
      firstname: "Bill",
      lastname: "Cookie",
      city: "Gaborone",
      country: "Senegal",
      countryCode: "CL",
      favoriteBeer: "Nenea Iancu",
      email: "Bill.Cookie@gmail.com",
    },
    {
      age: 49,
      experience: "senior",
      firstname: "Darci",
      lastname: "Gale",
      city: "Panama City",
      country: "Monaco",
      countryCode: "SN",
      favoriteBeer: "Tuborg",
      email: "Darci.Gale@gmail.com",
    },
    {
      age: 47,
      experience: "senior",
      firstname: "Susette",
      lastname: "Therine",
      city: "Algiers",
      country: "Faroe Islands",
      countryCode: "LC",
      favoriteBeer: "Ciucas",
      email: "Susette.Therine@gmail.com",
    },
    {
      age: 35,
      experience: "mid",
      firstname: "Carree",
      lastname: "Montgomery",
      city: "Bujumbura",
      country: "France",
      countryCode: "SJ",
      favoriteBeer: "Ciucas",
      email: "Carree.Montgomery@gmail.com",
    },
    {
      age: 46,
      experience: "junior",
      firstname: "Elbertina",
      lastname: "Georas",
      city: "Phuket (city)",
      country: "Singapore",
      countryCode: "AM",
      favoriteBeer: "Heineken",
      email: "Elbertina.Georas@gmail.com",
    },
    {
      age: 46,
      experience: "mid",
      firstname: "Tierney",
      lastname: "Elbertina",
      city: "Seattle",
      country: "Russian Federation",
      countryCode: "NI",
      favoriteBeer: "Ciucas",
      email: "Tierney.Elbertina@gmail.com",
    },
    {
      age: 28,
      experience: "junior",
      firstname: "Cam",
      lastname: "Flyn",
      city: "Guatemala City",
      country: "Mauritius",
      countryCode: "SR",
      favoriteBeer: "Nenea Iancu",
      email: "Cam.Flyn@gmail.com",
    },
    {
      age: 38,
      experience: "intern",
      firstname: "Kittie",
      lastname: "Talia",
      city: "Osaka",
      country: "United States",
      countryCode: "FR",
      favoriteBeer: "Heineken",
      email: "Kittie.Talia@gmail.com",
    },
    {
      age: 35,
      experience: "intern",
      firstname: "Chandra",
      lastname: "Vanni",
      city: "Konya",
      country: "Iran, Islamic Republic Of",
      countryCode: "BN",
      favoriteBeer: "Ciucas",
      email: "Chandra.Vanni@gmail.com",
    },
    {
      age: 39,
      experience: "senior",
      firstname: "Tonia",
      lastname: "Gamaliel",
      city: "Mamoudzou",
      country: "Virgin Islands, British",
      countryCode: "TO",
      favoriteBeer: "Heineken",
      email: "Tonia.Gamaliel@gmail.com",
    },
    {
      age: 25,
      experience: "intern",
      firstname: "Shaylyn",
      lastname: "Gavrila",
      city: "Lobamba",
      country: "Cayman Islands",
      countryCode: "CK",
      favoriteBeer: "Heineken",
      email: "Shaylyn.Gavrila@gmail.com",
    },
    {
      age: 35,
      experience: "mid",
      firstname: "Ayn",
      lastname: "Sherrie",
      city: "Gibraltar",
      country: "Norfolk Island",
      countryCode: "SZ",
      favoriteBeer: "Heineken",
      email: "Ayn.Sherrie@gmail.com",
    },
    {
      age: 40,
      experience: "junior",
      firstname: "Gisela",
      lastname: "Penelopa",
      city: "Udon Thani",
      country: "Bulgaria",
      countryCode: "LI",
      favoriteBeer: "Ciucas",
      email: "Gisela.Penelopa@gmail.com",
    },
    {
      age: 25,
      experience: "intern",
      firstname: "Kore",
      lastname: "Bandeen",
      city: "Yellowknife",
      country: "Moldova, Republic of",
      countryCode: "IQ",
      favoriteBeer: "Ciucas",
      email: "Kore.Bandeen@gmail.com",
    },
  ];
}

// 1.Show just the seniors

let showSeniors = () => {
  var s = [];
  users.forEach((u) => {
    if (u.experience == "senior") {
      s.push(u.firstname);
    }
  });
  return s;
};

console.log(showSeniors());
// 2.Sort users by experience ( the order is intern,junior,mid,senior)
const sortUsers = (a, b) => {
  if (a.experience < b.experience && a.experience != "senior") return -1;
  if (a.experience > b.experience) return 1;
  return 0;
};

users.sort(sortUsers);
console.log(users);
// 3.Find how many users love Ciucas
let usersCiucas = () => {
  let loversOfCiucas = 0;
  users.forEach((u) => {
    if (u.favoriteBeer == "Ciucas") loversOfCiucas++;
  });
  return loversOfCiucas;
};

console.log(usersCiucas());
// 4.Find the users who have the first letter form countryCode equal with 'M'

// let result = users.find((u) => {
//   u.countryCode.slice(0, 1) == "M";
// });
// console.log(result);

let result = () => {
  const a = [];
  users.find((u) => {
    if (u.countryCode.slice(0, 1) == "M") {
      a.push(
        u.firstname + " " + u.lastname + "; countryCode: " + u.countryCode
      );
    }
  });
  return a;
};

// const findUsers = () => {
//   const element = users.find((u) => u.countryCode.slice(0, 1) === "M");
//   return element;
// };
// console.info(findUsers());

// let result = () => {
//   m = [];
//   users.forEach((u) => {
//     if (u.countryCode.slice(0, 1) == "M")
//       m.push(u.firstname + " " + u.countryCode);
//   });
//   return m;
// };

console.log(result());

// 5.Find the first user who is from France and show the first name and last name

// let userFromFrance = () => {
//   const r = [];
//   users.find((u) => {
//     if (u.country == "France") {
//       r.push(u.firstname + " " + u.lastname + "; Country " + u.country);
//     }
//   });
//   return r;
// };

let userFromFrance = () => {
  const element = users.find((u) => u.country == "France");
  return element;
};

console.log(userFromFrance());
// 6.Find all users who are more than 30 and love Ciucas
const n = users.filter((u) =>
  u.age > 30 && u.favoriteBeer == "Ciucas" ? true : false
);
console.log(n);
// 7.Find all users who have the length of email longer than 20
const m = users.filter((u) => (u.email.length > 20 ? true : false));
console.log(m);
// 8.Find the last user who loves Heineken and are less than 30
// const s = users.filter((u) => (u.favoriteBeer === "Heineken" ? true : false));
// console.log(s);
const f = users
  .reverse()
  .find((u) => (u.favoriteBeer === "Heineken" ? true : false));
console.log(f);
// 9.Create a new array with users where we have just name and experience where :
// - name is the combination between first name and last name
// - experience is just senior or junior (
//     junior means all users who are now intern or junior,
//     senior means all users who are now mid or sernios
// )
const users2 = users.map((u) => {
  return {
    fullName: u.firstname,
    experience:
      u.experience === "intern" || u.experience == "junior"
        ? (u.experience = "junior")
        : (u.experience = "senior"),
  };
});

console.log(users2);
// 10.Create a map ( object ) where I have as key the name of a beer and as value the number of user who love that beer ex:
// {
//     tuborg: 3,
//     heineken: 5,
//     ...
// }

// const beers = users.map((u) => {
//   let t = 0,
//     c = 0,
//     h = 0,
//     n = 0;
//   users.forEach((u) => {
//     if (u.favoriteBeer == "Tuborg") {
//       t++;
//     }
//     if (u.favoriteBeer == "Heineken") {
//       h++;
//     }
//     if (u.favoriteBeer == "Ciucas") {
//       c++;
//     }
//     if (u.favoriteBeer == "Nenea Iancu") {
//       n++;
//     }
//   });
//   return {
//     tuborg: t,
//     ciucas: c,
//     heineken: h,
//     neneaiancu: n,
//   };
// });

// console.log(beers);

const l = () => {
  let t = 0,
    c = 0,
    h = 0,
    ni = 0;
  users.forEach((u) => {
    if (u.favoriteBeer == "Tuborg") {
      t++;
    }
    if (u.favoriteBeer == "Heineken") {
      h++;
    }
    if (u.favoriteBeer == "Ciucas") {
      c++;
    }
    if (u.favoriteBeer == "Nenea Iancu") {
      ni++;
    }
  });
  const beers = new Map();

  beers.set("tuborg", t);
  beers.set("ciucas", c);
  beers.set("heineken", h);
  beers.set("neneaiancu", ni);

  return beers;
};

console.log(l());
