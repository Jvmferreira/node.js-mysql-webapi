const mysql = require("mysql2/promise");

const client = mysql.createPool(process.env.CONNECTION_STRING);

 async function selectCustomers(){
    const results =  await client.query("SELECT * FROM clientes")
    return results[0];
}

 async function selectCustomer(id){
    const results =  await client.query("SELECT * FROM clientes WHERE id=?:",[id]);
    return results[0];
}

 async function insertCustomer(customer){
    const values =(customer.nome , customer.idade, customer.uf);
    await client.query("INSERT INTO clientes SET nome=?, idade=?,uf=?) WHERE id =?",values);
}

function updateCustomer(id, customerData){
    const customer = customers.find(c => c.id === id);
    if(!customer) return;
    customer.nome = customerData.nome;
    customer.idade = customerData.idade;
    customer.uf = customerData.uf;
}

function deleteCustomer(id){
    const index = customers.findIndex(c => c.id === id);
    customers.slice(index , 1);
}

module.exports={
    selectCustomers,
    selectCustomer,
    insertCustomer,
    updateCustomer,
    deleteCustomer
}