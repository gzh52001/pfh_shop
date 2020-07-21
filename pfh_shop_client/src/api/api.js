import axios from "axios"

export default {
    //获取分类接口数据
    getapp() {
        return axios({
            method:"post",
            url:"/add-api/Home/ProductBoxNewsJson",
            data:{
                pageIndex:1,
                Catld:[201,322]
            }
        });
    },
}