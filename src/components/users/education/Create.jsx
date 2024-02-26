// DEPRECATED. Not being used anymore.

import Default from "../../partials/layouts/Default"
import Form from "./Form"

const Create = () => {
    return (
        <Default>
            <div className='col-md-8 col-lg-6 mx-auto'>
                <div className='card'>
                    <div className='card-header'>
                        <h1 className='mb-0 fw-bold fs-3 text-center'>
                            Create Education
                        </h1>
                    </div>
                    <div className='card-body'>
                        <Form />
                    </div>
                </div>
            </div>
        </Default>
    )
}

export default Create
