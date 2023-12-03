import UserAbout from "./UserAbout"
import UserEducation from "./UserEducation"
import UserExperience from "./UserExperience"
import UserSkills from "./UserSkills"
import UserProfile from "./UserProfile"

const UserProfileContainer = () => {
    return (
        <div className='container-lg'>
            <div className='row'>
                <div className='col-md-5 col-lg-4 col-xl-3 mb-3'>
                    <UserProfile />
                </div>
                <div className='col-md-7 col-lg-8 col-xl-9 mb-3'>
                    <div className='row'>
                        <div className='col-xl-8'>
                            <div className="mb-3">
                                <UserEducation />
                            </div>
                            <div className="mb-3">
                                <UserExperience />
                            </div>
                            <div className="mb-3">
                                <UserSkills />
                            </div>
                        </div>
                        <div className='col-xl-4 mb-3'>
                            <UserAbout />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfileContainer
