function fetchData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let result = Math.random();
      console.log(result);
      if (result > 0.5) {
        res("Data fetched successfully!");
      } else {
        rej("Network error occurred.");
      }
    }, 1000); 
  });
}

async function fetchDataHandler() {
  try {
    let result = await fetchData();
    console.log("Success:");
  } catch (error) {
    console.log("Error",error);
  }
}


fetchDataHandler();
