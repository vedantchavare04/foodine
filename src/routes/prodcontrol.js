import {sql} from "../db.js";

export const getAllProducts=async (req,res)=>{
    try{
        const prod=await sql`
            SELECT * FROM items
        `;
        console.log(prod);
        res.status(200).json({success:true,data:prod});
    }catch(err){
        console.log(err);
    }
};