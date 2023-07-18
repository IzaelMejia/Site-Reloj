import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
// Firebase
import { collection, query, where,getDocs,documentId} from "firebase/firestore"
import {db} from "../../firebase/firebaseConfig"
// import CardReloj from '../../components/CardReloj/CardReloj';
import MostrarReloj from "../../components/MostrarReloj/MostrarReloj"

import "./RelojDetail.css"

const RelojDetail = () => {
  // Desestrucutrar de un objeto que viene de useParams el id
  const {id} = useParams()
  const [relojData, setRelojData ]=useState([])   // Creamos un estado llamado "reloj" inicializado como un array vacío.

  //console.log(id);
  useEffect(()=>{
    const getRelojes=async()=>{
      const q= query(collection(db,"relojes"),
      where(documentId(),"==",id)) //condicion

      const docs=[] 
      const querySnapshot= await getDocs(q)   
    

    querySnapshot.forEach((doc) => {
      docs.push({...doc.data(),id: doc.id})
    })
    setRelojData(docs)
  
    }
    getRelojes()
  },[id]) //array dependencias
  //peticion firestore us ando la id del reloj
  return (
    <div className='DetailContainer'>
      {relojData.map((data)=>{
        return (
          <div key={data.id} className='detailCard'>
          <MostrarReloj data={data}/>
          
        </div> 
        )
      })}
    </div>
  )
}

export default RelojDetail