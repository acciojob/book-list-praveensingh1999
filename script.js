let data=[];
const handleSubmit = (evt) => {
  evt.preventDefault()
  const formData = new FormData(evt.currentTarget)
  const formObject = Object.fromEntries(formData.entries())


  data.push(formObject);
  console.log(data);

  // table data show in table

  document.querySelector("tbody").innerHTML="";
  for(let i=0;i<data.length;i++){

    const table = document.querySelector("tbody");

    const tr = document.createElement("tr");
    const title= document.createElement("td");
    title.textContent=data[i].title;
    const author = document.createElement("td");
    author.textContent=data[i].author;
    const isbn = document.createElement("td");
    isbn.textContent=data[i].isbn;
	  const td=document.createElement("td");
    const btn = document.createElement("button");
    btn.textContent="X";
	  td.appendChild(btn);
	  

  btn.setAttribute("class","delete");
    tr.appendChild(title);
    tr.appendChild(author);
    tr.appendChild(isbn);
    tr.appendChild((td));
    table.appendChild(tr);
     btn.addEventListener("click", () => {
      tr.remove();
      data.splice(i, 1);
      // console.log("Updated data:", data);
      // renderTable(); // re-render table with updated data
    });

  }
}