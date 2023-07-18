import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'; 

// Firebase
import { collection, query,getDocs, where} from "firebase/firestore"
import {db} from "../../firebase/firebaseConfig"
// import CardReloj from '../../components/CardReloj/CardReloj';
import CardReloj from '../../components/CardReloj/CardReloj';

import "./RelojMarcaPage.css"

const RelojMarcaPage = () => {
  // Desestrucutrar de un objeto que viene de useParams el id
  const {name} = useParams()
  const [relojData, setRelojData ]=useState([])   // Creamos un estado llamado "reloj" inicializado como un array vacío.

  console.log(name);
  //console.log(id);
  useEffect(()=>{
    const getRelojes=async()=>{
      const q= query(collection(db,"relojes"),where("name","==",name)) //condicion

      const docs=[] 
      const querySnapshot= await getDocs(q)   
    

    querySnapshot.forEach((doc) => {
      docs.push({...doc.data(),id: doc.id})
    })
    setRelojData(docs)
  
    }
    getRelojes()
  },[name]) //array dependencias
  //peticion firestore us ando la id del reloj
  return (
    <div className='DetailContainerMarca'>
      {relojData.map((data)=>{
        return (
          <div key={data.id} className='detailCard'>
          <Link to={`/detail/${data.id}`}>
            <CardReloj data={data}/>
          </Link>
        </div> 
        )
      })}
    </div>
  )
}

export default RelojMarcaPage