import axios from 'axios'

class Post{
     
    create(formdata){
        const url ="http://localhost:8000/api/createpost";
        const config ={
            Headers:{
                'content-type':'multipart/form-data',
            }
        };
        return axios.post(url,formdata,config);
    }

    //view Posts
    getPosts(){
        const url ="http://localhost:8000/api/getposts";
       return axios.get(url)
    
    }

    //Delete Posts
    deletePosts(id){
        const url ="http://localhost:8000/api/deletepost/"+id;
       return axios.get(url)
    
    }
         //update Posts
         updatePosts(formdata){
            const url ="http://localhost:8000/api/updatepost";
            const config ={
                Headers:{
                    'content-type':'multipart/form-data',
                }
            };
            return axios.post(url,formdata,config);
        }
    

}


export default new Post();