const tBodyElement = document.querySelector("tbody");
/*
axios("https://northwind.vercel.app/api/customers/").then(function (response) {
  console.log(response);

  for (let i = 0; i < response.data.length; i++) {
    const trElement = document.createElement('tr');
           const tdIdElement = document.createElement('td');
           const tdcompanyNameElement = document.createElement('td');
          const tdcontactNameElement = document.createElement('td');
         const tdcontactTitleElement = document.createElement('td');
         const tdAdressElement = document.createElement('td');
         const tdAdressSElement = document.createElement('td');
          tdIdElement.textContent=data[i].id;
          tdcompanyNameElement.textContent=data[i].companyName;
         tdcontactNameElement.textContent=data[i].contactName;
         tdcontactTitleElement.textContent=data[i].contactTitle;
          tdAdressElement.textContent=data[i].address.city;
         tdAdressSElement.textContent=data[i].address.street;
          trElement.append(tdIdElement,tdcompanyNameElement,tdcontactNameElement,tdcontactTitleElement,tdAdressElement,tdAdressSElement);
          tBodyElement.appendChild(trElement);
  }
});
*/
fetch("https://northwind.vercel.app/api/customers/")
 .then(function(response){
    return response.json();
})
 .then(function(data){
       console.log(data);
     for(let i=0;i<data.length;i++){
          const trElement = document.createElement('tr');
          const tdIdElement = document.createElement('td');
          const tdcompanyNameElement = document.createElement('td');
          const tdcontactNameElement = document.createElement('td');
          const tdcontactTitleElement = document.createElement('td');
          const tdAdressElement = document.createElement('td');
          const tdAdressSElement = document.createElement('td');

          tdIdElement.textContent=data[i].id;
          tdcompanyNameElement.textContent=data[i].companyName;
         tdcontactNameElement.textContent=data[i].contactName;
         tdcontactTitleElement.textContent=data[i].contactTitle;
          tdAdressElement.textContent=data[i].address.city;
         tdAdressSElement.textContent=data[i].address.street;
         
          trElement.append(tdIdElement,tdcompanyNameElement,tdcontactNameElement,tdcontactTitleElement,tdAdressElement,tdAdressSElement);
          tBodyElement.appendChild(trElement);
      }
       });

