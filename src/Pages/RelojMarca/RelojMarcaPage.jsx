import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
// Firebase
import { collection, query,getDocs} from "firebase/firestore"
import {db} from "../../firebase/firebaseConfig"
// import CardReloj from '../../components/CardReloj/CardReloj';
import CardReloj from '../../components/CardReloj/CardReloj';

import "./RelojMarcaPage.css"

const RelojMarcaPage = () => {
  // Desestrucutrar de un objeto que viene de useParams el id
  const {material} = useParams()
  const [relojData, setRelojData ]=useState([])   // Creamos un estado llamado "reloj" inicializado como un array vacío.

  console.log(material);
  //console.log(id);
  useEffect(()=>{
    const getRelojes=async()=>{
      const q= query(collection(db,"relojes")) //condicion

      const docs=[] 
      const querySnapshot= await getDocs(q)   
    

    querySnapshot.forEach((doc) => {
      docs.push({...doc.data(),id: doc.id})
    })
    setRelojData(docs)
  
    }
    getRelojes()
  },[material]) //array dependencias
  //peticion firestore us ando la id del reloj
  return (
    <div className='DetailContainer'>
      {relojData.map((data)=>{
        return (
          <div key={data.id} className='detailCard'>
          <CardReloj data={data}/>
          
        </div> 
        )
      })}
    </div>
  )
}

export default RelojMarcaPage