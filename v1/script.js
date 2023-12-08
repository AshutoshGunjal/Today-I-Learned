const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

// console.log(CATEGORIES.find((cat) => cat.name === "society").color);
// console.log(CATEGORIES.find((cat1) => cat1.name === "technology"));

// Selecting DOM Elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

factsList.innerHTML = "";

// Create DOM Elements - Render Facts in the list

loadFacts();
async function loadFacts() {
  //Load data from Supabase

  const res = await fetch(
    "https://fqrqyqhfmjntvxgsqmre.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxcnF5cWhmbWpudHZ4Z3NxbXJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzOTQxNDIsImV4cCI6MjAxNjk3MDE0Mn0.BjHnfs52BgP4dfbBONI1S7-nJM_Bw3keQOTe-Y5ZHx0",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxcnF5cWhmbWpudHZ4Z3NxbXJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzOTQxNDIsImV4cCI6MjAxNjk3MDE0Mn0.BjHnfs52BgP4dfbBONI1S7-nJM_Bw3keQOTe-Y5ZHx0",
      },
    }
  );
  const data = await res.json();
  //   console.log(data);
  const filterData = data.filter((fact) => fact.category === "technology");
  createFactsList(data);
}

// createFactsList(initialFacts);

function createFactsList(dataArray) {
  const htmlArray = dataArray.map(
    (fact) => `<li class="fact">
        <p>${fact.text}
           <a class="source"
              href="${fact.source}"
              target="_blank">(Source)</a>
      </p>
          <span class="tag" style="background-color: ${
            CATEGORIES.find((cat) => cat.name === fact.category).color
          }">${fact.category}</span>
        </li>`
  );
  console.log(htmlArray);

  const html = htmlArray.join("");

  factsList.insertAdjacentHTML("afterbegin", html);
}

// Toggle Form Visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a Fact";
  }
});

// filter return the new array
console.log([7, 64, 6, -23, 11].filter((el) => el > 10));

//find returns only the value which satiesfies the condition
console.log([7, 64, 6, -23, 11].find((el) => el > 10));

/*
let votesInteresting = 23;
let votesMindblowing = 5;

votesInteresting++;
console.log(votesInteresting);

let totalUpvotes = votesInteresting + votesMindblowing;
console.log("UpVotes", totalUpvotes);

let votesFalse = 4;
const isCorrect = votesFalse < totalUpvotes;
console.log(isCorrect);

const text = "Lisbon";

console.log(parseInt("24.565ccc"));
*/
/*
function calFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else
    return `Impossible Year. Years needs to be less or equal to ${currentYear}`;

  return age;
}

const actaulAge = calFactAge(2001);
console.log(actaulAge);

console.log(calFactAge(2005));
console.log(calFactAge(2037));

//const calFactAge2 = (year) => 2022 - year;
const calFactAge2 = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : `Impossoble year. Year needs to be less or equal ${new Date().getFullYear()}`;

console.log(calFactAge2(2015));
console.log(calFactAge2(2012));
/*
let votesInteresting = 23;
let votesMindblowing = 5;

if (votesInteresting === votesMindblowing) {
  alert(" This fact is equally interesting and mindblowing");
} else if (votesInteresting > votesMindblowing) {
  console.log("Intersteing Fact");
} else if (votesInteresting < votesMindblowing) {
  console.log("Mindblowing Fact");
}

// falsy values: 0, '', null, undefined
if (votesMindblowing) {
  console.log("MINDBLOWING FACT");
} else {
  console.log("NOT SO SPECIAL..");
}

let votesFalse = 5;
const totalUpvotes = votesInteresting + votesMindblowing;

const message =
  totalUpvotes > votesFalse
    ? "Fact is True"
    : "Might be false, check more srouces";

// alert(message);

const text = "Lisbon is the capital of portugal";

const upperText = text.toUpperCase();
console.log(upperText);
const str = `The currenct fact: ${text}. It is ${calFactAge(2015)} years old.
It is probably ${totalUpvotes > votesFalse ? "correct" : "not ture"}`;
console.log(str);
*/

/*

//Arrays - Data Structure
const fact = ["Lisbon is capital of portugal", 2015, true];

console.log(fact[2]);
console.log(fact.length);
console.log(fact[fact.length - 1]);

const [text, createdIn, isCorrect] = fact;
console.log(text);
console.log(createdIn);

const newFacts = [...fact, "society"];
console.log(newFacts);

[2, 4, 6, 8].forEach(function (el) {
  console.log(el);
});

// const times2 = [2, 4, 6, 8].map(function (el) {
//   return el * 2;
// });

// const times2 = [2, 4, 6, 8].map((el) => el * 2);
// console.log(times2);
// const factObject = {
//   text: "Lisbon is capital of Portugal",
//   category: "society",
//   createdIn: 2015,
//   isCorrect: true,
//   createSummary: function () {
//     return `The fact "${
//       this.text
//     }" comes under ${this.category.toUpperCase()} category and
//     is created in the year ${this.createdIn}`;
//   },
// };

// console.log(factObject.text);
// console.log(factObject["text"]);

// const { category } = factObject;
// console.log(category);
// console.log(factObject.createSummary());

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const allCategories = CATEGORIES.map((el) => el.name);
console.log(allCategories);

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

function calFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else
    return `Impossible Year. Years needs to be less or equal to ${currentYear}`;

  return age;
}

const factAges = initialFacts.map((el) => calFactAge(el.createdIn));
console.log(factAges);

console.log(factAges.join(" & "));
*/
