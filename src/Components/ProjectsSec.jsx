import ProjectItem from './ProjectItem'
import SpecialHeader from './SpecialHeader'
import img1 from '../assets/img/portfolio-1.jpg'
import img2 from '../assets/img/portfolio-2.jpg'
import img3 from '../assets/img/portfolio-3.jpg'
import img4 from '../assets/img/portfolio-4.jpg'
import img5 from '../assets/img/portfolio-5.jpg'
import img6 from '../assets/img/portfolio-6.jpg'
import { useState } from 'react'

    const projects=[{
        img:img1,
        category:'Web Design'

    },
    {
        img:img2,
        category:'Graphic Design'

    },
    {
        img:img3,
        category:'Web Design'

    },
    {
        img:img4,
        category:'Graphic Design'
 
    },
        {
        img:img5,
        category:'Web Design'
 
    },
        {
        img:img6,
        category:'Graphic Design'
 
    }


]
    const categories=[{name:'All',
    state:true
},
{name:'Web Design',
 state:false
}
,{
    name:'Graphic Design',
    state:false
}

]
function ProjectsSec() {
   const [filteredCategories,setFiltered]=useState(categories)
    const [selectedProjects,setSelected]=useState(projects)

const changCategoryHandler=(e)=>{
    let selectedCategory=e.target.innerHTML
    let newCategories
    if(e.target.innerHTML=='All'){
    
   setSelected(projects)
    }
    else{
    const projectsNew=projects.filter(project=>selectedCategory==project.category)
    setSelected(projectsNew)
    }
         newCategories=categories.map(category=>{
        if(category.name==selectedCategory){
             return{
              name:category.name,
              state:true
             }

        }
        else{
            return{ 
                
                name:category.name,
                state:false
            }

        }
     } )
          setFiltered(newCategories)

}
  return (
    <div className='py-24 container'
 >
        <SpecialHeader center={true} text='OUR PROJECTS' color='secondary' parts='full'/>
        <h2 className='text-black text-4xl font-semibold text-center my-3'>Recently Completed Projects</h2>
        <div className='flex gap-3 items-center justify-center'>
            {
                filteredCategories.map(category=><button key={category.name} className={`my-3 font-semibold   pb-2 ${category.state?'border-b-2 border-b-primary':''}`} onClick={changCategoryHandler}>{category.name}</button>)
            }
            
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14 pt-6 '>
        {
        selectedProjects.map((project,id)=><ProjectItem key={id} category={project.category} img={project.img} />)}



        </div>
    </div>
  )
}

export default ProjectsSec