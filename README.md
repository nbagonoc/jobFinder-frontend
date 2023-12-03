## React + Vite

The front-end for JoBoard

## How to run locally:

- Download dependencies:
```
npm install
```

- Serve by running:
```
npm run dev
npm run test
```

- Front-end Backlog:
    - Applicant:
        - Manage(view/edit) profile:
            - personal details  (PRIORITY)
                - contact info
                - first name, last name
                - address/location
            - about
            - education
            - experience
            - skills
        - Should be able to apply job (PRIORITY)
        - Should be able to withdraw job application
    - Recruiter:
        - Manage(view/edit) company profile:
            - about (PRIORITY)
            - contact info
        - Manage job applicant:
            - view job applicants list (PRIORITY)
            - view job applicant profile (PRIORITY)
            - reject job applicant (dont/wont notify applicant)
            - approve job applicant (dont/wont notify applicant)
        - Manage job posting:
            - close job posting with reason:
                - already found applicant
                - job posting widthrawn
                - others