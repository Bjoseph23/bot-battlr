import React, {useState} from 'react'
// onChange={handleFilter}

function SortBar({onFilter}) {
    const [selectedCategory, setselectedCategory]=useState('All')
    const handleChange=(event)=>{
        setselectedCategory(event.target.value)
        onFilter(selectedCategory)
    }
  return (
    <div className='sort'>Category Sort
      <div className="Filter">
        <select name="filter" value={selectedCategory} onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Support">Support</option>
          <option value="Medic">Medic</option>
          <option value="Assault">Assault</option>
          <option value="Defender">Defender</option>
          <option value="Captain">Captain</option>
          <option value="Witch">Witch</option>
        </select>
      </div>
      <ul className="Items"> 
      </ul>
    </div>
  )
}

export default SortBar
