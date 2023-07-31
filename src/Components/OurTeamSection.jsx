import SpecialHeader from "./SpecialHeader"
import TeamMember from "./TeamMember"

function OurTeamSection() {
  return (
    <div className='py-24 container'>
        <SpecialHeader center={true} text='OUR TEAM' color='secondary' parts='full'/>
        <h2 className="text-center text-5xl font-semibold">Our Team Members</h2>
        <div className="grid lg:grid-cols-3 pt-10 gap-5 md:grid-cols-2  ">
          <TeamMember/>
          <TeamMember/>
          <TeamMember/>


        </div>
    </div>
  )
}

export default OurTeamSection