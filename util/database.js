const Sequelize=require("sequelize");

const sequelize=new Sequelize("group_chat_app","root","Prateek@my2000",{
    dialect:"mysql",
    host:"localhost"
})

module.exports=sequelize;