export default class Repository{

    constructor(users){
        this.users=users
    }

    getAll(){
       return this.users
    }
    add(user){
      this.users.push(user)
    }
    getById(id){
       return this.users.find(p=>p.id==id)
    }

    getUserShorted(){
        return this.users.sort((user1,user2)=>{
            if(user1.firstName<user2.firstName){
               return -1
            }else if (user1.firstName===user2.firstName){
               return 0
            } else{
                  return 1
            }
          })
    }

    
}