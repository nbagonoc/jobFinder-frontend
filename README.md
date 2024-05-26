## JobFinder Front-end(REACT)

The front-end for JobFinder. Back-end can be found here: (https://github.com/nbagonoc/jobFinder-backend)

<img width="1660" alt="home" src="https://github.com/nbagonoc/jobFinder-frontend/assets/30286941/ecc72039-70de-4375-8762-a1a3b5f25359">
<img width="1660" alt="joblist" src="https://github.com/nbagonoc/jobFinder-frontend/assets/30286941/9bfc028a-a85e-4c49-b639-474ff9682722">
<img width="1660" alt="education" src="https://github.com/nbagonoc/jobFinder-frontend/assets/30286941/2d3e09ab-2152-4495-ba8e-e462f3d9be4e">
<img width="1659" alt="about" src="https://github.com/nbagonoc/jobFinder-frontend/assets/30286941/31c6b753-19ef-4682-b738-9540c6fe9566">
<img width="1659" alt="profile" src="https://github.com/nbagonoc/jobFinder-frontend/assets/30286941/9243deab-4014-4446-8c9d-79d30e679241">

## Features:
- Applicant
    - Manage applicant profile
        - Create / Update about
        - Create / Update / delete education
        - Create / Update / delete experience
        - Create / Update / delete skills
    - View job postings
    - Apply job posting
    - View job applications and status
- Recruiter
    - Manage recruiter profile
        - Create / Update about
    - Manage job posting
        - View job postings
        - Post job
        - Update job
        - Delete job
        - Close job
    - Manage job applicants
        - View job applicants
        - View applicant profile
        - Deny applicant
        - Whitelist applicant
        - Approve applicant
- General
    - Sign-up
    - Sign-in

## How to run locally:
- Setup backend (https://github.com/nbagonoc/jobFinder-backend)

- Download dependencies:
```
npm install
```

- Serve by running:
```
npm run dev
```

- Front-end Backlog:
    - Recruiter:
        - Add editable company details
            - number of employees, industry, location, website, email....
    - Others:
        - Make the About the company dynamic (PRIORITY)
        - Need to move AlertMessage to a single place, but to do this, we need to have a general layout
        - Might want to move the profile in auth state
            - Or... or... or, we could also apply the same approach where we get the user name and role to user state
        - Need to simplify forms since the code is too many
        - Need to improve photo upload design style

    