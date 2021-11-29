import axios from "axios";

const API_BACKEND = "http://localhost:3333/user";

const api = {
    register: async (nome, preco, preco_desc, qt_est, cate_id) => {
        try{
            let response = await axios.post(API_BACKEND, {
                nome: nome,
                preco: preco,
                preco_desc: preco_desc,
                qt_est: qt_est,
                cate_id: cate_id
            }) 
        }catch(error){
            console.error(error);
            return false;
        }
    }
}