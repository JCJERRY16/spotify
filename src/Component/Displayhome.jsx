import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../asset/asset'
import AlbumItem from './AlbumItem'
import { songsData } from '../asset/asset'
import SongItem from './SongItem'

const Displayhome = () => {
  return (
    <>
      <Navbar/>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured charts</h1>
        <div className='flex overflow-auto'>
        {albumsData.map((items,index)=>(<AlbumItem key={index} name={items.desc} id={items.id} image={items.image} />)) }
        </div>
      </div>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
        <div className='flex overflow-auto'>
       {songsData.map((item, index)=>( <SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />)) }
        </div>
     
      </div>
    </>
  )
}

export default Displayhome
