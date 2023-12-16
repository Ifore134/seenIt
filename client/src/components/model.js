export default class Model{
    constructor(){
        this.data={
            posts : []
        }
    }
    
    addPosts(value){
        this.data.posts.push(value)
    }

}