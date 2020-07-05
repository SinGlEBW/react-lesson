const mysql = require('mysql');
const GET_DATA = "GET_DATA";
const SET_DATA = "GET_DATA";
let pool = mysql.createPool({//много соединений
   connectionLimit : 4,
   host: '127.0.0.1',
   user: 'root',
   password: '',
   database: 'test_bd',
   timezone: 'UTC',

});

function resultBD (action) {
   
   pool.getConnection(async(err, connection) => {
      switch(action.type){
         case GET_DATA: 
         await connection.query("SELECT * FROM user",  (err, result) => action.getData(result || err)); break;
         case SET_DATA: 
         await connection.query(`INSERT INTO ${action.nameTable}` ,  (err, result) => action.setData(result)); break;
         default: return -1
      }

         
         
         connection.release();
   })

   return 
}

module.exports = {resultBD};



/*


    case SHOW_PRODUCT:
      return searchProducts(action.name);
    case SET_PRODUCT_MENU:
      return {
        ...stateProducts, [action.menuList]: action.menuList
      };

    default:
      return stateProducts;
  }
};
*/