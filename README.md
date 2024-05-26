## JobFinder Front-end(REACT)

The front-end for JobFinder. Back-end can be found here: (https://github.com/nbagonoc/jobFinder-backend)

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

    