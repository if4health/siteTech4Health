export default function getAuthors(authorsArray){
    let authors = "";
    let cleanedArray = [];

    console.log(authorsArray);

    authorsArray.forEach((e) => {
      cleanedArray.push(e.name);
    });
  
    cleanedArray.forEach((e) => {
      if(authors == ""){
        authors = authors + e
      }
      else {
        authors = authors + ", " + e;
      }
    });

    return authors;
}