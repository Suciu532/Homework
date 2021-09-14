var employees = [ {
    id: 1,
    firstName: "Solly",
    lastName: "Coon",
    email: "scoon0@miitbeian.gov.cn",
    gender: "Male",
    salary: "293.27"
}, {
    id: 2,
    firstName: "Myron",
    lastName: "Clissold",
    email: "mclissold1@over-blog.com",
    gender: "Male",
    salary: "463.44"
}, {
    id: 3,
    firstName: "Perla",
    lastName: "Fauguel",
    email: "pfauguel2@discovery.com",
    gender: "Female",
    salary: "764.17"
}, {
    id: 4,
    firstName: "Aundrea",
    lastName: "Kegan",
    email: "akegan3@tripod.com",
    gender: "Female",
    salary: "574.63"
}, {
    id: 5,
    firstName: "Eadith",
    lastName: "Chene",
    email: "echene4@prnewswire.com",
    gender: "Female",
    salary: "417.37"
}, {
    id: 6,
    firstName: "Lorette",
    lastName: "Tuther",
    email: "ltuther5@admin.ch",
    gender: "Female",
    salary: "377.40"
}, {
    id: 7,
    firstName: "Robenia",
    lastName: "Robins",
    email: "rrobins6@networkadvertising.org",
    gender: "Female",
    salary: "206.26"
}, {
    id: 8,
    firstName: "Moe",
    lastName: "Bottoms",
    email: "mbottoms7@php.net",
    gender: "Male",
    salary: "425.70"
}, {
    id: 9,
    firstName: "Talia",
    lastName: "Cutsforth",
    email: "tcutsforth8@delicious.com",
    gender: "Female",
    salary: "711.72"
}, {
    id: 10,
    firstName: "Ives",
    lastName: "Crennan",
    email: "icrennan9@microsoft.com",
    gender: "Male",
    salary: "668.98"
} ];

function collectFirstName(employees) {
    console.info("employees: ", employees);
    if (!employees) {
        console.info("you did not provide any value");
    }
    var firstNames = employees.map(function (employee) {
        return employee.firstName;
    });
    return firstNames;
}
var names = collectFirstName(employees);
console.warn("names ", names);

function calculateAverageSalary(employees) {
    var sum = 0;
    var count = Object.keys(employees).length;
    console.error('Numarul de angajati este: ', count);
    employees.forEach(employee => {
        sum = sum + Number(employee.salary);
        console.warn("Suma este: ", sum);
    });
    return sum / count;
}
calculateAverageSalary(employees);


function calculateAverageSalary(employees) {
    var sum = 0;
    var count = 0;
    employees.forEach(employee => {
        if (employee.gender == 'Female') {
            count = count + 1;
        }
    })
    console.error('Numarul de angajati este: ', count);
    employees.forEach(employee => {
        if (employee.gender == "Female") {
            sum = sum + Number(employee.salary);
            console.warn("Suma este: ", sum);
        }
    });
    return sum / count;
}
calculateAverageSalary(employees);

function sliptEmployees1() {
    const a = [];
    const b = [];
    console.log(employees);
    employees.forEach(employee => {
        if (employee.gender === "Female") {
            a.push(employee.firstName);
        } else {
            b.push(employee.firstName);
        }
    });
    return [ a, b ];
}

console.info(sliptEmployees1());

function splitEmployees2() {
    const males = employees.filter(employee => employee.gender === "Male");
    const females = employees.filter(employee => employee.gender === "Female");
    return [ males, females ];
}
console.log("pentru functia 2: ")
console.info(splitEmployees2());

const obj = {};
obj[ 'male' ] = {
    first: 'name'
};
console.log(obj[ 'male' ]);

function convertArray() {
    const obj = {};
    employees.forEach(emp => obj[ emp.lastName ] = emp);
    return obj;
}
console.log("Convert array: ")
console.info(convertArray());







