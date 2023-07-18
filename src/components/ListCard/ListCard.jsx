import React from 'react'
import { useEffect, useState } from 'react';
import CardReloj from '../CardReloj/CardReloj';
import "./ListCard.css"
import { Link } from 'react-router-dom'; 
// Firebase
import { db } from "../../firebase/firebaseConfig"
import { collection, query, getDocs } from "firebase/firestore";






const ListCard = () => {
    const [relojes, setRelojes ]=useState([])   // Creamos un estado llamado "reloj" inicializado como un array vacío.
    
    useEffect(()=>{
        const getRelojes=async()=>{
          const q= query(collection(db,"relojes")) //es la base datos 
          const docs=[] 
          const querySnapshot= await getDocs(q)   
        
    
        querySnapshot.forEach((doc) => {
          docs.push({...doc.data(),id: doc.id})
        })
        setRelojes(docs)
      
        }
        getRelojes()
      },[])

  return (
    <div className='relojes-grid'> 
        {relojes.map((reloj)=>{
        return(
            <div key={reloj.id} className='contenedorCard'>
              <Link to={`/detail/${reloj.id}`}>  {/* link para ir al detalle del prducto por reloj id*/}
                <CardReloj data={reloj}/>
              </Link>
            </div>
        )
        })}
    </div>
  )
}

export default ListCard