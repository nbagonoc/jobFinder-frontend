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
            - personal details  VIEW (DONE)
                - contact info (DONE)
                - first name, last name (DONE)
            - about
            - education
            - experience
            - skills
        - Should be able to apply job (DONE)
        - Should be able to withdraw job application
    - Recruiter:
        - Manage(view/edit) company profile:
            - about (PRIORITY)
            - contact info
        - Manage job applicant:
            - view job applicants list (DONE)
            - view job applicant (DONE)
            - reject job applicant (dont/wont notify applicant)
            - approve job applicant (dont/wont notify applicant)
        - Manage job posting:
            - close job posting with reason:
                - already found applicant
                - job posting widthrawn
                - others
    - Others:
        - Might want to move the profile in auth state
    