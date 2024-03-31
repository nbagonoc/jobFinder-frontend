// refactor this to a modal

import Default from "../../../partials/layouts/Default"
import UserProfileEditForm from "./UserProfileEditForm"

const UserProfileEditFormContainer = () => {
    return (
        <Default>
            <div className='col-md-8 col-lg-6 mx-auto'>
                <div className='card'>
                    <div className='card-header'>
                        <h1 className='mb-0 fw-bold fs-3 text-center'>
                            Edit profile
                        </h1>
                    </div>
                    <div className='card-body'>
                        <UserProfileEditForm />
                    </div>
                </div>
            </div>
        </Default>
    )
}

export default UserProfileEditFormContainer
