import React from 'react'

function GenderCheckbox({onCheckboxChange,selectedGender}) {
  return (
    <div className='flex justify-center gap-3'>
        <div className='form-control justify-center items-center'>
            <label className= {`label gap-2 cursor-pointer ${selectedGender==='male'? 'selected':""}`}>
                <span className='text-slate-400'>Male</span>
            </label>
            <input 
              type="checkbox" 
              checked={selectedGender === 'male'} 
              onChange={()=>onCheckboxChange('male')} 
              className='checkbox border-slate-900  hover:border-blue-700' 
            />
        </div>
        <div className='form-control justify-center items-center'>
        <label className={`label gap-2 cursor-pointer ${selectedGender==='Female'? 'selected':""}`}>
                <span className='text-slate-400'>Female</span>
            </label>
            <input 
              type="checkbox" 
              checked={selectedGender === 'female'} 
              onChange={()=>onCheckboxChange("female")} 
              className='checkbox border-slate-900  hover:border-blue-700' 
              />

        </div>
    </div>
  )
}

export default GenderCheckbox