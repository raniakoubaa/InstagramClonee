import { ADD_USER, DELETE_USER, EDIT_USER } from '../Types'

const intialeState = {
     Profils : [
        {
            id: Math.random(),
            src: "https://resize-parismatch.lanmedia.fr/img/var/news/storage/images/paris-match/people-a-z/rania-de-jordanie/6042468-10-fre-FR/Rania-de-Jordanie.jpg",
            UserName: "Rania",
            Pseudo: "Rania koubaa",
            Bio: "abcd",
            Email: "koubaarania33@gmail.com",
            Telephon: 55555444,
            Genre: "Femal",
            ImgPublic: "https://static1.purepeople.com/articles/8/36/57/68/@/5273693-la-reine-rania-et-le-roi-abdullah-ii-de-624x600-3.jpg"
          },
          {
            id: Math.random(),
            src: "https://instatunisia.com/simg/210830/fashion-mayssa-ferchichi.webp",
            UserName: "Mayssa",
            Pseudo: "Mayssa ferchichi",
            Bio: "instagrameuse",
            Email: "ferchichi@gmail.com",
            Telephon: 58963214,
            Genre: "Femal",
            ImgPublic:"https://www.tripstyleblog.com/wp-content/uploads/2018/08/38488034_693986580951852_1735557144276631552_n-e1533654105342-990x500.jpg"
          },
          {
            id: Math.random(),
            src: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzNzYzNn0?utm_source=dictionnaire&utm_medium=referral",
            UserName: "Picture",
            Pseudo: "Beautifull picture ",
            Bio: "Nos appareils photo à long foyer nous servent ici de microscope.",
            Email: "beauti.picture@gmail.com",
            Telephon: 523698741,
            Genre: "Femal",
            ImgPublic:"https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
          },
          {
            id: Math.random(),
            src: "https://img.bfmtv.com/c/0/0/10dc0411/5edbae773828ebeef505b30b.jpg",
            UserName: "iphone",
            Pseudo: "Picture Paysage",
            Bio: "Pour simplifier la manipulation des clichés pris par un iPhone",
            Email: "iphone@yahoo.com",
            Telephon: 74258963,
            Genre: "business",
            ImgPublic:"https://fr.shopping.rakuten.com/photo/1844894959_L.jpg"
          }
    ]
}
const InstagramReduce = (state=intialeState,{type,payload})=>{
    switch (type) {
        case ADD_USER:  
           return {...state, Profils : [...state.Profils,payload]}
           case DELETE_USER:
               return {...state, Profils: state.Profils.filter(elt => elt.id !== payload)}
               case EDIT_USER:
                  return {...state, Profils: state.Profils.map(elt => elt.id === payload.id ? {...elt,...payload} : elt)}
        default:
            return state;
    }
}
export default InstagramReduce