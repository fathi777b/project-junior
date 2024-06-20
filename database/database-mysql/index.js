const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "postHouse",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to MySQL!");
  }
});

const selectAll = (callback) => {
  const sql = "select * from house"
  connection.query(sql,(err,result )=>{
 callback(err , result )
  })
};

const addHouse = (callback,newItem)=>{
  const sql = 'INSERT INTO house SET ?'
  
  connection.query(sql,newItem,(err,result)=>{
    callback(err,result)
  })
}

const deleteHouse= (callback,id)=>{
  const sql = "DELETE FROM house  WHERE id=?"
  connection.query(sql,id,(err,result)=>{
    callback(err,result)
  })
}

const updateHouse = (callback,name,description,id)=>{
  const sql = " UPDATE house SET name=(?),description=(?) WHERE id=?"
  connection.query(sql,[name,description,id],(err,result)=>{
 callback(err,result)
  })
}

const getOneHouse = (callback,name)=>{
  const sql = " select * from house WHERE name=?"
  connection.query(sql,name,function(err,result){
  callback(err,result)
  })
}

module.exports = {
  selectAll,addHouse,deleteHouse,updateHouse,getOneHouse
};
