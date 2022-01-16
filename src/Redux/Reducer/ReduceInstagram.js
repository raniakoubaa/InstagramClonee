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
            Genre: "Reine de jordan",
             ImgPublic:  "https://static1.purepeople.com/articles/8/36/57/68/@/5273693-la-reine-rania-et-le-roi-abdullah-ii-de-624x600-3.jpg"
            //  [
            //   {
            //     src: "https://www.tripstyleblog.com/wp-content/uploads/2018/08/38488034_693986580951852_1735557144276631552_n-e1533654105342-990x500.jpg",
            //     title: "image1",
            //   },
            //   {
            //     src: "https://tse4.mm.bing.net/th?id=OIP.R0Qxc7fRXsRdo0Y8fHq8xQHaLL&pid=Api&P=0&w=105&h=159",
            //     title: "image2",
            //   },
            //   {
            //     src: "https://tse2.mm.bing.net/th?id=OIP.lnc1n2ikYO0-wdSXwasPWAHaLH&pid=Api&P=0&w=107&h=160" ,
            //     title: "image3",
            //   },
            //   {
            //     src:
            //       "https://tse4.mm.bing.net/th?id=OIP.-Y4Vm4ocH1OmaUPjWj7vxAHaHa&pid=Api&P=0&w=176&h=176",
            //     title: "image4",
            //   },
            //   {
            //     src:
            //     "https://tse4.mm.bing.net/th?id=OIP.hCwviTSfwXRNOzUzTUY8PAHaFj&pid=Api&P=0&w=217&h=162",
            //     title: "image5",
            //   },
            //   {
            //     src:
            //     "https://static1.purepeople.com/articles/8/36/57/68/@/5273693-la-reine-rania-et-le-roi-abdullah-ii-de-624x600-3.jpg",
            //     title: "image5",
            //   }
            // ] 
          },
          {
            id: Math.random(),
            src: "https://instatunisia.com/simg/210830/fashion-mayssa-ferchichi.webp",
            UserName: "Mayssa",
            Pseudo: "Mayssa ferchichi",
            Bio: "instagrameuse",
            Email: "ferchichi@gmail.com",
            Telephon: 58963214,
            Genre: "DIGITAL CONSULTANT",
            ImgPublic:"https://www.tripstyleblog.com/wp-content/uploads/2018/08/38488034_693986580951852_1735557144276631552_n-e1533654105342-990x500.jpg"
            // [
            //   {
            //     src: "https://www.tripstyleblog.com/wp-content/uploads/2018/08/38488034_693986580951852_1735557144276631552_n-e1533654105342-990x500.jpg",
            //     title: "image1",
            //   },
            //   {
            //     src: "https://tse1.mm.bing.net/th?id=OIP.T3g5JZUb6D1AJjd7Vc4u-AHaEq&pid=Api&P=0&w=263&h=165" ,
            //     title: "image2",
            //   },
            //   {
            //     src: "https://tse3.mm.bing.net/th?id=OIP.BJftaVB8jovYqOZZn4mKvgHaJQ&pid=Api&P=0&w=132&h=166",
            //     title: "image3",
            //   },
            //   {
            //     src:
            //       "https://tse4.mm.bing.net/th?id=OIP.cAwzNG7mzRmBec2ViYN1hAHaE8&pid=Api&P=0&w=240&h=160",
            //     title: "image4",
            //   },
            //   {
            //     src:
            //     "https://tse1.explicit.bing.net/th?id=OIP.I5izNF24y_HoDokkhVfrPwHaE8&pid=Api&P=0&w=252&h=168",
            //     title: "image5",
            //   },
            // ]   
          },
          {
            id: Math.random(),
            src: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzNzYzNn0?utm_source=dictionnaire&utm_medium=referral",
            UserName: "Picture",
            Pseudo: "Beautifull picture ",
            Bio: "Nos appareils photo à long foyer nous servent ici de microscope.",
            Email: "beauti.picture@gmail.com",
            Telephon: 523698741,
            Genre: "Pictures",
            ImgPublic:"https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            // [
            //     {
            //       src: "https://static.remove.bg/remove-bg-web/126e8851f6e88bf644890fafdf1b0d82aff0629e/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
            //       title: "image1",
            //     },
            //     {
            //       src: "https://www.inpixio.com/remove-background/images/main-before.jpg",
            //       title: "image2",
            //     },
            //     {
            //       src: "https://www.slazzer.com/static/images/remove_image_background.jpg",
            //       title: "image3",
            //     },
            //     {
            //       src:
            //         "https://techager.com/wp-content/uploads/2021/06/How-to-100-Remove-Background-from-Image-online.jpg",
            //       title: "image4",
            //     },
            //     {
            //       src:
            //       "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
            //       title: "image5",
            //     },
            //   ]              
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
             ImgPublic: "https://fr.shopping.rakuten.com/photo/1844894959_L.jpg"
            //  [
            //   {
            //     src: "https://www.tripstyleblog.com/wp-content/uploads/2018/08/38488034_693986580951852_1735557144276631552_n-e1533654105342-990x500.jpg",
            //     title: "image1",
            //   },
            //   {
            //     src: "https://tse1.mm.bing.net/th?id=OIP.o5kz2mUkIrY_hl51bmHJxQHaFL&pid=Api&P=0&w=239&h=167",
            //     title: "image2",
            //   },
            //   {
            //     src: "https://sp.yimg.com/ib/th?id=OPE.AjWlvIfQOFg0gA300C300&pid=21.1",
            //     title: "image3",
            //   },
            //   {
            //     src:
            //       "https://tse1.mm.bing.net/th?id=OIP.yjl3v579ZxDUCXfo51jmpwHaHa&pid=Api&P=0&w=175&h=175",
            //     title: "image4",
            //   },
            //   {
            //     src:
            //     "https://fr.shopping.rakuten.com/photo/1844894959_L.jpg",
            //     title: "image5",
            //   },
            // ] 
            
          }
    ]
}
const InstagramReduce = (state=intialeState,{type,payload})=>{
    switch (type) {
        case ADD_USER:  
           return {...state, Profils : [...state.Profils, payload]}
           case DELETE_USER:
               return {...state, Profils: state.Profils.filter(elt => elt.id !== payload)}
               case EDIT_USER:
                  return {...state, Profils: state.Profils.map(elt => elt.id === payload.id ? {...elt,...payload} : elt)}
        default:
            return state;
    }
}
export default InstagramReduce