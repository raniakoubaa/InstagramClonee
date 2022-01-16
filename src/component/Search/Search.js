// import React, { useState } from 'react'
// import { Card, FormControl} from 'react-bootstrap'
import './Search.css'

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';

const Search = ({person}) => {
  // const [text, setText] = useState("")
   const list = useSelector(state => state.InstagramReduce.Profils)
  
  return (
    //     <div  className='searchCard'>
    //        <div className="form-group has-search">
    //                     <span className="fa fa-search form-control-feedback"></span>
    //                     <FormControl
    //                         width="265px"
    //                         type="search"
    //                         placeholder="Search"
    //                         className="me-2"
    //                         aria-label="Search"
    //                         onChange={(e) => setText(e.target.value)}
    //                         value={text}
    //                     />
    //                     {list.filter(elt => elt.UserName.toLowerCase().trim().includes(text.toLowerCase().trim()))
    //                     .map(elt=><Search person={elt} key={elt.id}/>)}
    //                 </div>
          
    //         <Card style={{ width: '16rem' }} >
    //         <List
    //   sx={{
    //     width: '100%',
    //     maxWidth: 360,
    //     bgcolor: 'background.paper',
    //   }}
    // >
    //   <ListItem>
    //     <ListItemAvatar>
    //       <Avatar>
    //         <img src={person.src} alt='img' width="50px"/>
    //       </Avatar>
    //     </ListItemAvatar>
    //     <ListItemText primary={person.UserName} secondary={person.Pseudo} />
    //   </ListItem>
    // </List>
    //         </Card>
           
    //     </div>
   
   <div>
      <Stack spacing={1} sx={{ width: 300 }}>
      <Autocomplete
       
        disableClearable
        options={list.map((option) => option.UserName)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
   </div>

    
    )
}

export default Search
