export function countSheeps(list) {

    for (let i = 0; i < list.length; i++) {
      if (typeof list[i] !== "boolean") {
        return "The list must contain only boolean values";
      }
    }
  
    let sumTrue = 0;
    for (let i = 0; i < list.length; i++) {
        if(list[i] === true)
            sumTrue ++;
    }
    if (sumTrue > 0) {
        return `There are ${sumTrue} sheep in total`;
    } else {
        return "UPS!!! Wolfs eaten Sheeps";
    }
  }
  
  const list1 = [true, true, true, false, true, true, true, true , true, false, true, false, true, false, false, true , true, true, true, true , false, false, true, true];
  const list2 = [false, false, false];
  const list3 = [true, true, "miau", false];

  console.log(countSheeps(list1)); //There are 17 sheep in total
  console.log(countSheeps(list2)); //UPS!!! Wolfs eaten Sheeps
  console.log(countSheeps(list3)); //The list must contain only boolean values