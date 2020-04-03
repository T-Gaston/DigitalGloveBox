import React,{useState,useContext }from 'react';
import { Image, Item,  } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import CarProfile from './CarProfile'

const Car = (props) => {
  
  // const [cars, setCars] = useState([])
  // const {user} = useContext(AuthContext)
  // const {car} = props
  

  return(
    <>
    {/* <CarProfile car={props.car} {...props} /> */}
    <Item key={props.car.id}>
    {/* <Item.Image image={car.image} /> */}
    <Item.Content>
      <Item.Header as='a'>{props.car.year} {props.car.make} {props.car.model}</Item.Header>
      <Item.Description>{paragraph}</Item.Description>
   
      <Link to={{pathname: `/car_profile/${props.car.id}` }}>Car Profile</Link>
    </Item.Content>
  </Item>
  </>
  )
}





const paragraph = (
  'All of your cars documents, information, and recent services in one convenient place!'
)

export default Car
