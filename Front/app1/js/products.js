function loadProducts() {

    let tableBody = document.querySelector("#productsTable tbody");

    fetch("http://localhost:5000/products")
        .then(response => response.json())
        .then(data => {
            data.forEach((product,index) => {
                let productElem = createProductRow(product,index+1)

                tableBody.innerHTML += productElem;
            });
        })
}

function createProductRow(product,order){
    let productStr = `<tr>
    <th scope="row">${order}</th>
    <td>${product.name}</td>
    <td>${product.price}</td>
    <td>
    <a href="edit.html?id=${product.id}" class="btn btn-warning">Edit</a>
    <a href="" class="btn btn-danger">Delete</a>

    </td>
  </tr>`
        return productStr;
}


loadProducts()