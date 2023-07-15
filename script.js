let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  const dev = arr
    .filter((array) => array.profession === "developer")
    .map((developer) => developer.name);
  console.log(dev);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((array) => {
    if (array.profession === "developer") {
      console.log(array);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const add = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(add);

  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  const remove = arr.filter((array) => array.profession !== "admin");
  console.log(remove);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newArr = arr.concat([
    { id: 5, name: "harish", age: "22", profession: "developer" },
    { id: 6, name: "akash", age: "21", profession: "admin" },
    { id: 5, name: "arjit", age: "23", profession: "intern" },
  ]);
  console.log(newArr);
}


PrintDeveloperbyMap();

PrintDeveloperbyForEach();

addData();

removeAdmin();

concatenateArray();
